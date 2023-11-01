#include <Wire.h>
#include <Adafruit_INA219.h>
#define tempo 5

Adafruit_INA219 ina219;

void setup(void) 
{
  Serial.begin(115200);
  while (!Serial) {
      delay(1);
  }

  if (! ina219.begin()) {
    Serial.println("Falha ao encontrar o chip INA219");
    while (1) { delay(10); }
  }
  //calibrar para 32V, 1A
  ina219.setCalibration_32V_1A();
  //calibrar para 16V, 400mA, maior precisão menor alcance.
  //ina219.setCalibration_16V_400mA();
  
  Serial.println("MEDINDO CORRENTE COM O INA219 \n");
}

void loop(void) 
{
  float shuntvoltage = 0;
  float busvoltage = 0;
  float current_mA = 0;
  float loadvoltage = 0;
  float power_mW = 0;

  for(int t = 0; t <= tempo-1 ; t++){
   shuntvoltage = ina219.getShuntVoltage_mV();
   busvoltage = ina219.getBusVoltage_V();
   current_mA += ina219.getCurrent_mA();
   power_mW += ina219.getPower_mW();
   loadvoltage += busvoltage + (shuntvoltage / 1000);
   delay(1000)
  }

  current_mA = current_mA/tempo;
  loadvoltage = loadvoltage/tempo;
  power_mW = power_mW/tempo;

  Serial.print("Voltagem da carga:  "); Serial.print(loadvoltage); Serial.println(" V");
  Serial.print("Corrente:       "); Serial.print(current_mA); Serial.println(" mA");
  Serial.print("Potência:         "); Serial.print(power_mW); Serial.println(" mW");
  Serial.println("");

  shuntvoltage = 0;
  busvoltage = 0;
  current_mA = 0;
  loadvoltage = 0;
  power_mW = 0;

}

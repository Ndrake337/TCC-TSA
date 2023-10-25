#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include "EmonLib.h" 
 
EnergyMonitor emon1;
 
//Tensao da rede eletrica
int rede = 127;
 
//Pino do sensor SCT
int pino_sct = 1;

//Inicializa o display no endereco 0x27
LiquidCrystal_I2C lcd(0x27,16,2);

void setup()
{
  lcd.init();
    
  lcd.begin(16, 2);
  lcd.clear();
  Serial.begin(9600);   
  emon1.current(pino_sct, 27);
  //Informacoes iniciais display
  lcd.setCursor(0,0);
  lcd.print("Corr.(A):");
  lcd.setCursor(0,1);
  lcd.print("Pot. (W):");
}

void loop()
{
  lcd.setBacklight(HIGH);
  double Irms = emon1.calcIrms(1480);
  //Mostra o valor da corrente
  Serial.print("Corrente : ");
  Serial.print(Irms); // Irms
  lcd.setCursor(10,0);
  if(Irms<0.5)
  lcd.print("0.000");
  else
  lcd.print(Irms);
   
  //Calcula e mostra o valor da potencia
  Serial.print(" Potencia : ");
  Serial.println(Irms*rede);
  lcd.setCursor(10,1);
  lcd.print("      ");
  lcd.setCursor(10,1);
  if(Irms<0.5)
  lcd.print("0.000");
  else
  lcd.print(Irms*rede,1);
   
  delay(1000);
}
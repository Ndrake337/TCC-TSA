
// --- Bibliotecas Auxiliares ---
#include <virtuabotixRTC.h>                    //biblioteca para o RTC DS1302      
#include <Servo.h>                             //biblioteca para o microservo

// ========================================================================================================
// --- Mapeamento de Hardware ---
//BOMBA
#define pinBomba 2
//DS1302
#define   clk   3
#define   dat   4
#define   rst   5
//micro servo
#define SERVO 6 // Porta Digital 6 PWM


// ========================================================================================================
// --- Constantes Auxiliares ---
// DS1302 relógio
#define   segL       0  //segundos
#define   minL       48 //minutos
#define   horL       14 //horas
#define   d_semL      2 //dia da semana
#define   d_mesL      6 //dia do mes
#define   mesL       11 //mes
#define   anoL     2023 //ano
// micro servo
#define posicaoNeutra 115 //posicao neutra
#define posicaoLeste 60 //posicao virada ao leste (comeco do dia)
#define posicaoOeste 170 //posicao virada ao oeste (fim do dia)

//Variáveis
Servo s; // Variável Servo
int pos; // Posição Servo



// ========================================================================================================
// --- Declaração de Objetos ---
virtuabotixRTC   myRTC(clk, dat, rst);         //declara objeto para o RTC


// ========================================================================================================
// --- Protótipo das Funções ---
void DS1302();
void week(int dayW);
void tracking(int minutos, int horas);

// ========================================================================================================
// --- Configurações Iniciais ---
void setup()  
{   
  pinMode(pinBomba,OUTPUT);
  s.attach(SERVO);
  Serial.begin(9600);
  //Faça upload do código para o Arduino uma vez para carregar os
  //dados iniciai no RTC.
  //Após, comente a linha abaixo e faça upload novamente. 
  //myRTC.setDS1302Time(segL, minL, horL, d_semL, d_mesL, mesL, anoL);
  
} //end setup


// ========================================================================================================
// --- Loop Infinito ---
void loop()  
{
  switch(myRTC.hours){
    case 5 ... 7: 
      s.write(posicaoLeste);
      break;

    case 8 ... 16:
      tracking(myRTC.minutes, myRTC.hours);
      break;

    case 17 ... 20:
      s.write(posicaoOeste);
      break;

    case 21:
      s.write(posicaoNeutra);
      if(myRTC.minutes == 30 && myRTC.seconds < 10){
        delay(2000);
        digitalWrite(pinBomba, HIGH);
        delay(15000);
        digitalWrite(pinBomba, LOW);
      }


    default:
      s.write(posicaoNeutra);
      break;
  }
  
   DS1302();
  
} //end loop


// ========================================================================================================
// --- Desenvolvimento das Funções ---
void DS1302()
{
  myRTC.updateTime();         //faz leitura do DS1302

  // Imprime informações
  Serial.print(" -> ");
  week(myRTC.dayofweek);
  Serial.print(" | ");
  Serial.print(myRTC.dayofmonth);
  Serial.print("/");
  Serial.print(myRTC.month);
  Serial.print("/");
  Serial.print(myRTC.year);
  Serial.print(" | ");
  if(myRTC.hours < 10) Serial.print("0");
  Serial.print(myRTC.hours);
  Serial.print(":");
  if(myRTC.minutes < 10) Serial.print("0");
  Serial.print(myRTC.minutes);
  Serial.print(":");
  if(myRTC.seconds < 10) Serial.print("0");
  Serial.println(myRTC.seconds);
  delay(1000);
  
}

 
void week(int dayW)
{
  
  switch(dayW)
  {
    case 1: Serial.print("Dom"); break;
    case 2: Serial.print("Seg"); break;
    case 3: Serial.print("Ter"); break;
    case 4: Serial.print("Qua"); break;
    case 5: Serial.print("Qui"); break;
    case 6: Serial.print("Sex"); break;
    case 7: Serial.print("Sab"); break;
   
  } //end switch
  
} //end week


void tracking(int minutos, int horas)
{
  s.write((horas-8)*13+63+(minutos*0.2));
}











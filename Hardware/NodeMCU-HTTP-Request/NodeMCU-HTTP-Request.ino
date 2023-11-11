#include <ArduinoJson.h>

#include <NTPClient.h>
#include <WiFiUdp.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

#include <WiFiClientSecure.h>
// Replace with your network credentials
const char *ssid = "Sieria";
const char *password = "#Msr11343";

//iterador
int i = 0;

// http request variables
const String URL = "https://tcc-tsa-api.onrender.com/logs";
WiFiClientSecure httpsClient;

//Declarando JSON
const int capacity = JSON_OBJECT_SIZE(1) +JSON_ARRAY_SIZE(30) + 30 * JSON_OBJECT_SIZE(3);
StaticJsonDocument<capacity> doc;
JsonArray logs = doc.createNestedArray("logs");

// Define NTP Client to get time
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org");

void setup()
{
  // Initialize Serial Monitor
  Serial.begin(115200);

  // Connect to Wi-Fi
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }

  // Initialize a NTPClient to get time
  timeClient.begin();
  int GMT = -10800; //GMT -3
  timeClient.setTimeOffset(GMT);
}

void loop()
{
  timeClient.update();
  //obtendo o tempo em MS
  time_t epochTime = timeClient.getEpochTime();
  
  //convertendo e obtendo o tempo e grandezas nescessárias
  String formattedTime = timeClient.getFormattedTime();
  int currentMinute = timeClient.getMinutes();
  int currentSecond = timeClient.getSeconds();
  struct tm *ptm = gmtime((time_t *)&epochTime);
  int monthDay = ptm->tm_mday;
  int currentMonth = ptm->tm_mon + 1;
  int currentYear = ptm->tm_year + 1900;
  
  // Print complete date on JS Format:
  String jsDate = String(currentYear) + "-" + String(currentMonth) + "-" + String(monthDay) + "T" + formattedTime + "Z";
  Serial.print("Js date: ");
  Serial.println(jsDate);

  //armazenando em array local dados de log do tracker
  if (currentSecond == 0)
  {
    logs[i]["register_time"] = jsDate;
    logs[i]["current"] = random(500,800)/100.0 ;
    logs[i]["power"] = random(600,800);
    i++;
  }

  Serial.print("HTTP Request Body: ");
  serializeJson(doc, Serial);
  
  Serial.println("");
  
  if ((currentMinute == 41|| currentMinute == 00) && currentSecond == 1)
  {
    const char *host = "tcc-tsa-api.onrender.com";
    const char *uri = "/logs";
    String output;
    serializeJson(doc, output);
    Serial.println("JSON to String");
    const char *body = output.c_str();
    char postStr[40];
    sprintf(postStr, "POST %s HTTP/1.1", uri);
    const int httpPort = 443; // 80 is for HTTP / 443 is for HTTPS!
    httpsClient.setInsecure(); // this is the magical line that makes everything work
    if (!httpsClient.connect(host, httpPort)) { //works!
      Serial.println("connection failed");
    }
    httpsClient.println(postStr);
    httpsClient.print("Host: "); httpsClient.println(host);
    httpsClient.println("Content-Type: application/json");
    httpsClient.print("Content-Length: "); httpsClient.println(strlen(body));
    httpsClient.println("");    // extra `\r\n` to separate the http header and http body
    httpsClient.println(body);
        
       
    i=0;
    logs.clear();
  }

  Serial.println("");
  
  delay(1000);
}

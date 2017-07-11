char c="";
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(13,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(Serial.available() >0){
    c=Serial.read();
    Serial.print(c);
    if(c=='1'){
        digitalWrite(13,1); 
      }
    else if(c=='2'){
        digitalWrite(13,0);
      }
      delay(500);
  }
}

#include <Servo.h>

Servo myservo;

int photoPin = A0;

int redPin = 6;
int greenPin = 7;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  myservo.attach(9);
  myservo.write(0);
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);

}

void loop() {
  // put your main code here, to run repeatedly:
  int light = analogRead(photoPin);
  Serial.println(light);
  if (light > 10) {
    myservo.write(90);
    setColor(255, 0);
  }

  else{
    myservo.write(0);
    setColor(0, 255);
  }
  delay(100);

}
void setColor(int redValue, int greenValue){
  analogWrite(redPin, redValue);
  analogWrite(greenPin, greenValue);
}

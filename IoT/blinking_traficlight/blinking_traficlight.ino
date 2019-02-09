
// the setup function runs once when you press reset or power the board
int agreen = 10;
int ayellow = 11;
int ared = 12;
int bgreen = 6;
int byellow = 5;
int bred = 4;

void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(agreen, OUTPUT);
  pinMode(ayellow, OUTPUT);
  pinMode(ared, OUTPUT);
  pinMode(bgreen, OUTPUT);
  pinMode(byellow, OUTPUT);
  pinMode(bred, OUTPUT);
  digitalWrite(bred, HIGH);
  digitalWrite(ared, HIGH);
}

// the loop function runs over and over again forever
void loop() {
  aLoop();
  bLoop();
}

void aLoop(){
  delay(1000);
  digitalWrite(ayellow, HIGH);
  delay(1000);
  digitalWrite(ayellow, LOW);
  digitalWrite(ared, LOW);
  digitalWrite(agreen, HIGH);
  delay(1000);
  digitalWrite(agreen, LOW);
  digitalWrite(ayellow, HIGH);
  delay(1000);
  digitalWrite(ayellow, LOW);
  digitalWrite(ared, HIGH);
}

void bLoop(){
  delay(1000);
  digitalWrite(byellow, HIGH);
  delay(1000);
  digitalWrite(byellow, LOW);
  digitalWrite(bred, LOW);
  digitalWrite(bgreen, HIGH);
  delay(1000);
  digitalWrite(bgreen, LOW);
  digitalWrite(byellow, HIGH);
  delay(1000);
  digitalWrite(byellow, LOW);
  digitalWrite(bred, HIGH);
}

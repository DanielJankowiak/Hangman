
let arrayWithPasswords = ['Bez pracy nie ma kołaczy',
'Międzykontynentalny', 'konstantynopolitańczycy', 'rozentuzjazmowany', 
'wyidealizowany', 'żniwiarkomłocarnia','tyranozaurus rex',
'Prestidigitator', 'Personifikacja', 'Onomatopeja',
'Wyindywidualizowany' ,'Darowanemu koniowi w zęby się nie zagląda',
'Fortuna kołem się toczy','Nie chwal dnia przed zachodem słońca',
'Lepszy wróbel w garści niż gołąb na dachu','Apetyt rośnie w miarę jedzenia',
' Co ma wisieć nie utonie','Dzieci i ryby głosu nie mają',
 'Grosz do grosza a będzie kokosza',' Łaska pańska na pstrym koniu jeździ'];
 console.log(arrayWithPasswords.length);
 
let randomNumber = Math.round(Math.random() * arrayWithPasswords.length);
console.log(randomNumber);
let randomizedPassword = arrayWithPasswords[randomNumber];

let password = '';
password = randomizedPassword.toUpperCase();

const yes = new Audio("yes.wav");
const no = new Audio("no.wav");
const fail = new Audio("fail.mp3");
const tada = new Audio("Tada.wav");
let failed = 0;

let length = password.length;
console.log(length);
let password2 = '';

for (i=0;i<length;i++) {
  if (password.charAt(i)== ' ')
    password2 = password2 + ' ';
  else
    password2 = password2 + '-';
}

 window.onload = start;

function drawPassword() {
  document.getElementById('scoreboard').innerHTML = password2;
}
const allLetters = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I",
  "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś",
  "T", "U", "V", "W", "X", "Y", "Z", "Ż", "Ź"];
function start() {
  let alphabet = '';
  for (i=0;i<=34;i++){
    let element = "lit" + i;
    alphabet = alphabet + '<div class="letter" onclick ="check('+i+')" id="'+element+'">'+allLetters[i]+'</div>';
    if ((i+1) % 7 == 0)
      alphabet = alphabet + '<div style="clear: both;"></div>';
  }
  document.getElementById('letters').innerHTML = alphabet;

  drawPassword();
}

String.prototype.setSign = function(place,sign) {
  if (place > this.length - 1) {
    return this.toString();
  }
  else {
    return this.substr(0,place) + sign + this.substr(place + 1);
  }
}
function check(nr) {
  let clicked = false;

  for (i = 0;i < length; i++) {
    if (password.charAt(i) == allLetters[nr]) {
      password2 = password2.setSign(i,allLetters[nr]);
      clicked = true;
    }
  }
  if (clicked == true ) {
    yes.play();
    let element = "lit" + nr;
    document.getElementById(element).style.backgroundColor = "#003300";
    document.getElementById(element).style.border = "3px solid green";
    document.getElementById(element).style.color = "#00C000";
    document.getElementById(element).style.cursor = "default";  

    drawPassword(); 
  }
  else {
    no.play();
    let element = "lit" + nr;
    document.getElementById(element).style.backgroundColor = "#330000";
    document.getElementById(element).style.border = "3px solid #C00000";
    document.getElementById(element).style.color = "#C00000";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).setAttribute("onclick","");

    failed++;
    let picture = "img/s"+ failed + ".jpg";
    document.getElementById("szubienica").innerHTML = '<img src="'+picture+'" alt="szubienica" />';
  }
  if (password == password2) {
    tada.play();
    document.getElementById("letters").innerHTML  = "Brawo! Podano prawidłowe hasło: "+password+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'; 
  }
  if (failed >= 9){
    fail.play();
    document.getElementById("letters").innerHTML  = "Przegrana! Prawidłowe hasło: "+password+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
  }
}



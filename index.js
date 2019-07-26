var arrayTruth = [
  "What is your most embarrassing moment?",
  "Describe your weirdest dream.",
  "Who is your crush?",
  "Who would you trade lives with?",
  "Have you ever peed in a pool?",
];

var arrayDare = [
  "Do whatever dance the group tells you to",
  "Show your 10th photo on your camera roll",
  "Choose a song and sing along to it for 30 seconds",
  "Prank call your 7th contact",
  "Talk in an accent for the rest of the game",
]

var truthButton = $('.truthbutton');
truthButton.on('click' , showTruth);
var truthContainer = $('.truthcontainer')

function showTruth() {

truthContainer.text(arrayTruth)

truthContainer.append('<img src=" ">')
}

var dareButton = $('.darebutton');
dareButton.on('click' , showDare);

var dareContainer = $('.darecontainer')

function showDare() {

dareContainer.text(arrayDare[2]);
dareContainer.append(`<img src="cs">`);

}

var submit = $('.submit');
var secretContainer = $(`.secretContainer`);
var secretCode = $('.secretPasscode').val();

submit.on('click', checkCode);

function checkCode() {

  if (secretCode.val() === "tech,sis") {

    secretContainer.text("ur in!")
    secretContainer.append(`<img src="https://media.timeout.com/images/105312523/630/472/image.jpg">`);



  }
else{
  secretContainer.text("skjdfkldsj... no")
  secretContainer.append(`<img src="https://miro.medium.com/max/727/1*wil6VD9horS1zDTneCKD-g.jpeg">`);
}

}

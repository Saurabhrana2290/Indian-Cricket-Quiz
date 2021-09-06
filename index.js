var readLineSync = require("readline-sync");
var userName = readLineSync.question("Enter your name please:\n");
console.log(`Welcome ${userName} to Indian Cricket Quiz Game!\nYou can play to test your knowledge about Indian Cricket.\nYou can write any one option from a,b,c. You only need to write option serial alphabet i.e a or b or c\n`);
var score = 0;
var questions =[ 
  {
  question : "1) Who is the current head coach of Indian Cricket Team in September 2021?\na) Sunil Gavaskar\nb) Ravi shastri\nc) Anil Kumble\n",
  answer : "b"
  },
  {
  question : "2) Who is the only Indian Captain to win all ICC trophies?\na) Saurav Ganguli\nb) Virat Kholi\nc) MS Dhoni\n",
  answer : "c"
  },
  {
  question : "3) Which of the following batsman has scored most runs for India including all formats?\na) SR Tendulkar\nb) Rahul Dravid\nc) VVS Laxman\n",
  answer : "a"
  },
  {
  question : "4) Which batsman has the highest number of double centuries in ODI?\na) Rohit Sharma\nb) SR Tendulkar\nc) Virender Sehwag\n",
  answer : "a"
  },
  {
  question : "5) Which of the following pair has hit six sixes in an over?\na) MS Dhoni & Yuvraj Singh \nb) Virender Sehwag & Kapil Dev\nc) Yuvraj Singh & Ravi Shastri\n",
  answer : "c"
  },
  {
  question : "6) In which years, India have won two ODI WC?\na) 1979 & 2011\nb) 1983 & 2011\nc) 1987 & 2015\n",
  answer : "b"
  },
  {
  question : "7) Who was man of the match in the final of 2011 WC?\na) Yuvraj Singh\nb) SR Tendulkar\nc) MS Dhoni\n",
  answer : "c"
  },
  {
  question : "8) Which team has won most numbers of IPL seasons?\na) Mumbai Indians\nb) Chennai Super Kings \nc) Kolkata Night Riders\n",
  answer : "a"
  },
  {
  question : "9) Which of the following spinner bowler has taken most numbers of wickets in IPL?\na) R Ashwin\nb) Harbhajan Singh\nc) Amit Mishra\n",
  answer : "c"
  },
  {
  question : "10) Who has taken most number of catches for India?\na) R Dravid\nb) Suresh Raina\nc) Virat Kholi\n",
  answer : "a"
  },
]

function play(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toLowerCase() == answer.toLowerCase()){
    score++;
    console.log("Well done, You are Right!");
    console.log(`Current Score : ${score}`);
  }else{
    console.log("Oops, You are Wrong!");
    console.log(`Current Score : ${score}`);
  }
}

for (var i=0; i<questions.length; i++){
  play(questions[i].question,questions[i].answer)
  console.log("----------------------------------");
}

console.log(`Final Score : ${score}/${10} `);
if(score==0){
  console.log("Better luck next time!");
}
else if(1 <= score && score <=5){
  console.log("Nice try!");
}
else if(5 < score && score <= 7){
  console.log("Satisfactory, tried well!");
}
else if(score == 8){
  console.log("Good!");
}
else if(score == 9){
  console.log("Almost there, Very good!");
}
else{
  console.log("Outstanding! You are awesome");
}

console.log("\n    THANKS FOR PLAYING :)     \n");
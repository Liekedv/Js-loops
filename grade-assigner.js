function assignscore(score) {
  if (score > 90) {
      return 'A';
  } else if (score > 80) {
      return 'B';
  } else if (score > 70) {
      return 'C';
  } else if (score > 65) {
      return 'D';
  } else {
      return 'E';
  }
}

for (score = 60; score <= 100; score ++){
 // console.log(score);

  if (score >= 65 && score <= 70) {
  console.log("Voor " + score + " punten, krijg je een D");
}
else if (score >= 71 && score <= 80) {
  console.log("Voor " + score + " punten, krijg je een C");
}
else if (score >= 81 && score <= 90) {
  console.log("Voor " + score + " punten, krijg je een B");
}
else if (score >= 91) {
  console.log("Voor " + score + " punten, krijg je een A");
}
else {
  console.log ("Voor " + score + " punten, krijg je een E");
}
};

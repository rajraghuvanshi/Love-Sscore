prompt("What's your name?")
prompt("What's their name?")

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%." + " If one day the moon calls you by your name, don't be surprised, because every night I tell her about you.");
}
if (loveScore > 30 && loveScore <= 70) {
     alert("Your love score is " + loveScore + "%." + " If you find someone you love in your life, then hang on to that love.");
}
if (loveScore <= 30) {
     alert("Your love score is " + loveScore + "%." + " If he had to choose between breathing and loving you, he would use his last breath to tell you that he loves you.");
}
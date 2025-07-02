var score = 0;
var clickValue = 1;

function incrementScore(){
    score = score + clickValue;
    document.getElementById("score").innerHTML = score;
}
function clickValue2(){
    if (score >= 10){
        clickValue += 1;
        score = score - 10;
        document.getElementById("score").innerHTML = score;
        document.getElementById("clickValue").innerHTML = clickValue;
    }
}
function resetGame() {
    score = 0;
    clickValue = 1;
    document.getElementById("score").innerHTML = score;
    document.getElementById("clickValue").innerHTML = clickValue;
}









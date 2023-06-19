var num1 = Math.floor(Math.random()*6)+1;
var num2 = Math.floor(Math.random()*6)+1;

var s="";

document.getElementsByClassName("img1")[0].setAttribute('src','./images/dice'+num1+'.png');
document.getElementsByClassName("img2")[0].setAttribute('src','./images/dice'+num2+'.png');
console.log('images/dice'+num1+'.png');
console.log('images/dice'+num2+'.png');
if (num1>num2) {
    s = '🏁Player 1 Wins';

} 
else if(num2>num1)
{
    s = 'Player 2 Wins🏴';
}
else
{
    s = '🎌Draw🎌';
}

document.querySelector('h1').innerHTML=s;


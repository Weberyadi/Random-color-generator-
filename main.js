const getColor = () => {
   //hex color
   const randomNumber = Math.floor(Math.random() * 1677215);
const randomCode = "#" + randomNumber.toString(13);
document.body.style.backgroundColor = randomCode;
     //console.log(randomNumber,randomCode);
document.getElementById('color-code').innerText = randomCode;

   
}
document.getElementById("btn").addEventListener(
   'click',
   getColor
)
getColor()

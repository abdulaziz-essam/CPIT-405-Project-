var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var jumpSound = new Audio('Jump.mp3');
var GameOver = new Audio('GameOver.mp3');





function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
        jumpSound.play();},300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        GameOver.play();
        alert("GameOver Duck.. \r\nYour Score is: "+Math.floor(counter/100));
        
        // myFunc(Math.floor(counter / 100))
  location.href="./gameOver.html";
      
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
// function myFunc(score) {



//     var params = 'name=' + score + '&email=33';

//     var xhr = new XMLHttpRequest();

//     xhr.open('POST', './score.php', true);

//     // MUST Add When submitting a form
//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

//     xhr.onload = function () {
//         if (xhr.status == 200) {
//             document.getElementById('msg').innerHTML = xhr.responseText;
//         }
//     }

//     xhr.send(JSON.stringify(params));

// }
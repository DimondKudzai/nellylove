const words=[

{
ch:"你好",
py:"Nǐ hǎo",
en:"Hello"
},

{
ch:"谢谢",
py:"Xiè xiè",
en:"Thank you"
},

{
ch:"学习",
py:"Xué xí",
en:"Study"
},

{
ch:"朋友",
py:"Péng yǒu",
en:"Friend"
}

];


let index=0;


function changeWord(){

index++;

if(index>=words.length){
index=0;
}


document.querySelector(".word-card h1")
.innerHTML=words[index].ch;


document.querySelector(".word-card p")
.innerHTML=words[index].py;


document.querySelector(".word-card strong")
.innerHTML=words[index].en;

}




document
.getElementById("menu")
.onclick=function(){

document
.getElementById("navLinks")
.style.display="flex";

}
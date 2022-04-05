function slider(){
    imgPuceRem()
    index++;
    if(index>image.length-1){
        index=0;
    }
    imgPuceAdd()
}
function imgPuceRem(){
    image[index].classList.remove("ecran")
    btncir[index].classList.remove("activ")
}
function imgPuceAdd(){
    image[index].classList.add("ecran");
    btncir[index].classList.add("activ");
}


let btnback = document.querySelector("button.backward");
let btnnext = document.querySelector("button.forward");
let btncir = document.querySelectorAll(".fa-circle");
let image = document.querySelectorAll("img");
let play = document.querySelectorAll("button.auto");
let slide;
let index = 0;

btnback.addEventListener("click", function(){
    imgPuceRem();
    index--;
    if(index<0){
        index=image.length-1;
    }
    imgPuceAdd();
})

btnnext.addEventListener("click", function(){
    imgPuceRem();
    index++;
    if(index>=image.length){
        index=0;
    }
    imgPuceAdd();
})

for(let i=0;i<btncir.length ; i++){
    btncir[i].addEventListener("click", function(){
        if(i==index){
            return;
        }
        imgPuceRem();
        index = i;
        imgPuceAdd();
    })
}


for(let j=0; j<play.length; j++)
play[j].addEventListener("click", function(){
    
    if(j==0){
        slide=setInterval(slider, 1000);
        play[j].classList.remove("ondesk");
        play[j+1].classList.add("ondesk")
    }
    if(j==1){
        clearInterval(slide);
        play[j].classList.remove("ondesk");
        play[j-1].classList.add("ondesk")
    }

})


let modal = document.getElementById("modal-container");
let modalImg = document.getElementById("img01");

let imgArray = []

for(let i =0;i <7; i++){
    imgArray.push(document.getElementsByTagName("img")[i])
}

for(let i = 1 ;i < 7; i++){
    imgArray[i].onclick = function(){
        modal.style.display ="block";
        modalImg.src = this.src;
    }
}


modal.onclick = function (){
    modal.style.display ="none"

}
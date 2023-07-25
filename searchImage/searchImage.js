let getForm =document.querySelector("#form")
let SearchInput=document.querySelector("#searchInput")
let searchButton=document.querySelector("#searchButton")
let clearButton=document.querySelector("#clearButton")
let imageList=document.querySelector(".imageList-wrapper")

runEvents()

function runEvents(){
    getForm.addEventListener("submit",searchImage)
    //searchButton.addEventListener("click",searchImage)
    clearButton.addEventListener("click",clearSearch)
}

function clearSearch(){
    SearchInput.value=""
    Array.from(imageList.children).forEach(child=>{
        child.remove()
    })
}
function searchImage(e){

    //console.log("RUNNING")
    let values= SearchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${values}`,{
        method: "GET",
        headers:{
            Authorization: "Client-ID uSJQjNPaVyMpNMMrzAZwCF81Uq7wbPqY5tkFBpeaddI"
        }
    })
    .then((reachdata) => reachdata.json())
    .then((thisData)=>{
        
        Array.from(thisData.results).forEach(images => {//arrayFrom burada gerekl değil thisdata.results zaten array olduğu için foreach çalışır
            addUimage(images.urls.small)
        
        });
    })
    .catch((err)=>console.log(err))

    e.preventDefault();
}

function addUimage(url){
    let div=document.createElement("div")
    div.classList="imagediv"



    let img=document.createElement("img")
    img.setAttribute("src",url)
    img.width="300"
    img.height="300"

    div.appendChild(img)
    imageList.appendChild(div)

}
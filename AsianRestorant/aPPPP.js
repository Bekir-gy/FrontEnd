let getButtons=document.querySelector("#buttons")
//getButtons.classList.add=("btn-item")
let buttonAll=document.createElement('button')
let buttonKorea=document.createElement('button')
let buttonJapan=document.createElement('button')
let buttonChina=document.createElement('button')
buttonAll.classList.add("btn","btn-outline-dark","btn-item")
buttonKorea.classList.add("btn","btn-outline-dark","btn-item")
buttonJapan.classList.add("btn","btn-outline-dark","btn-item")
buttonChina.classList.add("btn","btn-outline-dark","btn-item")
buttonAll.innerHTML="All"
buttonKorea.innerHTML="Korea"
buttonJapan.innerHTML="Japan"
buttonChina.innerHTML="China"
getButtons.appendChild(buttonAll)
getButtons.appendChild(buttonKorea)
getButtons.appendChild(buttonJapan)
getButtons.appendChild(buttonChina)

let AsianFood={
    Id: "asian", 
    title: "food",
    category: "caegory",
    price : "price",
    img: "img",
    desc: "desc"
}

buttonAll.addEventListener('click', function(){
    AsianFood.Id="All"
    this.title="Allfood"
    this.category="Allcategory"
    this.price="All pice"
    this.img="all img"
    this.desc="all desc"

    location.href='#m1'
    //window.open('../index(1).html')
})

buttonChina.addEventListener('click',function(){
    createDiv1_3.setAttribute('id',"id1")
    console.log(location.href='#id1')
})
console.log(AsianFood)



let getMenu=document.querySelector("#sectionMenu")


let createDiv=document.createElement('div')
createDiv.classList.add("menu-items", "col-lg-6", "col-sm-12")
let addimg=document.createElement('img')
addimg.src="https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg"
addimg.classList=("photo")
//addimg.style.border="155px"

let createDiv1_1=document.createElement('div')
createDiv1_1.classList="menu-info"

let createDiv1_2=document.createElement('div')
createDiv1_2.classList="menu-title"
createDiv1_2.innerHTML=`<h4>ibibibib</h4> <h4 class="price">10.99</h4>`

let createDiv1_3=document.createElement('div')
createDiv1_3.classList="menu-text"
createDiv1_3.innerHTML="spices, pasta, oil, fish"


createDiv.appendChild(addimg)
createDiv1_1.appendChild(createDiv1_2)
createDiv1_1.appendChild(createDiv1_3)


createDiv.appendChild(createDiv1_1)
//getMenu.appendChild(createDiv)



getMenu.appendChild(createDiv)


// ------------------------- img
let createDiv2=document.createElement('div')
createDiv2.classList.add("menu-items", "col-lg-6", "col-sm-12")
let addimg2=document.createElement('img')
addimg2.src="https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg"
addimg2.classList=("photo")


//
let createDiv2_1=document.createElement('div')
createDiv2_1.classList="menu-info"

let createDiv2_2=document.createElement('div')
createDiv2_2.classList="menu-title"
createDiv2_2.innerHTML=`<h4>ibibibib</h4> <h4 class="price">0.99</h4>`

let createDiv2_3=document.createElement('div')
createDiv2_3.classList="menu-text"
createDiv2_3.innerHTML="spices, pasta, oil, fish"



createDiv2.appendChild(addimg2)

//createDiv.appendChild(addimg)
createDiv2_1.appendChild(createDiv2_2)
createDiv2_1.appendChild(createDiv2_3)


createDiv2.appendChild(createDiv2_1)



//




getMenu.appendChild(createDiv2)





// ------------------------- img
let createDiv3=document.createElement('div')
createDiv3.classList.add("menu-items", "col-lg-6", "col-sm-12")
let addimg3=document.createElement('img')
addimg3.src="https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg"
addimg3.classList=("photo")



//

let createDiv3_1=document.createElement('div')
createDiv3_1.classList="menu-info"

let createDiv3_2=document.createElement('div')
createDiv3_2.classList="menu-title"
createDiv3_2.innerHTML=`<h4>ibibibib</h4> <h4 class="price">85.87</h4>`

let createDiv3_3=document.createElement('div')
createDiv3_3.classList="menu-text"
createDiv3_3.innerHTML="spices, pasta, oil, fish"


createDiv3.appendChild(addimg3)

createDiv3_1.appendChild(createDiv3_2)
createDiv3_1.appendChild(createDiv3_3)


createDiv3.appendChild(createDiv3_1)


//

getMenu.appendChild(createDiv3)




// ------------------------- img
let createDiv4=document.createElement('div')
createDiv4.classList.add("menu-items", "col-lg-6", "col-sm-12")
let addimg4=document.createElement('img')
addimg4.src="https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg"
addimg4.classList=("photo")



//

let createDiv4_1=document.createElement('div')
createDiv4_1.classList="menu-info"

let createDiv4_2=document.createElement('div')
createDiv4_2.classList="menu-title"
createDiv4_2.innerHTML=`<h4>ibibibib</h4> <h4 class="price">64.12</h4>`

let createDiv4_3=document.createElement('div')
createDiv4_3.classList="menu-text"
createDiv4_3.innerHTML="spices, pasta, oil, fish"

createDiv4.appendChild(addimg4)



createDiv4_1.appendChild(createDiv4_2)
createDiv4_1.appendChild(createDiv4_3)


createDiv4.appendChild(createDiv4_1)


//
getMenu.appendChild(createDiv4)
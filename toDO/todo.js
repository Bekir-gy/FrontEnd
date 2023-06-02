let getClick=document.querySelector("#liveToastBtn")
let getList=document.querySelector("#list")

 
let localS=[]
checkLocalStorage()
if(localS){

    localS.forEach(item=>{
        let liDOM=document.createElement('li') 
        liDOM.textContent=item
        getList.appendChild(liDOM) 
        

        let span=document.createElement('span')
        let text =document.createTextNode('x')
        span.className='close'
        span.appendChild(text)
        liDOM.appendChild(span)    
    
        
        span.onclick=function(){
            let li =this.parentElement;
            li.style.display='none'

            checkLocalStorage() 


            let textt=li.firstChild.textContent  
        localS.forEach((item,index)=>{
             if(textt===item){
                localS.splice(index,1)

             }})
             console.log(textt)

            localStorage.setItem('add',JSON.stringify(localS))
    }
        
    })
    
    
}


getClick.addEventListener('onclick',newElement)
function newElement(event){
  // event.preventDefault()
    let getText=document.querySelector("#task")
    if(getText.value){

    let liDOM=document.createElement('li')
    liDOM.innerHTML=getText.value 
    getList.appendChild(liDOM)

    let span=document.createElement('span')
    let text =document.createTextNode('x')
    span.className='close'
    span.appendChild(text)
    liDOM.appendChild(span)    

    
    span.onclick=function(){
        let li =this.parentElement;
        li.style.display='none'

        checkLocalStorage() 

        let textt=li.firstChild.textContent  
        localS.forEach((item,index)=>{
             if(textt===item){
                localS.splice(index,1)

             }})
        console.log(textt)

            localStorage.setItem('add',JSON.stringify(localS))
    }
    addTODOLocalStorage(getText.value)
    getText.value=""
    // localS.push(getText.value)
    // localStorage.setItem('add',JSON.stringify(localS))
   $('.success.toast').toast("show")
} else{
        
    $('.error.toast').toast("show")

} 
}

 function addTODOLocalStorage(data){
         checkLocalStorage()
         localS.push(data)
         localStorage.setItem('add',JSON.stringify(localS))
        
     }

 function checkLocalStorage(){
     if(localStorage.getItem('add')===null){
         localS=[]
     }else{
         localS=JSON.parse(localStorage.getItem('add'))
     }
 }

getList.addEventListener('click',function(item){
    if(item.target.tagName='li'){
        item.target.classList.toggle('checked')
    }
})


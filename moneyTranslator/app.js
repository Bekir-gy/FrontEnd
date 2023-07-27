let firstCurrencyOption=document.querySelector("#firstCurrencyOption")
let secondCurrenyOption=document.querySelector("#secondCurrencyOption")
let amountInput=document.querySelector("#amount")
let resultInput=document.querySelector("#result")


runEvents();

function runEvents(){
    amountInput.addEventListener("input",exchange)
}
let getTranslator=new Traslator();
function exchange(){
        let amountValue=Number(amountInput.value.trim())

        let firstCurrencyValue=firstCurrencyOption.options[firstCurrencyOption.selectedIndex].textContent // kısaca denilebilir firstCurrencyOption.value

        let secondCurrenyValue=secondCurrenyOption.options[secondCurrenyOption.selectedIndex].textContent

       // console.log(amountValue,firstCurrencyValue,secondCurrenyValue)

        getTranslator.exchange(amountValue,firstCurrencyValue,secondCurrenyValue
        )
        .then(result=>{
            resultInput.value=result.toFixed(3)
        })

       

}
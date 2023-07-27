let amount=document.querySelector("#amount")
let firstCurrency=document.querySelector("#firstCurrencyOption")
let secondCurreny=document.querySelector("#secondCurrencyOption")
let result=document.querySelector("#result")


let currency=new traslator2()
runAllEvents()

function runAllEvents(){
    amount.addEventListener("input",exchange)
}

function exchange(){
    let convertedMoney=Number(amount.value.trim())
    
    let firstValue=firstCurrency.value
    let secondValue=secondCurreny.value
    
    currency.exchange(convertedMoney,firstValue,secondValue)

    .then(returnedResult=> {
        result.value=returnedResult.toFixed(3)
})
    






}


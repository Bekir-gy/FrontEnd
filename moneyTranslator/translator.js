class Traslator{
    constructor(){
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_iEtQEMy1Zx5k5QAbQ2VyEfHRW7xA0BLpvmKvwFzd&base_currency";
    
    }
     async exchange(amount,firstCurrency,secondCurrency) {
     
        let req=await fetch (`${this.url}${firstCurrency}`);
        let v1=await req.json();
        let result= amount*v1.data[secondCurrency]

        return result

        
     } 

    

}


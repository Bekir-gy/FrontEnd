class traslator2{
    constructor(){
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_iEtQEMy1Zx5k5QAbQ2VyEfHRW7xA0BLpvmKvwFzd&base_currency";
    }

    async exchange(amount,firstCurrency,secondCurrency){

            let response=await fetch(`${this.url}${firstCurrency}`);
            let datas=await response.json();
            let result=amount*datas.data[secondCurrency]
            return result;

    }

}
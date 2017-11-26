(function ($,window) {

    console.log('transactions')

    function getList(cb){
        request(transaction_list,cb)
    }
    
    
    
    window.transactions = {
        getList
    }

})(jQuery,window)


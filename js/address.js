(function ($,window) {
    
        console.log('addresses')
    
        function getList(params,cb){
            let url = address_list(params)
            request(url,cb)
        }
        
        
        
        
        window.transactions = {
            getList
        }

        
    
    })(jQuery,window)
    
    
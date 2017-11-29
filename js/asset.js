(function ($, window) {
    
        console.log('asset')
    
        function getList(params, cb) {
            let url = asset_list(params)
            request(url, cb)
        }
    
    
    
    
        window.assets = {
            getList
        }
    
    
    
    })(jQuery, window)
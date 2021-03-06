(function ($, window) {
    var app = $.sammy('#main', function () {
        this.use('Template', 'tpl');

        

        // define a 'route'
        // home 
        this.get('#/', function () {
            // load some data
            console.log('#/')
            //this.partial('templates/home.tpl');
            this.redirect('#/transactions');
        });

        //assets
        this.get('#/assets', function () {
            // load some data
            loadingToggle()
            console.log('#/assets')
            let self = this
            jQuery.getScript("js/asset.js").done(() => {
                assets.getList({}, function (err, result) {
                    console.log('result', result.AssetQuery)
                    self.partial('templates/asset.tpl', {
                        data: result.AssetQuery
                    })
                    loadingToggle()
                })
            })
        });

        //blocks
        this.get('#/blocks', function () {
            // load some data
            console.log('#/block')
            this.partial('templates/block.tpl');
        });

        //transactions
        this.get('#/transactions', function () {
            // load some data
            
            console.log('#/transactions',this.params.search)
            let self = this
            let search = this.params['search']

            let render = function(){
                return () => {
                    loadingToggle()
                    jQuery.getScript("js/transaction.js").done(() => {
                        transactions.getList({search:search}, function (err, result) {
                            console.log('result', result)
                            self.partial('templates/transaction.tpl', {
                                data: result.TransactionQuery
                            })
                            loadingToggle()
                        })
                    })
                }
            }

            // socket.on('transaction', (data) => {
            //     console.log('socket transaction',data)
            //     // render()()
            //     // toast('亲！有新的数据到来，请刷新')
            // })

            render()()

        });

        // //transactions
        // this.get('#/transactions/:search', function () {
        //     // load some data
        //     console.log('#/transactions')
        //     let self = this
        //     let search = this.params['search']
        //     jQuery.getScript("js/transaction.js").done(() => {
        //         transactions.getList({search}, function (err, result) {
        //             console.log('result', result.TransactionQuery)
        //             self.partial('templates/transaction.tpl', {
        //                 data: result.TransactionQuery
        //             })
        //         })
        //     })
        // });

        //addresses
        this.get('#/addresses', function () {
            // load some data
            console.log('#/addresses')
            
            //this.partial('templates/address.tpl');
            let self = this
            let render = function(){
                return ()=>{
                    loadingToggle()
                    jQuery.getScript("js/address.js").done(() => {
                        addresses.getList({}, function (err, result) {
                            console.log('result', result.AddressQuery)
                            self.partial('templates/address.tpl', {
                                data: result.AddressQuery
                            })
                            loadingToggle()
                        })
                    })
                }
            }

            //socket 
            // socket.on('address', (data) => {
            //     console.log('socket address',data)
            //    // render()()
            //    // toast('亲！有新的数据到来，请刷新')
            // })

            render()()
          
            


            

        });

        // address/:id
        this.get('#/address/:address', function () {
            // load some dat
            loadingToggle()
            console.log('#/address/:address', this.params['hash'])
           // this.partial('templates/address_id.tpl');
            let self = this
            let {address}  = this.params
            jQuery.getScript("js/address.js").done(() => {

                jQuery.getScript("js/transaction.js").done(() => {
                    addresses.getBalanceOf({
                        address:address,
                    }, function (err, result) {
                        console.log('addresses', result)
                        transactions.getList({address}, function (err, list) {
                            console.log('transactions', list)
    
                            self.partial('templates/address_id.tpl', {
                                data: result ? result :"",
                                address:address,
                                list: list.TransactionQuery
                            })
                             loadingToggle()
                        })
    
    
                    })
                })

            })
        });

        //addresses
        this.get('#/contracts', function () {
            // load some data
            console.log('#/contracts')
            this.partial('templates/contract.tpl');
            
        });

        // tx/:id
        this.get('#/tx/hash/:id', function () {
            // load some data
            loadingToggle()
            console.log('#/tx/:id', this.params['id'])
            let self = this
            let txid = this.params['id']
            jQuery.getScript("js/transaction.js").done(() => {
                transactions.getList({txid}, function (err, result) {
                    // console.log('result', result.TransactionQuery)
                    self.partial('templates/tx.tpl', {
                        data: result.TransactionQuery.rows || ''
                    })
                    loadingToggle()
                })
            })
        });



        //addresses
        this.get('#/top', function () {
            // load some data
            console.log('#/top')
        });
    })

    app.run('#/transactions');

   

    function loadingToggle(){
        $('#loading').loading('toggle');
    }

    function toast(msg){
        let snackbarContainer = document.querySelector('#neo-toast');
        snackbarContainer.style.backgroundColor = '#' +
        Math.floor(Math.random() * 0xFFFFFF).toString(16);
        let data = {message: msg};
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
    }
    

})(jQuery, window)
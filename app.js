(function ($) {
    var app = $.sammy('#main', function () {
        this.use('Template', 'tpl');

        // define a 'route'
        // home 
        this.get('#/', function () {
            // load some data
            console.log('#/')
            this.partial('templates/home.tpl');
        });

        //assets
        this.get('#/assets', function () {
            // load some data
            console.log('#/assets')
            this.partial('templates/asset.tpl');
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
            console.log('#/transactions')
            let self = this
            jQuery.getScript("js/transaction.js").done(() =>{
                transactions.getList(function(err,result){
                    console.log('result',result.TransactionQuery)
                    self.partial('templates/transaction.tpl',{
                          data:result.TransactionQuery
                      })
                })
            })

        });

        //addresses
        this.get('#/addresses', function () {
            // load some data
            console.log('#/addresses')
            this.partial('templates/address.tpl');
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
            console.log('#/tx/:id',this.params['id'] )
            this.partial('templates/tx.tpl');
        });

        //addresses
        this.get('#/top', function () {
            // load some data
            console.log('#/top')
        });
    })

    app.run('#/');
})(jQuery)
(function ($, window) {
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
            let self = this
            jQuery.getScript("js/asset.js").done(() => {
                assets.getList({}, function (err, result) {
                    console.log('result', result.AssetQuery)
                    self.partial('templates/asset.tpl', {
                        data: result.AssetQuery
                    })
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
            console.log('#/transactions')
            let self = this
            jQuery.getScript("js/transaction.js").done(() => {
                transactions.getList({}, function (err, result) {
                    console.log('result', result.TransactionQuery)
                    self.partial('templates/transaction.tpl', {
                        data: result.TransactionQuery
                    })
                })
            })

        });

        //addresses
        this.get('#/addresses', function () {
            // load some data
            console.log('#/addresses')
            //this.partial('templates/address.tpl');
            let self = this
            jQuery.getScript("js/address.js").done(() => {
                transactions.getList({}, function (err, result) {
                    console.log('result', result.AddressQuery)
                    self.partial('templates/address.tpl', {
                        data: result.AddressQuery
                    })
                })
            })
        });

        // address/:id
        this.get('#/address/:id', function () {
            // load some data
            console.log('#/address/:id', this.params['id'])
            this.partial('templates/address_id.tpl');
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
            console.log('#/tx/:id', this.params['id'])
            let self = this
            let txid = this.params['id']
            jQuery.getScript("js/transaction.js").done(() => {
                transactions.getList({txid}, function (err, result) {
                    console.log('result', result.TransactionQuery)
                    self.partial('templates/tx.tpl', {
                        data: result.TransactionQuery
                    })
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

})(jQuery, window)
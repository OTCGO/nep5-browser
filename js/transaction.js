(function ($,window) {

    let page = 1
    console.log('transactions')

    function getList(params,cb){
        let url = transaction_list(params)
        request(url,cb)
    }
    
    function loadMore() {
        console.log('loadMore','loadMore')
        page++
        console.log('page',page)
        let url = transaction_list({skip:(page-1)*20,limit:20})
        request(url,(err,result) => {
           // console.log('result',result)
            let html = ''
            for (const item of result.TransactionQuery.rows) {
                //console.log('loadMore:item',item)
                html += `
                <tr>
                    <td class="mdl-data-table__cell--non-numeric">RPX</td>
                    <td>NEP5</td>
                    <td>
                        <a href="#/tx/hash/${item['txid']}">${item['txid'].substring(0,10)}...</a>
                   
                    </td>
                    <td>
                        <a href="#/address/${item['to']['value']}">
                            ${item['to']['value'].substring(0,10) }...
                        </a> 
                    </td>
                    <td>
                        <a href="#/address/${item['from']['value']}">${item['from']['value'].substring(0,10) }...</a>
                    </td>
                    <td>${item['value'] }</td>
                    <td>${item['blockIndex'] }</td>
                    <td>${moment(new Date(item['createdAt'])).format('YYYY-MM-DD HH:mm:ss') }</td> 
                </tr>
                `
            }
            $('#transactions tbody').append(html)
        })
    }
    
    
    window.transactions = {
        getList,
        loadMore,
        page
    }

    

})(jQuery,window)


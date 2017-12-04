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
            let time = new Date();
            
            for (const item of result.TransactionQuery.rows) {
                //console.log('loadMore:item',item)
                
                let tran_time = ''
                let blockTime  = moment.unix(item['createdAt']);
                if(moment(time).diff(blockTime, 'seconds') <= 60){
                    tran_time = moment(time).diff(blockTime, 'seconds')+'秒前'
                }
                else if(0 < moment(time).diff(blockTime, 'minutes') && moment(time).diff(blockTime, 'minutes') <= 60  ){ 
                    tran_time=moment(time).diff(blockTime, 'minutes')+'分钟前'
                } 
                else if(0< moment(time).diff(blockTime, 'hours') && moment(time).diff(blockTime, 'hours') <= 24){ 
                    tran_time=moment(time).diff(blockTime, 'hours')+'小时前' 
                 } 
                 else if(0 < moment(time).diff(blockTime, 'days') && moment(time).diff(blockTime, 'days') <= 30){ 
                    tran_time=moment(time).diff(blockTime, 'days')+'天前' 
                 }else{           
                    tran_time=blockTime.format('YYYY-MM-DD')  
                 } 
                html += `
                <tr>
                    <td class="mdl-data-table__cell--non-numeric">${item['symbol']}</td>
                    <td class="mdl-data-table__cell--non-numeric ellipsis">
                        <a href="#/tx/hash/${item['txid']}">${item['txid']}</a>
                    </td>
                    <td class="mdl-data-table__cell--non-numeric" >${item['blockIndex']}</td>
                    <td class="mdl-data-table__cell--non-numeric" >${tran_time}</td>
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


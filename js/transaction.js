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
                if(moment(time).diff(moment(new Date(item['createdAt'])), 'seconds') <= 60){
                    tran_time = moment(time).diff(moment(new Date(item['createdAt'])), 'seconds')+'秒前'
                }
                else if(0 < moment(time).diff(moment(new Date(item['createdAt'])), 'minutes') && moment(time).diff(moment(new Date(item['createdAt'])), 'minutes') <= 60  ){ 
                    tran_time=moment(time).diff(moment(new Date(item['createdAt'])), 'minutes')+'分钟前'
                } 
                else if(0< moment(time).diff(moment(new Date(item['createdAt'])), 'hours') && moment(time).diff(moment(new Date(item['createdAt'])), 'hours') <= 24){ 
                    tran_time=moment(time).diff(moment(new Date(item['createdAt'])), 'hours')+'小时前' 
                 } 
                 else if(0 < moment(time).diff(moment(new Date(item['createdAt'])), 'days') && moment(time).diff(moment(new Date(item['createdAt'])), 'days') <= 30){ 
                    tran_time=moment(time).diff(moment(new Date(item['createdAt'])), 'days')+'天前' 
                 }else{           
                    tran_time=moment(new Date(item['createdAt'])).format('YYYY-MM-DD')  
                 } 
                html += `
                <tr>
                    <td class="mdl-data-table__cell--non-numeric">${item['symbol']}</td>
                    <td class="mdl-data-table__cell--non-numeric ellipsis">
                        <a href="#/tx/hash/${item['txid']}">${item['txid']}</a>
                    </td>
                    <td class="mdl-data-table__cell--non-numeric" >${item['blockIndex']}}</td>
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


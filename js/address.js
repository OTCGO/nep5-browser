(function ($, window) {

    console.log('addresses')
    let page = 1

    function getList(params, cb) {
        let url = address_list(params)
        request(url, cb)
    }


    function loadMore() {
        console.log('loadMore', 'loadMore')
        page++
        console.log('page', page)
        let url = transaction_list({
            skip: (page - 1) * 20,
            limit: 20
        })
        request(url, (err, result) => {
            // console.log('result',result)
            let html = ''
            for (const item of result.TransactionQuery.rows) {
                //console.log('loadMore:item',item)
                html += `
                        <tr>
                            <td class="mdl-data-table__cell--non-numeric">NEP5</td>
                            <td class="mdl-data-table__cell--non-numeric">RPX</td>
                            <td class="mdl-data-table__cell--non-numeric">
                                <a href="#/address/<%=data.rows[i]['address']['value']%>"><%=data.rows[i]['address']['value'] || '' %></a>
                            </td>
                        </tr>
                    `
            }
            $('#addresses tbody').append(html)
        })
    }


    window.transactions = {
        getList,
        loadMore
    }



})(jQuery, window)
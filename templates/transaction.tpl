<div class="neo-transactions mdl-grid">  
    <div class="mdl-cell mdl-cell--10-col mdl-cell--10-col-tablet mdl-cell--1-offset">
        <table id="transactions" class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
                <tr>
                    <th class="mdl-data-table__cell--non-numeric">名称</th>
                    <th>类型</th>
                    <th>txid</th>
                    <th>转入地址</th>
                    <th>转出地址</th>
                    <th>数量</th>
                    <th>区块索引</th>
                    <th>交易时间</th>
                </tr>
            </thead>
            <tbody>
                <% for ( let i = 0; i < data.rows.length; i++ ) { %>
                    <tr>
                        <td class="mdl-data-table__cell--non-numeric">RPX</td>
                        <td>NEP5</td>
                        <td><%=data.rows[i]['txid'].substring(0,10) %>...</td>
                        <td><%=data.rows[i]['to'].substring(0,10) %>...</td>
                        <td><%=data.rows[i]['from'].substring(0,10) %>...</td>
                        <td><%=data.rows[i]['value'] %></td>
                        <td><%=data.rows[i]['blockIndex'] %></td>
                        <td><%=moment(new Date(data.rows[i]['createdAt'])).utcOffset(16).format('YYYY-MM-DD HH:mm:ss') %></td> 
                    </tr>
                <% } %>

            </tbody>
        </table>
        <div class="mdl-grid load-more">
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onclick="transactions.loadMore()">
                    加载更多
            </button>
        </div>

    </div>

</div>


<link rel="stylesheet" href="css/transaction.css" />


<div class="neo-transactions mdl-grid">  
    <div class="mdl-cell mdl-cell--10-col mdl-cell--10-col-tablet mdl-cell--1-offset">
        <table id="transactions" class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
                <tr>
                    <th class="mdl-data-table__cell--non-numeric">名称</th>
                    <!-- <th>类型</th> -->
                    <th class="mdl-data-table__cell--non-numeric">txid</th>
                  
                    <th>交易时间</th>
                </tr>
            </thead>
            <tbody>
                <% for ( let i = 0; i < data.rows.length; i++ ) { %>
                    <tr>
                        <td class="mdl-data-table__cell--non-numeric">RPX</td>
                        <!-- <td>NEP5</td> -->
                        <td class="mdl-data-table__cell--non-numeric">
                            <a href="#/tx/hash/<%=data.rows[i]['txid'] %>"><%=data.rows[i]['txid'] %></a>
                        </td>
                        
                        <td title="<%=moment(new Date(data.rows[i]['createdAt'])).format('YYYY-MM-DD HH:mm:ss')  %>" > 
                            <% let time = new Date();
                            if(moment(time).diff(moment(new Date(data.rows[i]['createdAt'])), 'seconds') <= 60){ %>
                                <%=moment(time).diff(moment(new Date(data.rows[i]['createdAt'])), 'seconds')+'秒前' %>
                            <% } %>
                            
                            <%  if(moment(time).diff(moment(new Date(data.rows[i]['createdAt'])), 'minutes') <= 60){ %>
                                <%=moment(time).diff(moment(new Date(data.rows[i]['createdAt'])), 'minutes')+'分钟前' %>
                            <% } %>

                            <%  if(moment(time).diff(moment(new Date(data.rows[i]['createdAt'])), 'hours') <= 24){ %>
                                <%=moment(time).diff(moment(new Date(data.rows[i]['createdAt'])), 'hours')+'小时前' %>
                            <% } %>

                            <%  if(moment(time).diff(moment(new Date(data.rows[i]['createdAt'])), 'days') <= 30){ %>
                                <%=moment(time).diff(moment(new Date(data.rows[i]['createdAt'])), 'days')+'天前' %>
                            <% }else{ %>
                            <%  %>
                                <%=moment(new Date(data.rows[i]['createdAt'])).format('YYYY-MM-DD')  %>
                            <% } %>
                            
                        </td> 
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


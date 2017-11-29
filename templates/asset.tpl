<div class="neo-assets mdl-grid">  
    <div class="mdl-cell mdl-cell--10-col mdl-cell--10-col-tablet mdl-cell--1-offset">
        <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
                <tr>
                    <th class="mdl-data-table__cell--non-numeric">名称</th>
                    <th>标识</th>
                    <th>类型</th>
                    <!-- <th>总量</th>
                    <th>总量</th>
                    <th>地址数</th>
                    <th>交易量</th>
                    <th>注册时间</th> -->
                </tr>
            </thead>
            <tbody>
                <% for ( let i = 0; i < data.rows.length; i++ ) { %>
                    <tr>
                        <td class="mdl-data-table__cell--non-numeric"><%=data.rows[i]['symbol'] || '' %></td>
                        <td >
                            <%=data.rows[i]['contract'] || '' %>
                        </td>
                        <td >
                            NEP5
                        </td>
                    </tr>
                <% } %>
            </tbody>
        </table>
    </div>

</div>

<link rel="stylesheet" href="css/asset.css"  />
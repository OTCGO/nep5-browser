<div class="neo-addresses mdl-grid">
    <div class="mdl-cell mdl-cell--10-col mdl-cell--10-col-tablet mdl-cell--1-offset">
        <table id='addresses' class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
                <tr>
                    <th class="mdl-data-table__cell--non-numeric">类型</th>
                    <th class="mdl-data-table__cell--non-numeric">名称</th>
                    <th class="mdl-data-table__cell--non-numeric">地址</th>

                </tr>
            </thead>
            <tbody>
                <% for ( let i = 0; i < data.rows.length; i++ ) { %>
                    <tr>
                        <td class="mdl-data-table__cell--non-numeric">NEP5</td>
                        <td class="mdl-data-table__cell--non-numeric">
                            <%=data.rows[i]['symbol'] || '' %>
                        </td>
                        <td class="mdl-data-table__cell--non-numeric">
                            <a href="#/address/<%=data.rows[i]['address']['value']%>/<%=data.rows[i]['address']['hash']%>/<%=data.rows[i]['contract']%>">
                                <%=data.rows[i]['address']['value'] || '' %>
                            </a>
                        </td>
                    </tr>
                    <% } %>
            </tbody>
        </table>
        <div class="mdl-grid load-more">
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onclick="addresses.loadMore()">
                    加载更多
            </button>
        </div>
    </div>

</div>

<link rel="stylesheet" href="css/address.css" />
<div class="neo-addresses mdl-grid">  
        <div class="mdl-cell mdl-cell--10-col mdl-cell--10-col-tablet mdl-cell--1-offset">
            <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
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
                            <td class="mdl-data-table__cell--non-numeric">RPX</td>
                            <td class="mdl-data-table__cell--non-numeric"><%=data.rows[i]['address'] || '' %></td>
                        </tr>
                    <% } %>
                </tbody>
            </table>
        </div>
    
    </div>
    
    <link rel="stylesheet" href="css/asset.css"  />
<div class="neo-address_id mdl-grid">
    <div class="mdl-cell mdl-cell--10-col mdl-cell--10-col-tablet mdl-cell--1-offset-desktop mdl-cell--1-offset-tablet">

        <div class="demo-card-event mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title mdl-card--expand">
                <h4>
                    <%=address || '无地址信息' %>

                </h4>
                
            </div>
            <% for ( let key in  data) { %>
              
                    <div class="mdl-card__actions mdl-card--border">
                        <span>数量：
                            <%=data[key].balances %>
                        </span>
                        <div class="mdl-layout-spacer"></div>
                        <span>
                            <%=data[key].symbol + '(' + data[key].contract.substring(0,5)+')' %>
                        </span>
                    </div>
                  
                <% } %>    
        </div>
    </div>


    <div class="mdl-cell mdl-cell--10-col mdl-cell--10-col-tablet mdl-cell--12-col-phone mdl-cell--1-offset-desktop mdl-cell--1-offset-tablet">
        <h5>交易历史</h5>
        <table id="transactions" class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
                <tr>
                    <th class="mdl-data-table__cell--non-numeric" style="width:100px">名称</th>
                    
                    <th class="mdl-data-table__cell--non-numeric">txid</th>
                    <th class="mdl-data-table__cell--non-numeric" style="width:100px">区块</th>
                    <th class="mdl-data-table__cell--non-numeric" style="width:100px">交易时间</th>
                </tr>
            </thead>
            <tbody>
                <% if (list.rows.length === 0) { %>
                    <tr>
                        <td class="mdl-data-table__cell--non-numeric">txid错误或者转账失败,请检查txid</td>
                    </tr>
                <% }  %>
                <% for ( let i = 0; i < list.rows.length; i++ ) { %>
                    <tr>
                        <td class="mdl-data-table__cell--non-numeric"><%=list.rows[i]['symbol'] %></td>
                        
                        <td class="mdl-data-table__cell--non-numeric ellipsis">
                            <a href="#/tx/hash/<%=list.rows[i]['txid'] %>"><%=list.rows[i]['txid'] %></a>
                        </td>

                        <td class="mdl-data-table__cell--non-numeric" ><%=list.rows[i]['blockIndex'] %></td>
                        
                        <td class="mdl-data-table__cell--non-numeric" > 
           
                                <% let time = new Date(); 
                                   let blockTime  = moment.unix(list.rows[i]['createdAt']);
                                   
                                if(moment(time).diff(blockTime, 'seconds') <= 60){  %>
                                    <%=moment(time).diff(blockTime, 'seconds') +'秒前' %>
                               
                                <%}else if ( 0< moment(time).diff(blockTime, 'minutes') && moment(time).diff(blockTime, 'minutes')<= 60){  %>
                                      <%=moment(time).diff(blockTime, 'minutes')+'分钟前' %>
                               
    
                                <%}else if (0< moment(time).diff(blockTime, 'hours') && moment(time).diff(blockTime, 'hours') <= 24){  %>
                                      <%=moment(time).diff(blockTime, 'hours')+'小时前' %>
                              
    
                                <%}else if (0< moment(time).diff(blockTime, 'days') && moment(time).diff(blockTime, 'days') <= 30){   %>
                                      <%=moment(time).diff(blockTime, 'days')+'天前' %>
                                <% } else {  %>
                              
                                  <%=blockTime.format('YYYY-MM-DD')  %>
                                <% } %>
                           
                        </td> 
                    </tr>
                <% } %>

            </tbody>
        </table>
        <div class="mdl-grid load-more">
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onclick="transactions.loadMore({address:'<%=address %>'})">
                    加载更多
            </button>
        </div>

    </div>


</div>

<style>
    .demo-card-event.mdl-card {
        width: 100%;
        height: auto;
        background: #46B6AC;
    }

    .demo-card-event>.mdl-card__actions {
        border-color: rgba(255, 255, 255, 0.2);
    }

    .demo-card-event>.mdl-card__title {
        align-items: flex-start;
    }

    .demo-card-event>.mdl-card__title>h4 {
        margin-top: 0;
    }

    .demo-card-event>.mdl-card__actions {
        display: flex;
        box-sizing: border-box;
        align-items: center;
    }

    .demo-card-event>.mdl-card__actions>.material-icons {
        padding-right: 10px;
    }

    .demo-card-event>.mdl-card__title,
    .demo-card-event>.mdl-card__actions,
    .demo-card-event>.mdl-card__actions>.mdl-button {
        color: #fff;
    }
    .neo-address_id .load-more{
        flex-direction:row-reverse
    }
</style>
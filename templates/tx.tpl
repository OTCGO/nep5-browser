<div class="neo-address_id mdl-grid">
    <div class="mdl-cell mdl-cell--10-col mdl-cell--10-col-tablet mdl-cell--12-col-phone mdl-cell--1-offset-desktop mdl-cell--1-offset-tablet">

        <div class="demo-card-event mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title mdl-card--expand">
                <h4>
                    <%=data['txid'] %>
                </h4>
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <span>名称： </span>
                
                <div class="mdl-layout-spacer"></div>
                <span><%=data['symbol']%></span>
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <span>类型： </span>
                
                <div class="mdl-layout-spacer"></div>
                <span>NEP5</span>
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <span>转入地址： </span>
                
                <div class="mdl-layout-spacer"></div>
                <span> <a href="/#/address/<%=data['to']['value']%>"><%=data['to']['value']%></a></span>
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <span>转出地址： </span>
                
                <div class="mdl-layout-spacer"></div>
                <span> <a href="/#/address/<%=data['from']['value']%>"><%=data['from']['value']%></a></span>
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <span>数量： </span>
                <div class="mdl-layout-spacer"></div>
                <span><%=data['value']%></span>
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <span>区块索引： </span>
               
                <div class="mdl-layout-spacer"></div>
                <span><%=data['blockIndex'] %></span>
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <span>交易时间： </span>
               
                <div class="mdl-layout-spacer"></div>
                <span><%=moment.unix(data['createdAt']).format('YYYY-MM-DD HH:mm:ss') %></span>
            </div>
        </div>
    </div>
</div>


<style>
    .demo-card-event.mdl-card {
        width: 100%;
        height: 400px;
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
</style>
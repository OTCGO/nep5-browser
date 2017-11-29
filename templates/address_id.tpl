<div class="neo-address_id mdl-grid">
    <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--3-offset">

        <div class="demo-card-event mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title mdl-card--expand">
                <h4>
                    地址：
                    <br> <%=address %>

                </h4>
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <span>数量：<%=data.value %></span>
                <div class="mdl-layout-spacer"></div>
                <span><%=data.symbol %></span>
            </div>
        </div>
    </div>
</div>

<style>
    .demo-card-event.mdl-card {
        width: 100%;
        height: 200px;
        background: #ff4081;
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
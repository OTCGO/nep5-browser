    // 图表配置
    var options = {

        title: {
            text: '小蚁区块链浏览器'
        },

        subtitle: {
            text: ''
        },

        yAxis: {
            title:{
                text:null
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            enabled:false
           
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },

        chart:{
            height:'350px'
        },

        series: [{
            name: 'NEO/CNY',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
            color: '#DB6D03'
        }, {
            name: 'NEO/USD',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
            color: '#8bc34a'
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    };
    // 图表初始化函数
    var chart = Highcharts.chart('charts', options);



   
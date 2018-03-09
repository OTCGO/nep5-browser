$('#search-field').bind('keypress',function(event){
    if(event.keyCode == 13){
        console.log('search')
        let search = $('#search-field').val()
        console.log('search',search.substring(0,1)=== 'A')
        if(search.replace(/\s+/g,"").substring(0,1) === 'A'){
            window.location.href='#/address/'+search
        }else{
            window.location.href='#/transactions?search='+search
        }
       
    }      
})


$(function(){ 
    console.log('init')
    function getHeight(){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://114.215.30.71:10332/",
            "method": "POST",
            "headers": {
              "content-type": "application/json"
            },
            "processData": false,
            "data": "{\n  \"jsonrpc\": \"2.0\",\n  \"method\": \"getblockcount\",\n  \"params\": [],\n  \"id\": 1\n}"
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            $('#loading .height').text(response.result - 1)
          });
    }
    
    getHeight()
    setInterval(getHeight,30000)
    
})
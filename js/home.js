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
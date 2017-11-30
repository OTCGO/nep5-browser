$('#search-field').bind('keypress',function(event){
    if(event.keyCode == 13){
        console.log('search')
        let search = $('#search-field').val()
        window.location.href='#/transactions?search='+search
    }      
})
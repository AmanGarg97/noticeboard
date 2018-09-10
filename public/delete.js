function deleteex(id){
   
    $.ajax({
        url: '/api/add',
        type: 'DELETE',  
        data: { 
            action: 'DELETE',
            id : id

        },  
      })
        .done(function() {
        //     alert("Deleted")
        //   console.log("Delete run");
        });
}


$(function () {
    
    let id = $('#value')
    
    let deletebtn = $('#deletebtn')
    
    
    deletebtn.click(function () {

        deleteex(id.val());
        alert("Deleted")


    })

})
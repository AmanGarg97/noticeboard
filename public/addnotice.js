function addNotice(id,notice,done){
    $.post('/api/add' , {
        notice : notice,
        id : id
    }, function(data){
       done(data)

    } , "json")
}

function addNotices(id,notice,title,done){
    $.ajax({
        type:    "POST",
        url:     "/api/add",
        data:    {
            notice  : notice,
            id : id,
            title : title ,
            success: function(data) {
                alert("Successfully Added the notice in Database.");
             }
        },
})

}


$(function () {
    let id = $('#id')
    let notice = $('#notice')
    let title = $('#title')
    
    $('#addbtn').click(function () {

        alert("Confirm to add the notice to Database.")
        addNotices(
           id.val() ,
           notice.val(),
           title.val(),
            function (data) {
               alert("fun is running")
                
            }
        )


    })

})
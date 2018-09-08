$(function () {
    let id = $('#id')
    let notice = $('#notice')
    
    $('#addbtn').click(function () {

        console.log("add btn clicked")
        addNotice(
           id.val() ,
           notice.val(),
            function (addedProduct) {
                window.alert("Added to Database")
            }
        )


    })

})
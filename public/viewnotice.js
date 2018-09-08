$(function(){
    let noticetable = $('#table')
    let viewbtn = $('#viewbtn')

    viewbtn.click(function(){
        console.log("aman")
        ShowNotice(function(notices) {
            noticetable.empty()
            for(notice of notices){
                console.log("yoyo")
                noticetable.append(createtable(notice))
            }
        })
    })

    
})
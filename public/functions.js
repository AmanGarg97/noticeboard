function addNotice (id,notice,done) {
    $.post('/api/add', {
        notice : notice,
        id : id
    }, function (data) {
        done(data)
    })
}

function ShowNotice(done){

    $.get('/api/add'),function(data){
        console.log("in function.js")
        done(data)
    }

}

function createtable(notice){
    return $(`

    <tr>
            <td>${notice.id}</td>
            <td>${notice.notice}</td>
          </tr>

    `

    )

}
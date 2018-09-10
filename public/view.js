
function ShowNotice(done){

    console.log("shownotice is running")

    $.get('/api/add',function(data){
        console.log("in function.js")
        done(data)
        
    })

    console.log("shownotice is runned")

}

function createtable(data){
    return $(`

    <tr>
            <td>${data.id}</td>
            <td>${data.notice}</td>
          </tr>

    `)
}


$(function () {

    let productList = $('#product-list')
    

    ShowNotice(function (products) {
        productList.empty()
        for (product of products) {
            productList.append(creatediv(product))
        }
    })

})
$(function(){

    let viewbtn = $('#viewbtn')
    let table = $('#table')

    viewbtn.click(function(){

    ShowNotice(function(datas){

        for(data of datas) {
            table.append(createtable(data))
        }
    })

    })
})
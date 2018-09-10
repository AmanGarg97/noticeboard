
function ShowNotice(done){

    console.log("shownotice is running")

    $.get('/api/add',function(data){
        console.log("in function.js")
        done(data)
        
    })

    console.log("shownotice is runned")

}

function creatediv(notice){
    return $(`

    <div class="myslides fades">
    <h2 class="text-center notice-head">${notice.title}</h2>
                    <div class="row">
                        <div class="col-md-1"></div>
                        <div class="col-md-10 about-notice">
                            <h1>
                               ${notice.notice}
                            </h1>
                        </div>
                        <div class="col-md-1"></div>
                    </div>  
                </div>    
    `

    )

}

function createList(notice){
    return $(`
    
    <li class="notice-list"><h6>${notice.notice}</h6></li>
    `)
}

$(function () {

    let productList = $('#product-list')
    let list = $('#list1')
    

    ShowNotice(function (products) {
        productList.empty()
        for (product of products) {
            productList.append(creatediv(product))
            list.append(createList(product))
        }
    })

})
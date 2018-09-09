
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
    <h2 class="text-center notice-head">WORKSHOP</h2>
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

// $(function () {

//     let productList = $('#product-list')

//     ShowNotice(function (products) {
//         console.log("out for")
//         productList.empty()
//         for (let i = 0 ; i < 10 ; i++) {
//             console.log("fofr loo[")
//             productList.append(creatediv(product))
//         }
//     })

// })

$(function () {

    let productList = $('#product-list')

    ShowNotice(function (products) {
        productList.empty()
        for (product of products) {
            productList.append(creatediv(product))
        }
    })

})
(function(){
    getOpenId()
})()
function getOpenId(){
    $.ajax({
    type: "POST",
    url: 'http://192.168.1.10:8080/personCenter/getOpenId',  //把地址和请求方式变更一下 。按照那个文档改一下
    data: "",
    dataType: "json",
    contentType: 'application/json; charset=UTF-8',
    success: function (data) {
        //在这里处理一下data数据 保证传进去的data是个json串
        debugger;
        postData(data);
       
    },
    error: function () {
        console.log("错误")
    }
});
}
function postData(param){
    debugger;
    $.ajax({
        type: "POST",
        url: 'https://www.shangdll.com/personCenter/detailInfo',
        data: param,
        dataType: "json",
        contentType: 'application/json; charset=UTF-8',
        success: function (data) {
            console.log(data)
            alert(data.openId)
            var str = "<p>";
            str += "<b>" + data.username + "</b>";
            str += "<p>" + 'ID : ' + data.openId + "</p>";
            str += "</p>";
            $(".username").append(str);

            var str = "<div>";
            str += '<img src="' + data.headUrl + '"/>';
            str += "</div>";
            $(".header_portrait").append(str);
            var str = "<b>";
            str += "<b>" + data.gameGold + '元' + "</b>";
            str += "</b>";
            $(".money").append(str);
            var str = "<b>";
            str += "<b>" + data.surplusDiamond + "</b>";
            str += "</b>";
            $(".surplus").append(str);
        },
        error: function () {
            console.log("错误")
        }
    });
}
/**
 * Created by win7 on 2017/8/29.
 */
$(function(){
    $(".f-datagrid a").hover(function(e){
        var price = $(this).attr("data-range");
        var low = price.split("-")[0];
        var high = price.split("-")[1];
        // console.log(low)
        //   console.log(high)
        $("#low").val(low);
        $("#high").val(high)
    },function(e){
        $("#low").val("");
        $("#high").val("");
    })
});




    //$(".sl-tab-trigger a").hover(function(){
    //    $(this).parents(".sl-value").nextAll(".sl-tab-cont").find(".sl-tab-cont-item").show();
    //    $(this).addClass('trig-curr');},
    //    function (){
    //        $(this).parents(".sl-value").nextAll(".sl-tab-cont").find(".sl-tab-cont-item").hide();
    //        $(this).removeClass('trig-curr');
    //    });

$(".sl-tab-trigger a").hover(function() {
        var a_index=$(this).index();
        $(this).parents(".sl-value").nextAll(".sl-tab-cont").find(".sl-tab-cont-item").hide();
        $(this).parents(".sl-value").nextAll(".sl-tab-cont").find(".sl-tab-cont-item").eq(a_index).show();
        $(this).addClass('trig-curr');},
    function (){
        //$(this).parents(".sl-value").nextAll(".sl-tab-cont").find(".sl-tab-cont-item").hide();
        $(this).removeClass('trig-curr');
    });
$(".sl-tab-cont .sl-tab-cont-item").hover(function(){
    var s_index=$(this).index();
    $(".sl-tab-trigger a").eq(s_index).addClass('trig-curr');
},function(){
    $(this).hide();
    $(".sl-tab-trigger a").removeClass('trig-curr');
});











//多选更多
$(function(){
    // 全局
    var pinpaiduoxuan = {"con":[]};
    // 重置
    $("#J_selector .s-brand").find(".J_valueList li a").on("click",function(e){e.preventDefault()});
    // 品牌筛选
    // 点击更多收起
    $("#J_selector").on("click",".sl-e-more",function(e){
        $(this).addClass("opened").html("收起<i></i>").parent().parent().addClass("extend");
        $("#J_selector .sl-b-letter").find("li").eq(0).addClass("curr").siblings().removeClass("curr")

    });
    $("#J_selector").on("click",".sl-e-more.opened",function(e){
        $(this).removeClass("opened").html("更多<i></i>").parent().parent().removeClass("extend").find(".J_valueList li").show().parent().scrollTop("0")
    });
    // 按字母筛选 .sl-b-letter
    $("#J_selector .sl-b-letter").on("mouseover","li",function(e){
        $(this).addClass("curr").siblings().removeClass("curr");//字母ABCD的红色框框
        var sLetter = $(this).attr("data-initial");//属性
        var allLi = $(this).parent().parent().find(".J_valueList li");
        if(sLetter == 0){
            $.each(allLi,function(i,con){$(con).show()})
        }else{
            $.each(allLi,function(i,con){
                if($(con).attr("data-initial") == sLetter){
                    $(con).show()
                }else{
                    $(con).hide()
                }
            })
        }
    });
    // 多选
    $("#J_selector").on("click",".sl-e-multiple",function(e){

        $(this).parent().hide().parent().addClass("multiple").removeClass("extend");

        $(this).parent().parent().find(".J_valueList").on("click","li",jihuoduoxuan)

    });
    //取消多选 .J_btnsCancel
    $("#J_selector").on("click",".J_btnsCancel",function(e){
        $(this).parent().parent().find(".J_valueList").off("click","li");

        $(this).parent().parent().parent().removeClass("multiple").find(".sl-ext").show()
            .find(".sl-e-more").removeClass("opened").html("更多<i></i>").parent().parent().removeClass("extend").find(".J_valueList li").show().removeClass("selected").parent().scrollTop("0")
        $("#J_selector .sl-b-letter").find("li").eq(0).addClass("curr").siblings().removeClass("curr");
        pinpaiduoxuan = {"con":[]};
        $(this).parent().parent().parent().find(".J_brandSelected").hide().parent().find(".J_btnsConfirm").addClass("disabled");
        $(this).parent().parent().parent().find(".brand-selected").html("")


    });
    function jihuoduoxuan(e){
        // console.log(pinpaiduoxuan)
        if($(this).hasClass("selected")){
            $(this).removeClass("selected");

            var thatIndex = $(this).index();
            // console.log(thatIndex)

            for(var i = 0;i < pinpaiduoxuan.con.length;i++){
                if(pinpaiduoxuan.con[i].liIndex == thatIndex){
                    pinpaiduoxuan.con.splice(i,1)
                }
            }
            // $.each(pinpaiduoxuan.con,function(i,c){
            //     // console.log(c)
            //     // console.log(pinpaiduoxuan.con[i].index)
            //     if(c.index && c.index == thatIndex){
            //         pinpaiduoxuan.con.splice(i,i+1)
            //     }
            // })
        }else {
            var title = $(this).find("a").attr("title");
            var index = $(this).index();
            var message = {"title":title,"liIndex":index};
            // console.log(message)
            pinpaiduoxuan.con.push(message);

            $(this).addClass("selected")
        }
        if(pinpaiduoxuan.con.length > 0 ){
            var str = "";
            for(var j = 0;j < pinpaiduoxuan.con.length ; j++){
                str +="<li class='selected'>";
                str +="<a href!='' title="+pinpaiduoxuan.con[j].title+">";
                str +="<i></i>";
                str +=pinpaiduoxuan.con[j].title;
                str +="</a></li>"
            }
            $(this).parent().parent().parent().find(".J_brandSelected").show().parent().find(".J_btnsConfirm").removeClass("disabled");
            $(this).parent().parent().parent().find(".brand-selected").html(str)
        }else{
            $(this).parent().parent().parent().find(".J_brandSelected").hide().parent().find(".J_btnsConfirm").addClass("disabled");
            $(this).parent().parent().parent().find(".brand-selected").html("")

        }


    }
});
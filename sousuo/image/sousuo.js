/**
 * Created by win7 on 2017/8/29.
 */
//自己添加价格，获取部分
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

//切换,价格箭头
$(function(){
    $(".f-sort a").click(function(){
        $(this).addClass("curr").siblings().removeClass("curr");
    });
    $('.se_main1_t1_a').click(function(){
        $(this).children("em").toggleClass('fs-down');
        $(this).children("em").toggleClass('fs-up');
    });
});

//input 滑过
$(function(){
    $("#J_selectorPrice").hover(function(){
            $(this).addClass("f-price-focus");},
        function (){
            $(this).removeClass("f-price-focus");
        });
});

//划过显示
$(function(){
    var underhover;
    var trigger_a ;
    var xuanxiangka = null;
    $(".sl-tab-trigger a").hover(function() {
            clearTimeout(xuanxiangka);
//  	clearTimeout(xuanxiangka);
            trigger_a = this;
            underhover = true;
            var a_index=$(this).index();
            $(this).parents(".sl-value").nextAll(".sl-tab-cont").find(".sl-tab-cont-item").hide();
            $(this).parents(".sl-value").nextAll(".sl-tab-cont").find(".sl-tab-cont-item").eq(a_index).show();
            $(this).addClass('trig-curr').siblings().removeClass("trig-curr");},
        function (){
            xuanxiangka = setTimeout(function(){
                if(underhover){
                    $(trigger_a).removeClass('trig-curr');
                    $(trigger_a).parents(".sl-value").nextAll(".sl-tab-cont").find(".sl-tab-cont-item").hide();
                }
            },1000)
        });


    $(".sl-tab-cont .sl-tab-cont-item").hover(function(){

        underhover = false;
        var s_index=$(this).index();
        $(".sl-tab-trigger a").eq(s_index).addClass('trig-curr');
    },function(){
        clearTimeout(xuanxiangka);
        xuanxiangka = setTimeout(function(){
            $(".sl-tab-cont .sl-tab-cont-item").hide();
            $(".sl-tab-trigger a").removeClass('trig-curr');
        },1000)
    });
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
        $(this).parent().parent().parent().siblings().find(".J_btnsCancel").trigger("click")


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


    //选项卡多选#J_selectorSenior
    $("#J_selectorSenior").on("click",".btn-multiple",function(e){
//		$(this).parent().parent().parent().siblings().find(".J_btnsCancel").trigger("click")    	


        $(this).hide().parent().parent().addClass("multiple").removeClass("extend");
        $(this).parent().parent().find(".J_valueList").on("click","li",jihuoduoxuan)
    });
    //选项卡取消多选#J_selectorSenior
    $("#J_selectorSenior").on("click",".J_btnsCancel",function(e){
        $(this).parent().parent().find(".J_valueList").off("click","li");
        $(this).parent().parent().parent().removeClass("multiple").find(".sl-ext").show()
            .find(".sl-e-more").removeClass("opened").html("更多<i></i>").parent().parent().removeClass("extend").find(".J_valueList li").show().removeClass("selected").parent().scrollTop("0")
        $("#J_selector .sl-b-letter").find("li").eq(0).addClass("curr").siblings().removeClass("curr");
        pinpaiduoxuan = {"con":[]};
        $(this).parent().parent().parent().find(".J_brandSelected").hide().parent().find(".J_btnsConfirm").addClass("disabled");
        $(this).parent().parent().parent().find(".brand-selected").html("")
    });




    function jihuoduoxuan(e){
        if($(this).hasClass("selected")){
            $(this).removeClass("selected");
            var thatIndex = $(this).index();
            // console.log(thatIndex)
            for(var i = 0;i < pinpaiduoxuan.con.length;i++){
                if(pinpaiduoxuan.con[i].liIndex == thatIndex){
                    pinpaiduoxuan.con.splice(i,1)
                }
            }
        }else {
            var title = $(this).find("a").attr("title");
            var index = $(this).index();
            var message = {"title":title,"liIndex":index};
            pinpaiduoxuan.con.push(message);
            $(this).addClass("selected")
        }
        if(pinpaiduoxuan.con.length > 0 ){
//      	console.log($(this).attr("title"))
            if($(this).find("a").attr("title") == undefined){
                var str = "";
                for(var j = 0;j < pinpaiduoxuan.con.length ; j++){
                    str +="<li class='selected'>";
                    str +="<a href!='' title="+pinpaiduoxuan.con[j].title+">";
                    str +="<i></i>";
                    str +=pinpaiduoxuan.con[j].title;
                    str +="</a></li>"
                }
//	            console.log(pinpaiduoxuan.con)
//	            console.log($(this))
                $(this).parent().parent().parent().find(".J_btnsConfirm").removeClass("disabled");
//	            $(this).parent().parent().parent().find(".brand-selected").html(str)


            }else{
                var str = "";
                for(var j = 0;j < pinpaiduoxuan.con.length ; j++){
                    str +="<li class='selected'>";
                    str +="<a href!='' title="+pinpaiduoxuan.con[j].title+">";
                    str +="<i></i>";
                    str +=pinpaiduoxuan.con[j].title;
                    str +="</a></li>"
                }
//	            console.log(pinpaiduoxuan.con)
                $(this).parent().parent().parent().find(".J_brandSelected").show().parent().find(".J_btnsConfirm").removeClass("disabled");
                $(this).parent().parent().parent().find(".brand-selected").html(str)

            }
        }else{
            if($(this).attr("title") == undefined){
                $(this).parent().parent().parent().find(".J_btnsConfirm").addClass("disabled");

            }else{
                $(this).parent().parent().parent().find(".J_brandSelected").hide().parent().find(".J_btnsConfirm").addClass("disabled");
                $(this).parent().parent().parent().find(".brand-selected").html("")

            }
        }
    }
});






















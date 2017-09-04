
//$(document).ready(function(){
//    $("button").click(function(){
//        $("p").append(" <b>Hello world!</b>");
//    });
//});


$(function(){
    

        var hangban = "<div class='routable_cont_bg first_cont_bg routable_cont_curr'> <table> <colgroup> <col class='width01'> <col class='width02'> <col class='width03'> </colgroup> <tbody> <tr> <td class='t_r'> <div class='title_icon'> <span class='icon flt_icon01 js_select_icon' data-bind='event:{click:function(d,e){$root.changeRouteType(e,d)}}'></span> <div class='add_frame01'> <ul> <li><a href='' class='add_box'>航班</a><span class='icon flt_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <li><a href='' class='add_box'>交通</a><span class='icon car_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <li><a href='' class='add_box'>酒店</a><span class='icon hotel_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <li><a href='' class='add_box'>景点</a><span class='icon flag_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <li> <a href='' class='add_box'>用餐</a> <!--<span class='icon food_icon01' data-bind='event:{click:function(d,e){$root.getAddNewRouteValue(e,d)}}'></span>--> <span class='icon food_icon01' data-bind='event:{mouseover:function(d,e){$root.BlockDinnerMask(e,d)},mouseout:function(d,e){$root.HideDinnerMask(e,d)}}'></span> <div class='second_cont food_cont '> <a href='javascript:void(0);' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'>早餐</a> <a href='javascript:void(0);' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'>午餐</a> <a href='javascript:void(0);' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'>晚餐</a> </div> </li> <li><a href='' class='add_box'>购物</a><span class='icon buy_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <li><a href='' class='add_box'>自由活动</a><span class='icon phone_icon02' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <!-- ko if:$root.IsStudyTourResource()==true&&($root.ResourceTypeId()==33||$root.ResourceTypeId()==34||$root.ResourceTypeId()==41||$root.ResourceTypeId()==42)--> <li><a href='' class='add_box'>课程</a><span class='icon book_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <!--/ko--> <!-- ko if:$root.IsStudyTourResource()==true&&($root.ResourceTypeId()==33||$root.ResourceTypeId()==34||$root.ResourceTypeId()==41||$root.ResourceTypeId()==42)--> <li><a href='' class='add_box'>活动</a><span class='icon pic_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <!--/ko--> <!-- ko if:$root.IsThemeResource()=='T'&&($root.ResourceTypeId()==9||$root.ResourceTypeId()==10||$root.ResourceTypeId()==11||$root.ResourceTypeId()==26)--><!--/ko--> <!-- ko if:($root.IsThemeResource()=='T'||$root.IsStudyTourResource()==true||$root.IsTourResource()==true||$root.IsDingzhiResource()==true)&&($root.IsRetail()=='F')--><!--/ko--> </ul> </div> </div> </td> <td rowspan='2'> <!--<div class='select_time' data-bind='visible:!SingleTimeVal(),css:SingleTimeVal()==true?'select_time01 ':'',css:TimeHighLightColor()==true?'wrong_style01':'''> <i class='tips_star'>*</i> <input name='' type='text' readonly='readonly' class='input_text' placeholder='HH' data-bind='value:TakeOffTime_HH,event:{click:function(d,e){ $root.getTime(e,d)},blur:function(d){$root.validateNumber(d)}}' />:<input name='' readonly='readonly' type='text' class='input_text' placeholder='MM' data-bind='value:TakeOffTime_MM,event:{click:function(d,e){ $root.getTime(e,d)},blur:function(d){$root.validateNumber(d)}}' /> </div> <div class='select_time' data-bind='visible:SingleTimeVal(),css:SingleTimeVal()==true?'select_time01 ':'',css:TimeHighLightColor()==true?'wrong_style01':'''> <i class=' tips_star'>*</i> <input name='' type='text' readonly='readonly' class='input_text' data-bind='value:TakeOffTime_HH,event:{click:function(d,e){ $root.getTime(e,d)},blur:function(d){$root.validateNumber(d)}}' /> </div>--> <div class='select_time' data-bind='visible:!SingleTimeVal(),css:SingleTimeVal()==true?'select_time01 ':'',css:TimeHighLightColor()==true?'wrong_style01':'''> <i class='tips_star'>*</i> <input name='' type='text' readonly='readonly' class='input_text' placeholder='HH' data-bind='value:TakeOffTime_HH,event:{click:function(d,e){ $root.getTime(e,d)},blur:function(d){$root.validateNumber(d)}}'>:<input name='' readonly='readonly' type='text' class='input_text' placeholder='MM' data-bind='value:TakeOffTime_MM,event:{click:function(d,e){ $root.getTime(e,d)},blur:function(d){$root.validateNumber(d)}}'> </div> <div class='select_time' data-bind='visible:SingleTimeVal(),css:SingleTimeVal()==true?'select_time01 ':''' style='display: none;'> <i class=' tips_star'>*</i> <input name='' type='text' readonly='readonly' class='input_text' data-bind='value:TakeOffTime_HH,event:{click:function(d,e){ $root.getTime(e,d)},blur:function(d){$root.validateNumber(d)}}'> </div> <!-- ko if:$root.ResourceTypeId()!=9&&$root.ResourceTypeId()!=10&&$root.ResourceTypeId()!=33&&$root.ResourceTypeId()!=41--><!--/ko--> </td> <td><input name='' type='text' class='input_text input_text_long02' placeholder='请输入航班信息' data-bind='value:Description'></td> </tr> <tr> <td class='t_r'></td> <td> <div class='xc_input_box01'> <div class='select_cont01 select_cont02'> <!-- 需要出现下拉框的时候加上select_cont_cur --> <span class='show_text' data-bind='text:IsDirectCopy,event:{click:function(d,e){$root.selectIsDirect(e,d)}}'>待定</span><i class='down_icon01' data-bind='event:{click:function(d,e){$root.selectIsDirect(e,d)}}'></i> <div class='select_list'> <ul class='type01'> <li>直飞</li> <li>中转</li> <li>待定</li> </ul> </div> </div> <div class='time_input_box02 time_box_fillin'> <span class='tit01'>飞行距离</span> <div class='input_box01'> <input name='' type='text' class='input_text input_text_shot01' onkeyup='this.value=this.value.replace(/[^\d\.]/g,'')' placeholder='飞行距离' data-bind='value:Distance,event:{blur:function(d){$root.validateNumber(d)}}'> </div> </div> <div class='time_input_box01 time_box_fillin'> <span class='tit01'>行驶</span> <div class='input_box01'><input type='text' onkeyup='this.value=this.value.replace(/[^\d\.]/g,'')' data-bind='value:DriveTimeHh,event:{blur:function(d){$root.validateNumber(d)}}'><span class='text'>小时</span></div> <div class='input_box01'><input type='text' onkeyup='this.value=this.value.replace(/[^\d\.]/g,'')' data-bind='value:DriveTimeMm,event:{blur:function(d){$root.validateNumber(d)}}'><span class='text'>分钟</span></div> </div> <!-- ko if:IsTransfer()==true--><!--/ko--> </div> </td> </tr> </tbody> </table> <i class='del_icon01' data-bind='event:{click:function(d,e){$root.RemoveCurRouteMask(e,d)}}'></i> <!--<span class='routable_add'></span>--> </div>"
        
        var jiaotong = "<div class='routable_cont_bg first_cont_bg routable_cont_curr'> <table> <colgroup> <col class='width01'> <col class='width02'> <col class='width03'> </colgroup> <tbody> <tr> <td class='t_r'> <div class='title_icon'> <span class='icon car_icon01 js_select_icon' data-bind='event:{click:function(d,e){$root.changeRouteType(e,d)}}'></span> <div class='add_frame01'> <ul> <li><a href='' class='add_box'>航班</a><span class='icon flt_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <li><a href='' class='add_box'>交通</a><span class='icon car_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <li><a href='' class='add_box'>酒店</a><span class='icon hotel_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <li><a href='' class='add_box'>景点</a><span class='icon flag_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <li> <a href='' class='add_box'>用餐</a> <!--<span class='icon food_icon01' data-bind='event:{click:function(d,e){$root.getAddNewRouteValue(e,d)}}'></span>--> <span class='icon food_icon01' data-bind='event:{mouseover:function(d,e){$root.BlockDinnerMask(e,d)},mouseout:function(d,e){$root.HideDinnerMask(e,d)}}'></span> <div class='second_cont food_cont '> <a href='javascript:void(0);' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'>早餐</a> <a href='javascript:void(0);' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'>午餐</a> <a href='javascript:void(0);' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'>晚餐</a> </div> </li> <li><a href='' class='add_box'>购物</a><span class='icon buy_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <li><a href='' class='add_box'>自由活动</a><span class='icon phone_icon02' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <!-- ko if:$root.IsStudyTourResource()==true&&($root.ResourceTypeId()==33||$root.ResourceTypeId()==34||$root.ResourceTypeId()==41||$root.ResourceTypeId()==42)--> <li><a href='' class='add_box'>课程</a><span class='icon book_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <!--/ko--> <!-- ko if:$root.IsStudyTourResource()==true&&($root.ResourceTypeId()==33||$root.ResourceTypeId()==34||$root.ResourceTypeId()==41||$root.ResourceTypeId()==42)--> <li><a href='' class='add_box'>活动</a><span class='icon pic_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <!--/ko--> <!-- ko if:$root.IsThemeResource()=='T'&&($root.ResourceTypeId()==9||$root.ResourceTypeId()==10||$root.ResourceTypeId()==11||$root.ResourceTypeId()==26)--><!--/ko--> <!-- ko if:($root.IsThemeResource()=='T'||$root.IsStudyTourResource()==true||$root.IsTourResource()==true||$root.IsDingzhiResource()==true)&&($root.IsRetail()=='F')--><!--/ko--> </ul> </div> </div> </td> <td rowspan='2'> <div class='select_time' data-bind='visible:!SingleTimeVal(),css:SingleTimeVal()==true?'select_time01 ':'',css:TimeHighLightColor()==true?'wrong_style01':'''> <i class='tips_star'>*</i> <!--<input name='' type='text' readonly='readonly' class='input_text' placeholder='HH' data-bind='value:TakeOffTime_HH,event:{click:function(d,e){ $root.getTime(e,d)},blur:function(d){$root.validateNumber(d)}}'>:<input name='' readonly='readonly' type='text' class='input_text' placeholder='MM' data-bind='value:TakeOffTime_MM,event:{click:function(d,e){ $root.getTime(e,d)},blur:function(d){$root.validateNumber(d)}}'>--> <input name='' type='text' readonly='readonly' class='input_text' placeholder='HH' data-bind='value:TakeOffTime_HH,event:{click:function(d,e){ $root.getTime(e,d)},blur:function(d){$root.validateNumber(d)}}'>:<input name='' readonly='readonly' type='text' class='input_text' placeholder='MM' data-bind='value:TakeOffTime_MM,event:{click:function(d,e){ $root.getTime(e,d)},blur:function(d){$root.validateNumber(d)}}'> </div> <div class='select_time' data-bind='visible:SingleTimeVal(),css:SingleTimeVal()==true?'select_time01 ':''' style='display: none;'> <i class=' tips_star'>*</i> <input name='' type='text' readonly='readonly' class='input_text' data-bind='value:TakeOffTime_HH,event:{click:function(d,e){ $root.getTime(e,d)},blur:function(d){$root.validateNumber(d)}}'> </div> <!-- ko if:$root.ResourceTypeId()!=9&&$root.ResourceTypeId()!=10&&$root.ResourceTypeId()!=33&&$root.ResourceTypeId()!=41--><!--/ko--> </td> <td> <textarea name='' id='' class='textarea03 input_text_long02' placeholder='请输入交通信息' data-bind='value:Description'></textarea> <!--<input name='' type='text' class='input_text input_text_long01' placeholder='请输入交通信息' data-bind='value:Description' />--> </td> </tr> <tr> <td class='t_r'></td> <td> <div class='xc_input_box01'> <div class='time_input_box02 time_box_fillin'> <span class='tit01'>行驶距离</span> <div class='input_box01'> <input name='' type='text' class='input_text input_text_shot01' onkeyup='this.value=this.value.replace(/[^\d\.]/g,'')' placeholder='行驶距离' data-bind='value:Distance,event:{blur:function(d){$root.validateNumber(d)}}'> </div> </div> <div class='time_input_box01 time_box_fillin'> <span class='tit01'>行驶</span> <div class='input_box01'><input type='text' onkeyup='this.value=this.value.replace(/[^\d\.]/g,'')' data-bind='value:DriveTimeHh,blur:function(d){$root.validateNumber(d)}'><span class='text'>小时</span></div> <div class='input_box01'><input type='text' onkeyup='this.value=this.value.replace(/[^\d\.]/g,'')' data-bind='value:DriveTimeMm,blur:function(d){$root.validateNumber(d)}'><span class='text'>分钟</span></div> </div> </div> </td> </tr> </tbody> </table> <i class='del_icon01' data-bind='event:{click:function(d,e){$root.RemoveCurRouteMask(e,d)}}'></i> <!--<span class='routable_add'></span>--> </div>"
        
        var routable_add = "<div class='routable_add'> <a href='#' class='add_btn01'> <span class='fh'>+</span>新增行程 </a> <div class='add_frame01'> <ul> <li><a href='#' class='add_box'>航班</a><span class='icon flt_icon01'></span></li> <li><a href='#' class='add_box'>交通</a><span class='icon car_icon01'></span></li> <li><a href='#' class='add_box'>酒店</a><span class='icon hotel_icon01'></span></li> <li><a href='#' class='add_box'>景点</a><span class='icon flag_icon01'></span></li> <li> <a href='#' class='add_box'>用餐</a> <span class='icon food_icon01'></span> <div class='second_cont food_cont '> <a href='#'>早餐</a> <a href='#'>午餐</a> <a href='#'>晚餐</a> </div> </li> <li><a href='#' class='add_box'>购物</a><span class='icon buy_icon01'></span></li> <li><a href='#' class='add_box'>自由活动</a><span class='icon phone_icon02'></span></li> <li><a href='#' class='add_box'>课程</a><span class='icon book_icon01'></span></li> <li><a href='#' class='add_box'>活动</a><span class='icon pic_icon01'></span></li> "
        
        var xuanzeriqi = "<div class='time_frame01'> <div class='time_table'> <div class='left'> <table> <tbody> <tr> <td><a href='javascript:void(0);' class='round_icon01'>00</a></td> <td><a href='javascript:void(0);' class='round_icon01'>01</a></td> <td><a href='javascript:void(0);' class='round_icon01'>02</a></td> <td><a href='javascript:void(0);' class='round_icon01'>03</a></td> <td><a href='javascript:void(0);' class='round_icon01'>04</a></td> <td><a href='javascript:void(0);' class='round_icon01'>05</a></td> </tr> <tr> <td><a href='javascript:void(0);' class='round_icon01'>06</a></td> <td><a href='javascript:void(0);' class='round_icon01'>07</a></td> <td><a href='javascript:void(0);' class='round_icon01'>08</a></td> <td><a href='javascript:void(0);' class='round_icon01'>09</a></td> <td><a href='javascript:void(0);' class='round_icon01'>10</a></td> <td><a href='javascript:void(0);' class='round_icon01'>11</a></td> </tr> <tr> <td><a href='javascript:void(0);' class='round_icon01'>12</a></td> <td><a href='javascript:void(0);' class='round_icon01'>13</a></td> <td><a href='javascript:void(0);' class='round_icon01'>14</a></td> <td><a href='javascript:void(0);' class='round_icon01'>15</a></td> <td><a href='javascript:void(0);' class='round_icon01'>16</a></td> <td><a href='javascript:void(0);' class='round_icon01'>17</a></td> </tr> <tr> <td><a href='javascript:void(0);' class='round_icon01'>18</a></td> <td><a href='javascript:void(0);' class='round_icon01'>19</a></td> <td><a href='javascript:void(0);' class='round_icon01'>20</a></td> <td><a href='javascript:void(0);' class='round_icon01'>21</a></td> <td><a href='javascript:void(0);' class='round_icon01'>22</a></td> <td><a href='javascript:void(0);' class='round_icon01'>23</a></td> </tr> </tbody> </table> <span class='maohao'></span> </div> <div class='right'> <table> <tbody> <tr> <td><a href='javascript:void(0);' class='round_icon01'>00</a></td> <td><a href='javascript:void(0);' class='round_icon01'>10</a></td> </tr> <tr> <td><a href='javascript:void(0);' class='round_icon01'>15</a></td> <td><a href='javascript:void(0);' class='round_icon01'>20</a></td> </tr> <tr> <td><a href='javascript:void(0);' class='round_icon01'>30</a></td> <td><a href='javascript:void(0);' class='round_icon01'>40</a></td> </tr> <tr> <td><a href='javascript:void(0);' class='round_icon01'>45</a></td> <td><a href='javascript:void(0);' class='round_icon01'>50</a></td> </tr> </tbody> </table> </div> </div> <p class='tips_title'><span>不确定具体时间点</span></p> <p class='date_box'><a href='javascript:void(0);' class='round_icon01'>上午</a><a href='javascript:void(0);' class='round_icon01'>下午</a><a href='javascript:void(0);' class='round_icon01'>晚上</a><a href='javascript:void(0);' class='round_icon01'>全天</a></p> </div>"

        // console.log(hangban);
        $("body").on("click",function(e){
            // console.log(e)
            if($(e.target).parent().parent().parent().hasClass("add_frame01") || $(e.target).hasClass("add_btn01")){

            }else{
                //收回按钮
                $(".route_mod01").find(".add_btn01").parent().removeClass("addnew_route_cur routable_addcur")

            }
        });

        $(".route_mod01").on("click",".add_btn01",function(e){
            
            e.preventDefault();
            bianlishouhui()//检测并收回正在编辑的日程
            
            $(".route_mod01").find(".add_btn01").parent().removeClass("addnew_route_cur routable_addcur");
            $(this).parent().addClass("addnew_route_cur routable_addcur")
        });

        //每日行程底部增加
        $(".addnew_route").on("click",".icon",function(e){
            
            
            
            
            var thiscont = $($(this).siblings()[0]).text()
            if(thiscont =="航班"){
                $(this).parent().parent().parent().parent().parent().find(".routable_cont").append(hangban).append(routable_add)
                //收回按钮
                $(".route_mod01").find(".add_btn01").parent().removeClass("addnew_route_cur routable_addcur")
            }
            
            if(thiscont =="交通"){
                $(this).parent().parent().parent().parent().parent().find(".routable_cont").append(jiaotong).append(routable_add)
                //收回按钮
                $(".route_mod01").find(".add_btn01").parent().removeClass("addnew_route_cur routable_addcur")
            }
        })
        
        //每日行程中间增加
        $(".routable_con_cur").on("click",".routable_add .icon",function(e){
            var thiscont = $($(this).siblings()[0]).text()
            if(thiscont =="航班"){
                $(this).parent().parent().parent().parent().after(routable_add).after(hangban)
                //收回按钮
                $(".route_mod01").find(".add_btn01").parent().removeClass("addnew_route_cur routable_addcur")
            }
            
            if(thiscont =="交通"){
                $(this).parent().parent().parent().parent().after(routable_add).after(jiaotong)
                //收回按钮
                $(".route_mod01").find(".add_btn01").parent().removeClass("addnew_route_cur routable_addcur")
            }
        })
        
        //正在编辑的行程更换类型
        $(".routable_con_cur").on("click",".routable_cont_curr .js_select_icon",function(){
            $(this).parent().addClass("title_icon_cur")
        })
        //编辑过的行程更换类型
        $(".routable_con_cur").on("click",".routable_complete .js_select_icon",function(){
            $(this).parent().addClass("title_icon_cur")
        })
        //正在编辑切换类型  add_frame01
        $(".routable_con_cur").on("click",".routable_cont_curr .add_frame01 .icon",function(){
            var thiscont = $($(this).siblings()[0]).text()
            console.log(thiscont)
            if(thiscont =="航班"){
                $(this).parents(".routable_cont_curr").after(hangban).remove()
                //收回按钮
                $(this).parent().parent().parent().parent().removeClass("title_icon_cur")
            }
            if(thiscont =="交通"){
                $(this).parents(".routable_cont_curr").after(jiaotong).remove()
                //收回按钮
                $(this).parent().parent().parent().parent().removeClass("title_icon_cur")
            }
            
        })
        //编辑过切换类型  add_frame01
        $(".routable_con_cur").on("click",".routable_complete .add_frame01 .icon",function(){
            var thiscont = $($(this).siblings()[0]).text()
            console.log(thiscont)
            if(thiscont =="航班"){
                $(this).parents(".routable_complete").after(hangban).remove()
                //收回按钮
                $(this).parent().parent().parent().parent().removeClass("title_icon_cur")
            }
            if(thiscont =="交通"){
                $(this).parents(".routable_complete").after(jiaotong).remove()
                //收回按钮
                $(this).parent().parent().parent().parent().removeClass("title_icon_cur")
            }
            
        })
        
        
        //删除单条行程 routable_cont_bg 
        $(".routable_con_cur").on("click",".routable_cont_bg .del_icon01",function(){
            
            if(confirm("确定要删除吗？")){
                $(this).parent().next(".routable_add").remove()
                $(this).parent().remove()
            }
        })
        
        
        
        
        
        


});

var richengxinxi;
var box01 = "";
var td23 = "";
//检测并收回正在编辑的日程
function bianlishouhui(){
    richengxinxi = {}
    $.each($(".route_content .routable_cont_curr").find("input"||"textarea"),function(i,con){
        var rcKey = $(con).attr("data-bind").split(",")[0].slice(6)
        var rcValue = $(con).val() || $(con).attr("placeholder") || ""
        richengxinxi[rcKey] = rcValue
        
    })    
    if(!$.isEmptyObject(richengxinxi)){
        $.each(richengxinxi,function(i,con){
            if(true){
                console.log(i+"/"+con)
                switch (i) {
                    case "TakeOffTime_HH":
                        td23 += "<td><span class='complete_time' data-bind='TakeOffTime_HH'>"+con+"</span></td>"
                        break;
                    case "Description":
                        td23 += "<td><span class='complete_time' data-bind='Description'>"+con+"</span></td>"
                        break;
                    case "Distance":
                        box01 += "<div class='complete_text' data-bind='Distance'>行驶距离：约"+con+"公里</div>"
                        break;
                    case "DriveTimeHh":
                        box01 += "<div class='complete_text' data-bind='DriveTimeHh'>行驶时长：约"+con+"小时</div>"
                        break;
                    default:
                        
                }
            }
        })
        var richengTime ="12:20" 
        $(".route_content .routable_cont_curr").find("tr").eq(0).find("td").eq(1).html("<span class='complete_time' data-bind='text:TakeOffTime()'>"+richengTime+"</span>")
        $(".route_content .routable_cont_curr").find("tr").eq(0).find("td").eq(2).html("<span class='complete_time' data-bind='text:TakeOffTime()'>"+richengTime+"</span>")
        $(".route_content .routable_cont_curr").find("tr").eq(1).find(".xc_input_box01").html(box01)
        $(".route_content .routable_cont_curr").addClass("routable_complete").removeClass("routable_cont_curr")
        console.log(richengxinxi)
    }
}




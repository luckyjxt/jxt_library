/**
 * Created by win7 on 2017/9/1.
 */
$(document).ready(function(){
    $("button").click(function(){
        $("p").append(" <b>Hello world!</b>");
    });
});


$(function(){
    (function(){
        
        var hangban = "<div class='routable_cont_bg first_cont_bg routable_cont_curr'> <table> <colgroup> <col class='width01'> <col class='width02'> <col class='width03'> </colgroup> <tbody> <tr> <td class='t_r'> <div class='title_icon'> <span class='icon flt_icon01 js_select_icon' data-bind='event:{click:function(d,e){$root.changeRouteType(e,d)}}'></span> <div class='add_frame01'> <ul> <li><a href='' class='add_box'>航班</a><span class='icon flt_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <li><a href='' class='add_box'>交通</a><span class='icon car_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <li><a href='' class='add_box'>酒店</a><span class='icon hotel_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <li><a href='' class='add_box'>景点</a><span class='icon flag_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <li> <a href='' class='add_box'>用餐</a> <!--<span class='icon food_icon01' data-bind='event:{click:function(d,e){$root.getAddNewRouteValue(e,d)}}'></span>--> <span class='icon food_icon01' data-bind='event:{mouseover:function(d,e){$root.BlockDinnerMask(e,d)},mouseout:function(d,e){$root.HideDinnerMask(e,d)}}'></span> <div class='second_cont food_cont '> <a href='javascript:void(0);' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'>早餐</a> <a href='javascript:void(0);' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'>午餐</a> <a href='javascript:void(0);' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'>晚餐</a> </div> </li> <li><a href='' class='add_box'>购物</a><span class='icon buy_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <li><a href='' class='add_box'>自由活动</a><span class='icon phone_icon02' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <!-- ko if:$root.IsStudyTourResource()==true&&($root.ResourceTypeId()==33||$root.ResourceTypeId()==34||$root.ResourceTypeId()==41||$root.ResourceTypeId()==42)--> <li><a href='' class='add_box'>课程</a><span class='icon book_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <!--/ko--> <!-- ko if:$root.IsStudyTourResource()==true&&($root.ResourceTypeId()==33||$root.ResourceTypeId()==34||$root.ResourceTypeId()==41||$root.ResourceTypeId()==42)--> <li><a href='' class='add_box'>活动</a><span class='icon pic_icon01' data-bind='event:{click:function(d,e){$root.getChangeAddNewRouteValue(e,d)}}'></span></li> <!--/ko--> <!-- ko if:$root.IsThemeResource()=='T'&&($root.ResourceTypeId()==9||$root.ResourceTypeId()==10||$root.ResourceTypeId()==11||$root.ResourceTypeId()==26)--><!--/ko--> <!-- ko if:($root.IsThemeResource()=='T'||$root.IsStudyTourResource()==true||$root.IsTourResource()==true||$root.IsDingzhiResource()==true)&&($root.IsRetail()=='F')--><!--/ko--> </ul> </div> </div> </td> <td rowspan='2'> <!--<div class='select_time' data-bind='visible:!SingleTimeVal(),css:SingleTimeVal()==true?'select_time01 ':'',css:TimeHighLightColor()==true?'wrong_style01':'''> <i class='tips_star'>*</i> <input name='' type='text' readonly='readonly' class='input_text' placeholder='HH' data-bind='value:TakeOffTime_HH,event:{click:function(d,e){ $root.getTime(e,d)},blur:function(d){$root.validateNumber(d)}}' />:<input name='' readonly='readonly' type='text' class='input_text' placeholder='MM' data-bind='value:TakeOffTime_MM,event:{click:function(d,e){ $root.getTime(e,d)},blur:function(d){$root.validateNumber(d)}}' /> </div> <div class='select_time' data-bind='visible:SingleTimeVal(),css:SingleTimeVal()==true?'select_time01 ':'',css:TimeHighLightColor()==true?'wrong_style01':'''> <i class=' tips_star'>*</i> <input name='' type='text' readonly='readonly' class='input_text' data-bind='value:TakeOffTime_HH,event:{click:function(d,e){ $root.getTime(e,d)},blur:function(d){$root.validateNumber(d)}}' /> </div>--> <div class='select_time' data-bind='visible:!SingleTimeVal(),css:SingleTimeVal()==true?'select_time01 ':'',css:TimeHighLightColor()==true?'wrong_style01':'''> <i class='tips_star'>*</i> <input name='' type='text' readonly='readonly' class='input_text' placeholder='HH' data-bind='value:TakeOffTime_HH,event:{click:function(d,e){ $root.getTime(e,d)},blur:function(d){$root.validateNumber(d)}}'>:<input name='' readonly='readonly' type='text' class='input_text' placeholder='MM' data-bind='value:TakeOffTime_MM,event:{click:function(d,e){ $root.getTime(e,d)},blur:function(d){$root.validateNumber(d)}}'> </div> <div class='select_time' data-bind='visible:SingleTimeVal(),css:SingleTimeVal()==true?'select_time01 ':''' style='display: none;'> <i class=' tips_star'>*</i> <input name='' type='text' readonly='readonly' class='input_text' data-bind='value:TakeOffTime_HH,event:{click:function(d,e){ $root.getTime(e,d)},blur:function(d){$root.validateNumber(d)}}'> </div> <!-- ko if:$root.ResourceTypeId()!=9&&$root.ResourceTypeId()!=10&&$root.ResourceTypeId()!=33&&$root.ResourceTypeId()!=41--><!--/ko--> </td> <td><input name='' type='text' class='input_text input_text_long02' placeholder='请输入航班信息' data-bind='value:Description'></td> </tr> <tr> <td class='t_r'></td> <td> <div class='xc_input_box01'> <div class='select_cont01 select_cont02'> <!-- 需要出现下拉框的时候加上select_cont_cur --> <span class='show_text' data-bind='text:IsDirectCopy,event:{click:function(d,e){$root.selectIsDirect(e,d)}}'>待定</span><i class='down_icon01' data-bind='event:{click:function(d,e){$root.selectIsDirect(e,d)}}'></i> <div class='select_list'> <ul class='type01'> <li>直飞</li> <li>中转</li> <li>待定</li> </ul> </div> </div> <div class='time_input_box02 time_box_fillin'> <span class='tit01'>飞行距离</span> <div class='input_box01'> <input name='' type='text' class='input_text input_text_shot01' onkeyup='this.value=this.value.replace(/[^\d\.]/g,'')' placeholder='飞行距离' data-bind='value:Distance,event:{blur:function(d){$root.validateNumber(d)}}'> </div> </div> <div class='time_input_box01 time_box_fillin'> <span class='tit01'>行驶</span> <div class='input_box01'><input type='text' onkeyup='this.value=this.value.replace(/[^\d\.]/g,'')' data-bind='value:DriveTimeHh,event:{blur:function(d){$root.validateNumber(d)}}'><span class='text'>小时</span></div> <div class='input_box01'><input type='text' onkeyup='this.value=this.value.replace(/[^\d\.]/g,'')' data-bind='value:DriveTimeMm,event:{blur:function(d){$root.validateNumber(d)}}'><span class='text'>分钟</span></div> </div> <!-- ko if:IsTransfer()==true--><!--/ko--> </div> </td> </tr> </tbody> </table> <i class='del_icon01' data-bind='event:{click:function(d,e){$root.RemoveCurRouteMask(e,d)}}'></i> <!--<span class='routable_add'></span>--> </div>"
        
        
        console.log(hangban)
        $("body").on("click",function(e){
            if($(e.target).parent().parent().parent().hasClass("add_frame01") || $(e.target).hasClass("add_btn01")){
                
            }else{
                $(".route_mod01").find(".add_btn01").parent().removeClass("addnew_route_cur routable_addcur")
                
            }
        })
        
        $(".route_mod01").on("click",".add_btn01",function(e){
            e.preventDefault()
            $(".route_mod01").find(".add_btn01").parent().removeClass("addnew_route_cur routable_addcur")
            $(this).parent().addClass("addnew_route_cur routable_addcur")
        })
        
        $(".addnew_route").on("click",".icon",function(e){
            if($($(this).siblings()[0]).text() =="航班"){
                console.log("hangban")
            }
        })
        
        
    }())    
    
})

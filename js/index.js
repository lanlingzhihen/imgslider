/**
 * Created by zhangxiaopeng on 2016/5/19.
 */

var switch_btn_list;
var switch_btn_taglist;
var carouselpart;
var carousel_v_ilist;
var carousel
function initcarousel(){
   var switch_btn_list=$("#switch_btn_list");
   var switch_btn_taglist=switch_btn_list.find("a");
   var carouselpart=$("#carouselpart");
   var carousel_v_ilist=carouselpart.find("a");
    carousel_v_ilist.eq(0).addClass("current");
   carousel = new imgslider('#carouselpart',3000,'fade',function(tabindex){
            switch_btn_taglist.eq(tabindex).addClass("current").siblings().removeClass("current");
            carousel_v_ilist.eq(tabindex).addClass("current").siblings().removeClass("current");
        }
    );
    switch_btn_taglist.hover(function(){
        var obj=$(this);
        switchtocurrent(obj);
    },function(){
    });
    carouselpart.hover(function(){},function(){
        window.setTimeout(function(){
            carousel.start();
        },3000);
    });

}
function switchtocurrent(obj){
    var tabindex=switch_btn_taglist.index(obj);
    carousel.switchbyIndex(tabindex);
    /* switch_btn_taglist.eq(tabindex).addClass("current").siblings().removeClass("current");*/

}
$(document).ready(function(){
     switch_btn_list=$("#switch_btn_list");
     switch_btn_taglist=switch_btn_list.find("a");
     carouselpart=$("#carouselpart");
     carousel_v_ilist=carouselpart.find("a");
    initcarousel();
});
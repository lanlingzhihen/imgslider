/**
 * Created by zhangxiaopeng on 2016/5/19.
 */
/**
 * Created by zhangxiaopeng on 2015/7/22.
 */
/**
 * Created by zhangxiaopeng on 2015/7/17.
 */
function imgslider(w, time, method, callback){
    this.name=w;
    this.method = method;
    /*this.addClass = addClass;*/
    this.timeIn;
    this._oW = $(w);
    this.con =this._oW.parent();
    this.img_size = this._oW.find('img').size();
    this._sev = time;
    this.aImg = this._oW.find('img');
    this.imgHeight = this.aImg[0].offsetHeight;
    this.iIndex = 0;
    this.init();
    this.slidecallbackfn=callback;
}
imgslider.prototype={
    init:function(){
        this._oW.css({
            position:'relative'
        });
        if (this.method == 'fade') {
            this.aImg.eq(0).show().addClass('current').parent('a').siblings('a').find('img').removeClass("current").hide();

        }
        this.start();
    },
    start: function(){
        var o = this;
        if(this.timeIn!=null && this.timeIn!="clear")
        {
            o.stop();
        }
        if (this.method == 'fade') {
            this.timeIn =window.setInterval(function(){
                o.changeFade(o);
            }, this._sev);

        }
    },
    stop:function(){
        window.clearInterval(this.timeIn);
        this.timeIn="clear";
    },
    getIndex: function(){
        return this.aImg.index(this._oW.find("img.current"));
    },
    switchbyIndex:function(tabindex){
        this.stop();
        this.aImg.eq(tabindex).addClass('current').fadeIn().parent('a').siblings('a').find('img').removeClass("current").fadeOut();
        this.slidecallbackfn(tabindex);
    },
    changeFade: function(o){
        var currthis=this;
        var n;
        var tabindex=this.getIndex();
        if (tabindex+1 <=this.aImg.size() - 1) {
            tabindex++;
            currthis.aImg.eq(tabindex).addClass('current').fadeIn().parent('a').siblings('a').find('img').removeClass("current").fadeOut();

        } else {
            tabindex=0;
            currthis.aImg.eq(tabindex).addClass('current').fadeIn().parent('a').siblings('a').find('img').removeClass("current").fadeOut();
        }
        this.slidecallbackfn(tabindex);
    }

}
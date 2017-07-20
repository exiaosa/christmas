/**
 * Change Pages
 * @return {[type]} [description]
 */
function changePage(element,effect,callback){
    element
        .addClass(effect)
        .one("animationend webkitAnimationEnd", function() {
            callback && callback();
        })
}


/**
 * Manipulate different pages
 */
var Christmas = function() {
    var $pageA = $(".page-a");
    var $pageB = $(".page-b");
    var $pageC = $(".page-c");

    //switch
    $("#choose").on("change", function(e) {
        //selected page
        var pageName = e.target.value;
        switch (pageName) {
            case "page-b":
                //switch to PageB，then add effect
                changePage($pageA, "effect-out", function() {
                    new pageB()
                })
                break;
            case "page-c":
                //switch to PageC，then add effect
                changePage($pageC, "effect-in", function() {
                    new pageC()
                })
                break;
        }
    })

};

$(function() {
    Christmas();
})

var recalc = function() {
    var container = document.querySelector(".container")
    //original scale
    var proportion = 900 / 1440;
    container.style.height = container.clientWidth * proportion + "px";
};

function init(){
	/**
     * adjust the image according to the screen
     * @param  {[type]} doc [description]
     * @param  {[type]} win [description]
     * @return {[type]}     [description]
     */
    var docEl = document.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        
    window.addEventListener(resizeEvt, recalc(), false);
    document.addEventListener('DOMContentLoaded', recalc(), false);
}

/*initlization*/
window.onload = function() {
    init();
};
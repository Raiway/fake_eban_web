Date.prototype.format = function(format) {
    /*
     * eg:format="YYYY-MM-dd hh:mm:ss";

     */
    var o = {
        "M+" :this.getMonth() + 1, // month
        "d+" :this.getDate() -1, // day
        "h+" :this.getHours()-3, // hour
        "m+" :30, // minute
        "s+" :22, // second
        "q+" :Math.floor((this.getMonth() + 3) / 3), // quarter
        "S" :this.getMilliseconds()
    // millisecond
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "")
                .substr(4 - RegExp.$1.length));
    }
    for ( var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
                    : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}
$(function(){
	var endTime = new Date().format("yyyy-MM-dd hh:mm:ss");
    $(".sqrq").text(endTime)
});
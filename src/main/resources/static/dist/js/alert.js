// 操作询问
var popupAlert = function (data, fnSure, fncanCel) {
    var tipData = data;
    var alertHtml = "<div class=\"popup-box\" id=\"popup-box\">" +
        "            <div class=\"popup-inner\">" +
        "                <div class=\"popup-center\">" +
        "                        <div class=\"popup-header\">" +
        "                            <div class=\"popup-title\">" + tipData.title + "</div>" +
        "                            <span class=\"popup-close\" id=\"popup-close\">×</span>" +
        "                        </div>" +
        "                        <div class=\"popup-main\">" +
        "                            <div class=\"popup-body\">" +
        "                              <p class=\"ask-info\">" + tipData.info +
        "                              </p>" +
        "                            </div>" +
        "                            <div class=\"popup-buttons\">" +
        "                                <button class=\"button-normal\" id=\"btn-sure\">" + tipData.btnSure + "</button>" +
        "                                <button class=\"button-normal ml10\" id=\"btn-cancel\">" + tipData.btnCancel + "</button>" +
        "                            </div>" +
        "                        </div>" +
        "                </div>" +
        "            </div>" +
        "        </div>";
        // 承接网站建设,网页设计,画册设计,LOGO设计,前端开发等业务！ QQ:951252660,本UI仅限于学习交流使用,切勿用户商业用途,盗用自重,仅在17素材网发布,其他网站均未发布,盗用并改为自己原创的请自重,如果您对本UI感兴趣,可加本人好友索取未经打包压缩后的源码
    document.body.insertAdjacentHTML('beforeend', alertHtml);
    document.querySelector("#popup-box").style.display = "block";
    var popupBox = document.querySelector("#popup-box"); //弹窗容器
    var sure = document.querySelector('#btn-sure');      //确定
    var cancel = document.querySelector('#btn-cancel');  //关闭
    var close = document.querySelector('#popup-close');  //关闭
    sure.onclick = function () {
        fnSure();
        popupBox.remove();
    }
    close.onclick = function () {
        fncanCel();
        popupBox.remove();
    }
    cancel.onclick = function () {
        fncanCel();
        popupBox.remove();
    }
}
// 操作状态提示
var tipAlert = function (data) {
    var data = data;
    var html = '<div class="popup-box" id=\"popup-box\">' +
        '            <div class="popup-inner">' +
        '                <div class="popup-tip" data-state="' + data.state + '">' + data.title +
        '                </div>' +
        '            </div>' +
        '        </div>';
    document.body.insertAdjacentHTML('beforeend', html);
    setTimeout(function () {
        var popupBox = document.querySelector("#popup-box");
        popupBox.remove();
    }, data.time * 1000);
}

// loading
var loading = function (data) {
    var ld = ' <div class="loadingBox" id=\"loadingBox\">';
    ld += '            <div class="loadingWrap">';
    ld += '                    <span class="loadingIcon"></span>';
    ld += '            </div>';
    ld += '        </div>';
    if (data.state == "open") {
        document.body.insertAdjacentHTML('beforeend', ld);
    }
    if (data.state == "close") {
        var loadingBox = document.querySelector("#loadingBox");
        loadingBox.remove();
    }
}

var winUnit={
    popupAlert:popupAlert,
    tipAlert:tipAlert,
    loading:loading
};

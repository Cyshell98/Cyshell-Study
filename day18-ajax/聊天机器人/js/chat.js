$(function () {
  // 初始化右侧滚动条
  // 这个方法定义在scroll.js中
  resetui();

  //为发送按钮绑定鼠标点击事件
  $("#btnSend").on("click", function () {
    var text = $("#ipt").val().trim();
    if (text.length <= 0) {
      return $("#ipt").val("");
    }
    //如果用户输入了聊天内容，则将聊天内容追加到页面上显示
    $("#talk_list").append(
      '<li class="right_word"><img src="img/person02.png" /><span>' +
        text +
        "</span></li>"
    );
    $("#ipt").val("");
    resetui();
    // 发起请求，获取聊天内容
    getMsg(text);
  });

  //获取聊天机器人发送回来的消息
  function getMsg(text) {
    $.ajax({
      method: "GET",
      url: "http://www.liulongbin.top:3006/api/robot",
      data: {
        spoken: text,
      },
      success: function (res) {
        // console.log(res);
        if (res.message === "success") {
          var msg = res.data.info.text;
        }
        $("#talk_list").append(
          '<li class="left_word"><img src="img/person01.png" /><span>' +
            msg +
            "</span></li>"
        );
        //   重置滚动条的位置
        resetui();
        //调用getVoice函数,把文本抓化为语音
        getVoice(msg);
      },
    });
  }
  //<audio src="" id="voice">
  //   将机器人的聊天内容转为语音
  function getVoice(text) {
    $.ajax({
      method: "GET",
      url: "http://www.liulongbin.top:3006/api/synthesize",
      data: {
        text: text,
      },
      success: function (res) {
        // console.log(res);
        if (res.message === "success") {
          var voiceUrl = res.voiceUrl;
        }
        //播放语音
        $("#talk_list").append(
          '<audio src="' +
            voiceUrl +
            '" id="voice" autoplay style:"display:none">'
        );
      },
    });
  }

  //   为文本框绑定keyup事件
  $("#ipt").on("keyup", function (e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      $("#btnSend").click();
    }
  });
});

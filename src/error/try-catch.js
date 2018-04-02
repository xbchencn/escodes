window.onerror = function(msg, url, line, col, error) {
  //没有URL不上报！上报也不知道错误
  if (msg != "Script error." && !url) {
    return true;
  }

  //采用异步的方式
  //我遇到过在 window.onunload 进行 ajax 的堵塞上报
  //由于客户端强制关闭webview导致这次堵塞上报有Network Error
  //我猜测这里window.onerror的执行流在关闭前是必然执行的
  //而离开文章之后的上报对于业务来说是可丢失的
  //所以我把这里的执行流放到异步事件去执行
  //脚本的异常数降低了10倍
  setTimeout(function() {
    var errInfo = {
      url: url,
      line: line,
      col: col || (window.event && window.event.errorCharacter) || 0, // 不一定所有浏览器都支持col参数
      msg: ''
    };

    if (!!error && !!error.stack) {
      // 如果浏览器有堆栈信息
      errInfo.msg = error.stack.toString();
    } else if (!!arguments.callee) {
      // 尝试通过callee拿堆栈信息
      var _stack = [];
      var f = arguments.callee.caller,
        c = 3;
      // 这里只拿三层堆栈信息
      while (f && (--c > 0)) {
        _stack.push(f.toString());
        if (f === f.caller) {
          break; //如果有环
        }
        f = f.caller;
      }
      _stack = _stack.join(",");
      errInfo.msg = _stack;
    }

    //把errInfo上报到后台！
    console.log(errInfo);
  }, 0);

  return true;
};
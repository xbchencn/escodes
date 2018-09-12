/*
  * 判断浏览器是否为移动端
  * @name    isMobile
  * @param   {boolean}   true为移动端
*/
export function isMobile () {
    var userAgentInfo = navigator.userAgent;

    if (!!userAgentInfo.match(/AppleWebKit.*Mobile.*/) || !!userAgentInfo.match(/AppleWebKit/)) {
        var temp = userAgentInfo.toLowerCase();
        if (temp.indexOf('android') > -1 || temp.indexOf('iphone') > -1 ||
            temp.indexOf('ipad') > -1 || temp.indexOf('windows phone') > -1 ||
            temp.indexOf('blackberry') > -1 || temp.indexOf('hp-tablet') > -1 ||
            temp.indexOf('symbian') > -1 || temp.indexOf('phone') > -1
        ) {
            return true;
        }
    }

    return false;
};

export function isMobile2 () {
  let ua = navigator.userAgent

  return ua.match(/(Android)[\s/]+([\d.]+)/) !== null ||
    ua.match(/(iPad|iPhone|iPod)\s+OS\s([\d_.]+)/) !== null ||
    ua.match(/(Windows\s+Phone)\s([\d.]+)/) !== null
}

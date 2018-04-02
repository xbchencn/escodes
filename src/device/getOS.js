/**
 *
 * @desc 获取操作系统类型
 * @return {String}
 */
export function getOS() {
    var ua = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
    var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
    var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

    if (/mac/i.test(appVersion)) return 'MacOS'
    if (/win/i.test(appVersion)) return 'Windows'
    if (/linux/i.test(appVersion)) return 'Linux'
    if (/iphone/i.test(ua) || /ipad/i.test(ua) || /ipod/i.test(ua)) return 'iOS'
    if (/android/i.test(ua)) return 'Android'
    if (/win/i.test(appVersion) && /phone/i.test(ua)) return 'Windows Phone'
}

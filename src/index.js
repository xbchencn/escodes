/**
 * @desc webpack打包入口文件
 */

import arrayEqual from './array/arrayEqual'

import addClass from './class/addClass'
import hasClass from './class/hasClass'
import removeClass from './class/removeClass'

import getCookie from './cookie/getCookie'
import removeCookie from './cookie/removeCookie'
import setCookie from './cookie/setCookie'

import getOS from './device/getOS'
import getExplore from './device/getExplore'

import getScrollTop from './dom/getScrollTop'
import offset from './dom/offset'
import scrollTo from './dom/scrollTo'
import setScrollTop from './dom/setScrollTop'
import windowResize from './dom/windowResize'

import debounce from './function/debounce'
import throttle from './function/throttle'

import getKeyName from './keycode/getKeyName'

import deepClone from './object/deepClone'
import isEmptyObject from './object/isEmptyObject'

import randomColor from './random/randomColor'
import randomNum from './random/randomNum'

import isEmail from './regexp/isEmail'
import isIdCard from './regexp/isIdCard'
import isPhoneNum from './regexp/isPhoneNum'
import isUrl from './regexp/isUrl'

import digitUppercase from './string/digitUppercase'

import isSupportWebP from './support/isSupportWebP'

import formatPassTime from './time/formatPassTime'
import formatRemainTime from './time/formatRemainTime'

import parseQueryString from './url/parseQueryString'
import stringfyQueryString from './url/stringfyQueryString'


export default {
    arrayEqual,

    addClass,
    hasClass,
    removeClass,

    getCookie,
    removeCookie,
    setCookie,

    getOS,
    getExplore,

    getScrollTop,
    offset,
    scrollTo,
    setScrollTop,
    windowResize,

    debounce,
    throttle,

    getKeyName,

    deepClone,
    isEmptyObject,

    randomColor,
    randomNum,

    isEmail,
    isIdCard,
    isPhoneNum,
    isUrl,

    digitUppercase,

    isSupportWebP,

    formatPassTime,
    formatRemainTime,
    parseQueryString,
    stringfyQueryString,
}
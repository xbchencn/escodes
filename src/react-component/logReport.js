/**
 * window.onerror 事件处理函数
 * @author Chen Xiaobo
 * @export
 * @param {string} [message=''] 错误信息
 * @param {string} [file=''] 发生错误的脚本URL
 * @param {number} [line=0] 发生错误的行号
 * @param {number} [column=0] 发生错误的列号
 * @param {object} errObj Error对象
 * @returns true
 */
export function onError (message = '', file = '', line = 0, column = 0, errObj) {
  try {
    column = column || (window.event && window.event.errorCharacter)
    let stack = errObj ? errObj.stack : null

    if (!stack) {
      stack = []
      let f = arguments.callee.caller
      while (f) {
        let name = f.name || f.toString()
        stack.push(name)
        if (f === f.caller) {
          break
        }
        f = f.caller
      }
      errObj['stack'] = stack
    }

    const data = {
      source: 'onerror',
      message,
      file,
      line,
      column,
      stack
    }

    logReport('error', data)
  } catch (e) {
    logReport('trycatch', e)
  }

  return true
}

/**
 * cnzz事件发送
 * @author Chen Xiaobo
 * @param {any} category 事件类别，必填项
 * @param {any} action 事件操作，必填项
 * @param {string} [label=''] 事件标签，选填项
 * @param {number} [value=0] 事件值，选填项
 * @param {string} [nodeid=''] div元素id，选填项
 */
export function report (category, action, label, value, nodeid) {
  setTimeout(() => {
    try {
      _czc.push(['_trackEvent', category, action, label, value, nodeid])
    } catch (e) {
      console.warn(e)
    }
  }, 1000)
}

/**
 * 日志上报处理程序
 * @author Chen Xiaobo
 * @param {any} category 事件类别，必填项
 * @param {any} err 错误日志对象
 */
export default function logReport (category, err) {
  let { source, message, stack } = err
  let label = source + '@'

  if (source === 'onerror') {
    let { file, line, column } = err
    label += file + ':' + line + ':' + column
  }

  label += '@' + stack

  console.log(err, label)

  report(category, message, label)
}

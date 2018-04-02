/**
 * getError
 * @param {string} url
 * @param {object} option
 * @param {object} xhr
 * @return {Error} err
 */
function getError (url, option, xhr) {
  let msg
  if (xhr.response) {
    msg = `${xhr.response.error || xhr.response}`
  } else if (xhr.responseText) {
    msg = `${xhr.responseText}`
  } else {
    msg = `fail to post ${url} ${xhr.status}`
  }

  const err = new Error(msg)
  err.status = xhr.status
  err.method = 'post'
  err.url = url
  return err
}

/**
 * getBody
 * @param {object} xhr
 * @return {string} text
 */
function getBody (xhr) {
  const text = xhr.responseText || xhr.response
  if (!text) {
    return text
  }

  try {
    return JSON.parse(text)
  } catch (e) {
    return text
  }
}

/**
 * 文件上传
 * @param {object} option
 * option: { url, data, filename, file, onSuccess, onProgress, onError, headers, withCredentials }
 * @return {object} xhr
 */
export default function ajax (option) {
  const XMLHttpRequest = window.XMLHttpRequest

  if (typeof XMLHttpRequest === 'undefined') {
    option.onError(new Error('您的浏览器不支持 XMLHttpRequest'))
    return
  }

  const xhr = new XMLHttpRequest()
  const url = option.url

  if (xhr.upload) {
    xhr.upload.onprogress = function progress (e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100
      }
      option.onProgress(e)
    }
  }

  const formData = new window.FormData()

  if (option.data) {
    Object.keys(option.data).forEach(key => {
      formData.append(key, option.data[key])
    })
  }

  formData.append(option.filename, option.file)

  xhr.onerror = function (e) {
    option.onError(e)
  }

  xhr.onload = function onload () {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(url, option, xhr))
    }

    option.onSuccess(getBody(xhr))
  }

  xhr.open('post', url, true)

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true
  }

  const headers = option.headers || {}

  for (let item in headers) {
    if (headers.hasOwnProperty(item) && headers[item] !== null) {
      xhr.setRequestHeader(item, headers[item])
    }
  }

  xhr.send(formData)
  return xhr
}

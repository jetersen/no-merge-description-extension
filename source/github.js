import { domLoaded } from 'dom-loaded'
import elementReady from 'element-ready'
import select from 'select-dom'

const init = async () => {
  if (!document.location.pathname.toString().match(/\/pull\/\d+/)) {
    return
  }
  await elementReady('.merge-message')
  const aButton = '[type=button].js-details-target.btn-primary'

  const buttons = select.all(
    `.btn-group-squash ${aButton}, .btn-group-merge ${aButton}`
  )
  if (!buttons) {
    return
  }

  buttons.forEach(element =>
    element.addEventListener(
      'click',
      () => (select('#merge_message_field').value = '')
    )
  )
}

const onAjaxedPages = async callback => {
  await domLoaded
  document.addEventListener('pjax:end', callback)
  callback()
}

onAjaxedPages(init)

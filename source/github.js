import { domLoaded } from 'dom-loaded'
import elementReady from 'element-ready'
import select from 'select-dom'

const init = async () => {
  if (!document.location.pathname.toString().match(/\/pull\/\d+/)) {
    return
  }
  await elementReady('.merge-message')

  const buttons = select.all(
    '.btn-group-squash .js-details-target, .btn-group-merge .js-details-target'
  )
  if (!buttons) {
    return
  }

  buttons.forEach(element =>
    element.addEventListener('click', () => {
      const field = select('#merge_message_field')
      if (field.value == '') {
        return
      }
      field.value = ''
    })
  )
}

const onAjaxedPages = async callback => {
  await domLoaded
  document.addEventListener('pjax:end', callback)
  callback()
}

onAjaxedPages(init)

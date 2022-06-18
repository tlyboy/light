const body = document.body

if (body) {
  const light = document.querySelector('#light')

  if (light) {
    let s = false

    light.addEventListener('click', e => {
      if (s == false) {
        e.target.className = 'light turn-on'
        e.target.innerText = '关灯'
        body.style.backgroundColor = '#ecf0f1'
        s = true
      } else {
        e.target.className = 'light turn-off'
        e.target.innerText = '开灯'
        body.style.backgroundColor = '#2c3e50'
        s = false
      }
    })
  }
}

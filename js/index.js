let box = document.querySelector('#box')

let s = false
box.addEventListener('click', e => {
  if (s == false) {
    e.target.className = 'box turn-on'
    e.target.innerText = '关灯'
    document.body.style.backgroundColor = '#ecf0f1'
    s = true
  } else {
    e.target.className = 'box turn-off'
    e.target.innerText = '开灯'
    document.body.style.backgroundColor = '#2c3e50'
    s = false
  }
})

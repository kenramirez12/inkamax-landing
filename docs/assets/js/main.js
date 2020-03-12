const setHeights = () => {
  console.log('voy a stear')
  const mainBgTop = document.querySelector('.main-bg-top')
  const mainBgBottom = document.querySelector('.main-bg-bottom')

  mainBgTop.style.marginTop = (mainBgTop.clientHeight * -1) + 'px'
  mainBgBottom.style.marginBottom = (mainBgBottom.clientHeight * -1) + 'px'
}

window.onload = function() {
  setTimeout(() => {
    setHeights()
  }, 500);
}
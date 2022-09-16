const btnEl = document.querySelector('.btn')

/*track the mouse event*/
/*event.pageX is giving position from right to the left of the button*/
/*event.pageY is giving position from top to the bottom of the button*/
btnEl.addEventListener('mouseover', (event)=>{
  const y = event.pageY - btnEl.offsetTop
  const x = event.pageX - btnEl.offsetLeft

  /*setting property to style.css for top:var in before*/
  btnEl.style.setProperty('--xPos', x + 'px')
  btnEl.style.setProperty('--yPos', y + 'px')
})
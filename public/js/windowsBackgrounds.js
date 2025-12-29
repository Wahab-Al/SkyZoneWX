window.addEventListener('DOMContentLoaded', ()=>{
  const windows = document.querySelectorAll('.windows')

  const backgroundImgs = [
    'public/img/damascus1.jpg',
    'public/img/berlin.jpg',
    'public/img/newyork.jpg',
    'public/img/sydney.jpg',
  ]
  windows.forEach((window, index)=>{
    if(backgroundImgs[index]){
      window.style.backgroundImage = `url(${backgroundImgs[index]})`
      window.style.backgroundSize = 'cover'
      window.style.backgroundPosition = 'center'
    }
  })
})
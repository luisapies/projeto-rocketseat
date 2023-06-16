function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //if (html.classList.contains('light')) {
  //  html.classList.remove('light')
  // } else {
  //html.classList.add('light')
  //}

  //pegar a tag imag
  const img = document.querySelector('#profile img')

  //substituir a imagem
  if (html.classList.contains('light')) {
    //se tiver light mode, adc imagem light
    img.setAttribute('src', 'assets/avatar-light.png')
  } else {
    //se tiver sem light mode, adc img dark
    img.setAttribute('src', 'assets/avatar.png')

    if (html.classList.contains('light')) {
      img.setAttribute('alt', 'gato preto de olhos verdes.')
    } else {
      img.setAttribute('alt', 'Gato branco de um olho azul e o outro mel.')
    }
  }
}

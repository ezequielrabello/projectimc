//criando um objeto
export const Modal = {
    // variaveis que mudam de tela 
    screen2: window.document.querySelector('.screen2'),
    res: window.document.querySelector('span'),
    bto_close: window.document.querySelector('.modal button.close'),

  
    open() {
      Modal.screen2.classList.add('open')
    },
  
    close() {
      Modal.screen2.classList.remove('open')
    },

  
}

Modal.bto_close.onclick = Modal.close

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close()
  } 
}


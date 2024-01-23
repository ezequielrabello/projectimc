import { Modal } from "./modal.js"
import { alert_error } from "./alertError.js"
import { calcIMC, isnNum } from "./utils.js"

//variaveis 
var form = window.document.querySelector('form')
var inputWeight = window.document.querySelector('#weight')
var inputHeight = window.document.querySelector('#height')

//eventos
form.onsubmit = function(event) {
    event.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value

    
    var showAlertError = isnNum(weight) || isnNum(height) 

    if (showAlertError) {
      alert_error.open()
      return;
    } 
    alert_error.close()

    var imc = calcIMC(weight, height)
    Modal.res.innerText = `Seu IMC igual a ${imc}`
    Modal.open()
    

}

inputWeight.oninput = () => alert_error.close()
inputHeight.oninput = () => alert_error.close()






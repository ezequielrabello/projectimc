export var alert_error = {
    element: window.document.querySelector('.alert-error'),

    open() {
        alert_error.element.classList.add('open')
    },

    close() {
        alert_error.element.classList.remove('open')
    }
}

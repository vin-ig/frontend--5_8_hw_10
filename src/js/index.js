$(document).ready(() => {
    document.getElementById('burger').onclick = function () {
        document.getElementById('menu').classList.add('open')
    }

    document.querySelectorAll('#menu *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('menu').classList.remove('open');
        }
    })


    $('#submit-order').click(() => {
        $('.error-input').css({visibility: 'hidden'})
        let hasError = false
        for (let input of $('.order-form input')) {
            input = $(input)
            input.css({borderColor: 'initial'})

            if (!input.val()) {
                input.css({borderColor: 'red'})
                input.next().css({visibility: 'visible'})
                hasError = true
            }
        }
    })
})
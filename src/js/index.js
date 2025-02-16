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
        const loader = $('.loader')
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

        if (!hasError) {
            loader.css({display: 'flex'})
            $.ajax({
                method: 'POST',
                url: 'https://testologia.ru/checkout',
                data: {
                    product: $('#product-input').val(),
                    name: $('#name-input').val(),
                    phone: $('#phone-input').val(),
                }
            }).done((message) => {
                loader.hide()
                if (message.success) {

                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                }
            })
        }
    })
})
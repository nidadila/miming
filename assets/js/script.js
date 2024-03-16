AOS.init()

lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true
})

var musik = ''
var audio = document.querySelector('.audio')
if (musik) {
    audio.src = musik
}

function mulai() 
{
    audio.play()
    window.scrollTo(0, 0)
    var mail_section = $('#mail-section')
    $('#mail').attr('src', 'assets/img/mail.gif')
    setTimeout(function () {
        mail_section.css('opacity', 0)
        $('body').removeClass('overflow-hidden')
    }, 2000)
    setTimeout(function () {
        mail_section.removeClass('d-flex')
        mail_section.addClass('d-none')
    }, 4000)
}

function wa(isi) {
    open("https://wa.me/6281333987033?text=Makasih ya, di hari spesial ini miming mau " + isi)
}

async function makeawish() {
    var {
        value: kado
    } = await swal.fire({
        imageUrl: 'assets/img/icon.png',
        title: 'Di hari spesial ini, kamu mau apa?, jangan mahal-mahal yak😂',
        imageWidth: 400,
        imageHeigth: 400,
        confirmButtonColor: '#a0522d',
        confirmButtonText: 'Kirim ✈',
        input: 'text',
        showCancelButton: false
    })

    if (kado) {
        await swal.fire({
            imageUrl: 'assets/img/icon.png',
            title: 'kirim jawabannya ke WA ya!',
            confirmButtonColor: '#a0522d',
            confirmButtonText: 'Kirim ✈'
        })
        wa(kado)
    } else {
        await swal.fire({
            icon: 'error',
            title: 'Jangan dikosongin yak!!',
        })
        makeawish()
    }
}
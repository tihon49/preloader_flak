const preloader = document.getElementById('preloader');
const formData = document.getElementById('upload')
const input = document.querySelector('input')

const Preload = (payload) => {
    if (payload) preloader.style.visibility = 'visible'
    else setTimeout(() => preloader.style.visibility = 'hidden', 2000) 
}

window.addEventListener('load', function() {
    Preload(false)
})

const uploadFile = async (file) => {
    try {
        Preload(true)
        const data = new FormData()
        data.append('file', file)
        await fetch('/', { method: 'POST', body: data })
        Preload(false)
    } catch (e) {
        Preload(false)
        console.log(e);
    }
}

formData.addEventListener('submit', (e) => {
    uploadFile(input.files[0])
    e.preventDefault()
})

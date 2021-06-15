const preloader = document.getElementById('preloader');
const buttonUpload = document.getElementById('get_file')

const Preload = (payload) => {
    if (payload) preloader.style.visibility = 'visible'
    else setTimeout(() => preloader.style.visibility = 'hidden', 0) 
}

window.addEventListener('load', function() {
    Preload(false)
})

buttonUpload.addEventListener('click', (e) => {
    e.preventDefault()
        Preload(true)
        fetch('/', { method: 'POST', responseType: 'arraybuffer'})
        .then(res => res.blob())
        .then(blob => {
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.setAttribute("download", 'reg_file.gpg'); // тут указываем имя которое хотим присвоить скачиваемому файлу
            a.click();
        })
        .catch(e => console.log(e))
        .finally(() => Preload(false))
})
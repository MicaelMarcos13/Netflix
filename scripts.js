
let botãosom = document.querySelector(".botão-som")
let video = document.querySelector(".video")

botãosom.addEventListener ("click", ligasom)

function ligasom (){
    video.muted = false
    
}

const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")

button.onclick = function(){
    modal.showModal()
}
buttonClose.onclick = function () {
    modal.close()
}





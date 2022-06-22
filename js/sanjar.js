let read = document.querySelectorAll(".reads_btn")
let text = document.querySelectorAll(".text_btn")
let read2 = document.querySelectorAll(".reads_btn2")
let text2 = document.querySelectorAll(".text_btn2")
let read3 = document.querySelectorAll(".reads_btn3")
let text3 = document.querySelectorAll(".text_btn3")


read.forEach(item => {
    text.forEach(item2 => {
        item.addEventListener("click", () => {
            item2.classList.toggle("text_btnn");
        })
    })

})

read2.forEach(item => {
    text2.forEach(item2 => {
        item.addEventListener("click", () => {
            item2.classList.toggle("text_btnn");
        })
    })

})

read3.forEach(item => {
    text3.forEach(item2 => {
        item.addEventListener("click", () => {
            item2.classList.toggle("text_btnn");
        })
    })

})
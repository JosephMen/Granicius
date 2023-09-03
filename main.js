
const form = document.getElementById("main-form")
const checkResAdd = document.getElementById("check-resAdd")

const mailAdd = [
    document.getElementById("mail-add"),
    document.getElementById("mail-add2"),
    document.getElementById("mail-city"),
    document.getElementById("mail-zip")
]

const ressAdd = [
    document.getElementById("res-add"),
    document.getElementById("res-add2"),
    document.getElementById("res-city"),
    document.getElementById("res-zip")
]

ressAdd.forEach((input, index) => {
    $(input).change(function(){
        if(checkResAdd.checked){
            $(mailAdd[index]).val($(this).val())
        }
    })
})

$(".close-modal").click(function(){
    $(".modal").removeClass("show-modal")
})

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const inputsRequired = document.querySelectorAll('input:required')
    inputsRequired.forEach(input => {
        if(input.checkValidity()){
            input.nextElementSibling.classList.remove('spam-display')
        }
    })

    if(!form.checkValidity()){
        event.stopPropagation()
        form.classList.add("submitted-form")

        const inputsArray = document.querySelectorAll('input:invalid')
        inputsArray.forEach(input => {
            input.nextElementSibling.classList.add('spam-display')
            input.nextElementSibling.textContent = "Field required"
        })

    } else {
        $('button[type="submit"]').click(function () { 
            $(".modal").addClass("show-modal")
         })
    }
})

checkResAdd.addEventListener('change', event => {
    if(checkResAdd.checked){
        mailAdd.forEach((input, index) => {
            input.disabled = true
            input.value = ressAdd[index].value
        })
        return
    }
    mailAdd.forEach((input, index) => {
        input.disabled = false
        input.value = ""
    })
})
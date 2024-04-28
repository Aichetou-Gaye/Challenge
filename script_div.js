let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let divise = document.getElementById('divise')
let total = document.getElementById('total')

function division() {
    let a = Number(n1.value)
    let b = Number(n2.value)

    let res = a / b

    divise.value = res
}

total.addEventListener("click", division)
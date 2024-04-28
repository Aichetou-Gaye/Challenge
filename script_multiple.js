let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let n3 = document.getElementById('n3')
let multiple = document.getElementById('multiple')
let total = document.getElementById('total')

function multiplication() {
    let a = Number(n1.value)
    let b = Number(n2.value)
    let c = Number(n3.value)

    let res

    if (c === 0){
        res = a * b
    }else{
        res = a * b * c
    }

    multiple.value = res
}

total.addEventListener("click", multiplication)
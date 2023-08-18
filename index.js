function shoppingCart(data){
    const text = data.parentNode.childNodes[1].innerText
    const calculate = document.getElementById('calculation')
    const p = document.createElement('p')
    p.innerText=text;
    calculate.appendChild(p)
}
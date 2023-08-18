let total =0;
function shoppingCart(data){
    const text = data.parentNode.childNodes[1].innerText
    const calculate = document.getElementById('calculation')
    const p = document.createElement('p')
    p.innerText=text
    calculate.appendChild(p)
    const priceText = data.parentNode.childNodes[3].innerText.split(' ')[1]
    const price = parseFloat(priceText);
    total = total + price;
    const setPrice = calculate.childNodes[5].childNodes[1];
    setPrice.innerText =total;
}
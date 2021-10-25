var span = document.getElementById('span')
var carts = document.getElementsByClassName('add-cart')
var selectors = document.getElementsByClassName('Price')
var DetailImage=document.getElementById("DetailImage")
var flag

selectors[0].onclick = function () {
    flag = "big"
    DetailImage.src="Detailbig.png"
    for (var j=0;j<selectors.length;j++){
        selectors[j].style.borderColor=''
        selectors[j].style.color=''
        selectors[j].style.fontWeight=''
    }
    this.style.borderColor='#923D00'
    this.style.fontWeight='bold'
}

selectors[1].onclick = function () {
    flag = "small"
    DetailImage.src="Detail.png"
    for (var j=0;j<selectors.length;j++){
        selectors[j].style.borderColor=''
        selectors[j].style.color=''
        selectors[j].style.fontWeight=''
    }
    this.style.borderColor='#923D00'
    this.style.fontWeight='bold'
}

var bigs = sessionStorage.getItem('Bigs');
sessionStorage.setItem('Bigs', 0)
var smalls = sessionStorage.getItem('Smalls');
sessionStorage.setItem('Smalls', 0)

carts[0].onclick = function () {
    if (flag == "big") {
        var bs = parseInt(sessionStorage.getItem('Bigs'))
        sessionStorage.setItem('Bigs', bs + 1);
    }

    if (flag == "small") {
        var ss = parseInt(sessionStorage.getItem('Smalls'))
        sessionStorage.setItem('Smalls', ss + 1);
    }
    span.innerHTML=parseInt(sessionStorage.getItem('Bigs'))+parseInt(sessionStorage.getItem('Smalls'))
}

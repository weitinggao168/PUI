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

var bigs = localStorage.getItem('Bigs');
var smalls = localStorage.getItem('Smalls');

bigs=parseInt(bigs)
smalls=parseInt(smalls)

if(bigs||smalls) {
    span.innerHTML=bigs+smalls
}

carts[0].onclick = function () {
    if (flag == "big") {
        if(bigs) {
            localStorage.setItem('Bigs', bigs + 1)
            bigs = parseInt(localStorage.getItem('Bigs'));
            span.innerHTML=bigs+smalls
        }
        else {
            localStorage.setItem('Bigs', 1);
            bigs = parseInt(localStorage.getItem('Bigs'));
            span.innerHTML=bigs+smalls
        }
    }

    if (flag == "small") {
        if(smalls) {
            localStorage.setItem('Smalls', smalls + 1);
            smalls = parseInt(localStorage.getItem('Smalls'));
            span.innerHTML=bigs+smalls
        }
        else {
            localStorage.setItem('Smalls', 1);
            smalls = parseInt(localStorage.getItem('Smalls'));
            span.innerHTML=bigs+smalls
        }
    }
}

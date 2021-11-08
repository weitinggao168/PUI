btn1=document.getElementById('btn1')
btn2=document.getElementById('btn2')
btn3=document.getElementById('btn3')
btn4=document.getElementById('btn4')
s1=document.getElementById('s1')
s2=document.getElementById('s2')
t=document.getElementById('Total')
row1=document.getElementById('row1')
row2=document.getElementById('row2')

bigs=parseInt(localStorage.getItem("Bigs"))
smalls=parseInt(localStorage.getItem("Smalls"))

if (bigs<=0){
    row1.remove()
}
if (smalls<=0){
    row2.remove()
}

function tt() {
    total=(bigs*3.26)+(smalls*2.26)
    t.innerText="Total: "+total.toFixed(2) + " USD"
    //total.toFixed(fractionDigits:2)
}

s1.innerHTML= bigs
s2.innerHTML= smalls

tt()

btn1.onclick=function () {
    localStorage.setItem('Bigs', bigs - 1)
    bigs = parseInt(localStorage.getItem('Bigs'));
    s1.innerHTML=bigs
    if (bigs<=0){
        localStorage.setItem('Bigs', 0)
        bigs = parseInt(localStorage.getItem('Bigs'));
        row1.remove()

    }
    tt()

}
btn2.onclick=function () {
    localStorage.setItem('Bigs', bigs + 1)
    bigs = parseInt(localStorage.getItem('Bigs'));
    s1.innerHTML=bigs
    tt()

}
btn3.onclick=function () {
    localStorage.setItem('Smalls', smalls - 1);
    smalls = parseInt(localStorage.getItem('Smalls'));
    s2.innerHTML=smalls
    if (smalls<=0){
        localStorage.setItem('Smalls', 0);
        smalls = parseInt(localStorage.getItem('Smalls'));
        row2.remove()
    }
    tt()
}
btn4.onclick=function () {
    localStorage.setItem('Smalls', smalls + 1);
    smalls = parseInt(localStorage.getItem('Smalls'));
    s2.innerHTML=smalls
    tt()
}

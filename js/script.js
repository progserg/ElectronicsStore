;
function changeAll(e) {
    var elem_id = e.id;
    var elem = document.getElementById(e.id);
    var elems = document.querySelectorAll('div.offers-menu > ul > li');
    var img ='';
    var text='';
    var i = 0;
    while (elems[i]!=null){
        if(elems[i].id != elem_id){
            elem = document.getElementById(elems[i].id);
            elem.style.background = 'url("../img/offer-list-background.png")';
            elem.querySelector('div a').style.color = '#2f3638';
        }
        if(elems[i].id == elem_id){
            elem = document.getElementById(elem_id);
            switch (elem_id){
                case 'offer-link-1':
                    elem.style.background = 'url("../img/offer-list-background-hover-1.png")';
                    text = document.getElementById('offer-text-1');
                    text.style.display = 'block';
                    document.getElementById('offer-text-2').style.display = 'none';
                    document.getElementById('offer-text-3').style.display = 'none';
                    document.getElementById('offer-text-4').style.display = 'none';
                    document.getElementById('offer-text-5').style.display = 'none';
                    img = document.querySelector('div.offer-info');
                    img.setAttribute('style', document.styleSheets[0].cssRules['offer-info:hover'])
                    img.style.backgroundImage = 'url("../img/selected-offer-1.png")';
                    break;
                case 'offer-link-2':
                    elem.style.background = 'url("../img/offer-list-background-hover-2.png")';
                    text = document.getElementById('offer-text-2');
                    text.style.display = 'block';
                    document.getElementById('offer-text-1').style.display = 'none';
                    document.getElementById('offer-text-3').style.display = 'none';
                    document.getElementById('offer-text-4').style.display = 'none';
                    document.getElementById('offer-text-5').style.display = 'none';
                    img = document.querySelector('div.offer-info');
                    img.setAttribute('style', document.styleSheets[0].cssRules['.offer-info:hover'])
                    img.style.backgroundImage = 'url("../img/selected-offer-2.png")';
                    break;
                case 'offer-link-3':
                    elem.style.background = 'url("../img/offer-list-background-hover-3.png")';
                    text = document.getElementById('offer-text-3');
                    text.style.display = 'block';
                    document.getElementById('offer-text-1').style.display = 'none';
                    document.getElementById('offer-text-2').style.display = 'none';
                    document.getElementById('offer-text-4').style.display = 'none';
                    document.getElementById('offer-text-5').style.display = 'none';
                    img = document.querySelector('div.offer-info');
                    img.setAttribute('style', document.styleSheets[0].cssRules['.offer-info:hover'])
                    img.style.backgroundImage = 'url("../img/selected-offer-3.png")';
                    break;
                case 'offer-link-4':
                    elem.style.background = 'url("../img/offer-list-background-hover-4.png")';
                    text = document.getElementById('offer-text-4');
                    text.style.display = 'block';
                    document.getElementById('offer-text-1').style.display = 'none';
                    document.getElementById('offer-text-2').style.display = 'none';
                    document.getElementById('offer-text-3').style.display = 'none';
                    document.getElementById('offer-text-5').style.display = 'none';
                    img = document.querySelector('div.offer-info');
                    img.setAttribute('style', document.styleSheets[0].cssRules['.offer-info:hover'])
                    img.style.backgroundImage = 'url("../img/selected-offer-4.png")';
                    break;
                case 'offer-link-5':
                    elem.style.background = 'url("../img/offer-list-background-hover-5.png")';
                    text = document.getElementById('offer-text-5');
                    text.style.display = 'block';
                    document.getElementById('offer-text-1').style.display = 'none';
                    document.getElementById('offer-text-2').style.display = 'none';
                    document.getElementById('offer-text-3').style.display = 'none';
                    document.getElementById('offer-text-4').style.display = 'none';
                    img = document.querySelector('div.offer-info');
                    img.setAttribute('style', document.styleSheets[0].cssRules['.offer-info:hover'])
                    img.style.backgroundImage = 'url("../img/selected-offer-5.png")';
                    break;
            }
            elem.querySelector('div a').style.color = '#ffffff';
        }
        i++;
    }

}

function scroll_Left() {
    var elems = document.querySelectorAll('div.spotlight');
    var elems_count = elems.length;
    var first_elem = elems[0];
    first_elem.parentNode.removeChild(first_elem);
    elems[elems_count-1].parentNode.appendChild(first_elem);

}

function scroll_Right() {
    var elems = document.querySelectorAll('div.spotlight');
    var elems_count = elems.length;
    var last_elem = elems[elems_count-1];
    last_elem.parentNode.removeChild(last_elem);
    elems[0].parentNode.insertBefore(last_elem, elems[0]);
}

function auto_Scroll() {
    setInterval(scroll_Left, 3000);
}
document.onload = auto_Scroll();
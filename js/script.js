;

function backgroundNewFirstOffer() {
    var elem = document.getElementById('offer-link-1');
    elem.style.background = 'url("../img/offer-list-background.png")';
    elem.querySelector('div a').style.color = '#2f3638';
    //elem.setAttribute('style', document.styleSheets[0].cssRules['.offers-menu ul li#offer-link-2:hover']);

}
function backgroundNewAnotherOffer(e) {
    var elem_id = e.id;
    var elem = document.getElementById(e.id);
    //alert(elem);
    switch (elem_id){
        case 'offer-link-2':
            elem.style.background = 'url("../img/offer-list-background-hover-2.png")';
            elem.querySelector('div a').style.color = '#ffffff';
            break;
        case 'offer-link-3':
            elem.style.background = 'url("../img/offer-list-background-hover-3.png")';
            elem.querySelector('div a').style.color = '#ffffff';
            break;
        case 'offer-link-4':
            elem.style.background = 'url("../img/offer-list-background-hover-4.png")';
            elem.querySelector('div a').style.color = '#ffffff';
            break;
        case 'offer-link-5':
            elem.style.background = 'url("../img/offer-list-background-hover-5.png")';
            elem.querySelector('div a').style.color = '#ffffff';
            break;
    }
    //elem.querySelector('div a').style.color = '#ffffff';
}
function backgroundDefaultFirstOffer() {
    var elem = document.getElementById('offer-link-1');
    elem.style.background = 'url("../img/offer-list-background-hover-1.png")';
    elem.querySelector('div a').style.color = '#ffffff';
}
function changeAll(e) {
    var elem_id = e.id;
    var elem = document.getElementById(e.id);
    var elems = document.querySelectorAll('div.offers-menu > ul > li');
    var img ='';
    var i=0;
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
                    img = document.querySelector('div.offer-info');
                    img.setAttribute('div.offer-info', document.styleSheets[0].cssRules['.offer-info:hover'])
                    img.style.backgroundImage = 'url("../img/selected-offer-1.png';
                    break;
                case 'offer-link-2':
                    elem.style.background = 'url("../img/offer-list-background-hover-2.png")';
                    img = document.querySelector('div.offer-info');
                    img.setAttribute('div.offer-info', document.styleSheets[0].cssRules['.offer-info:hover'])
                    img.style.backgroundImage = 'url("../img/selected-offer-2.png';
                    break;
                case 'offer-link-3':
                    elem.style.background = 'url("../img/offer-list-background-hover-3.png")';
                    img = document.querySelector('div.offer-info');
                    img.setAttribute('div.offer-info', document.styleSheets[0].cssRules['.offer-info:hover'])
                    img.style.backgroundImage = 'url("../img/selected-offer-3.png';
                    break;
                case 'offer-link-4':
                    elem.style.background = 'url("../img/offer-list-background-hover-4.png")';
                    img = document.querySelector('div.offer-info');
                    img.setAttribute('div.offer-info', document.styleSheets[0].cssRules['.offer-info:hover'])
                    img.style.backgroundImage = 'url("../img/selected-offer-4.png';
                    break;
                case 'offer-link-5':
                    elem.style.background = 'url("../img/offer-list-background-hover-5.png")';
                    img = document.querySelector('div.offer-info');
                    img.setAttribute('div.offer-info', document.styleSheets[0].cssRules['.offer-info:hover'])
                    img.style.backgroundImage = 'url("../img/selected-offer-5.png';
                    break;
            }
            elem.querySelector('div a').style.color = '#ffffff';
        }
        i++;
    }

    /*switch (elem_id){
        case 'offer-link-1':
            elem.style.background = 'url("../img/offer-list-background-hover-1.png")';
            elem.querySelector('div a').style.color = '#ffffff';
            while {

            }
            break;
        case 'offer-link-2':
            elem.style.background = 'url("../img/offer-list-background-hover-2.png")';
            elem.querySelector('div a').style.color = '#ffffff';
            break;
        case 'offer-link-3':
            elem.style.background = 'url("../img/offer-list-background-hover-3.png")';
            elem.querySelector('div a').style.color = '#ffffff';
            break;
        case 'offer-link-4':
            elem.style.background = 'url("../img/offer-list-background-hover-4.png")';
            elem.querySelector('div a').style.color = '#ffffff';
            break;
        case 'offer-link-5':
            elem.style.background = 'url("../img/offer-list-background-hover-5.png")';
            elem.querySelector('div a').style.color = '#ffffff';
            break;
    }*/
}
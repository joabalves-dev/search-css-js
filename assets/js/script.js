const menu = document.querySelectorAll('.nav-item');
const elements = document.querySelectorAll('.box-img');


/* Click no menu */
menu.forEach(item =>{
    item.addEventListener('click', element=>{
        hidenShow(element.target.dataset.filter);
    })
});

/* show / hiden item */
function hidenShow(filter){
    elements.forEach(el =>{
        el.classList.remove('hiden');

        if(el.dataset.img !== filter && filter !== 'all'){
            el.classList.toggle('hiden');
        }
    })
}
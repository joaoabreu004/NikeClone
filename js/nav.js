const tabItems = document.querySelectorAll('.nav-option'); 
const tabItemsContent = document.querySelectorAll('.tab-content-item')

function selectItem(e){
    removeShow(); 
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.toggle('show');
}

function removeShow(){
    tabItemsContent.forEach(item => {
        item.classList.remove('show');
    })
}


tabItems.forEach(item => {
    item.addEventListener('mouseover', selectItem);
})


tabItems.forEach(item => {
    item.addEventListener('click', removeShow);
})


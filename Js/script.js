const $ = document;
const right_scroll_button = $.getElementById('right-button');
const main = $.querySelector('main');
const footer = $.querySelector('footer');
let pages = $.querySelectorAll('#header-texts');
const cursor = $.getElementById('cursor');
//scroll right
right_scroll_button.addEventListener('click' , ()=>{
    for(let i = 0; i < pages.length;++i){
        right_scroll_button.style.display = 'none';
        pages[i].style.display = "none";
        $.querySelector('.page'.concat(i + 2)).style.display = "block";
        $.querySelector('.page'.concat(i + 2)).style.animation = 'moveToLeft 0.5s ease';
        main.style.display = 'flex';
        footer.style.display = 'flex';
        break;
    }
})
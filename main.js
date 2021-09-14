setInterval(function(){
    if(window.innerWidth > 1024){
        overlay_section.style.display = 'none';
        // console.log(2222)
    }
}, 100)

const dropdown_btn = document.querySelector('[data-dropdown-btn]');
const dropdown_list = document.querySelector('[data-dropdown-list]');

const overlay_section = document.querySelector('[data-overlay-section]');
const overlay_close_btn = document.querySelector('[data-close-overlay]');

const view_code_match = document.querySelector('[data-view-code-match]');
const view_site_match = document.querySelector('[data-view-site-match]');

const view_code_calc = document.querySelector('[data-view-code-calc]');
const view_site_calc = document.querySelector('[data-view-site-calc]');

const view_code_quiz = document.querySelector('[data-view-code-quiz]');
const view_site_quiz = document.querySelector('[data-view-site-quiz]');

const view_code_api = document.querySelector('[data-view-code-api]');
const view_site_api = document.querySelector('[data-view-site-api]');

const view_code_form = document.querySelector('[data-view-code-form]');
const view_site_form = document.querySelector('[data-view-site-form]');

const dark_mode = document.querySelector('[data-dark-mode]');
const dark_mode2 = document.querySelector('[data-dark-mode2]');
const mode_wrap = document.querySelector('[data-mode-wrap]');
const mode_wrap2 = document.querySelector('[data-mode-wrap2]');
const main_container = document.querySelector('[data-container]');

const data_home = document.querySelector('[data-home]');
const data_projects = document.querySelector('[data-projects]');
const data_resume = document.querySelector('[data-resume]');

const view_projects = document.querySelector('[data-view-projects]');
const view_resume = document.querySelector('[data-view-resume]');

if(localStorage.getItem('dark')){
    main_container.style.filter = 'hue-rotate(175deg) brightness(1) invert(1)';
    mode_wrap.innerHTML = `
        <ion-icon name="sunny-outline" data-dark-mode></ion-icon>
        Light
        `;
}

if(localStorage.getItem('dark2')){
    main_container.style.filter = 'hue-rotate(175deg) brightness(1) invert(1)';
    mode_wrap2.innerHTML = `
        <ion-icon name="sunny-outline" data-dark-mode></ion-icon>
        `;
}

const toggle_dark_mode = () => {
    if(main_container.style.filter == 'hue-rotate(175deg) brightness(1) invert(1)'){
        localStorage.removeItem('dark');
        localStorage.removeItem('dark2');
        main_container.style.filter = '';
        mode_wrap.innerHTML = `
        <ion-icon name="moon-outline" data-dark-mode></ion-icon>
        Dark
        `;
    }
    else{
        localStorage.removeItem('dark');
        localStorage.setItem('dark', true);
        main_container.style.filter = 'hue-rotate(175deg) brightness(1) invert(1)';
        mode_wrap.innerHTML = `
        <ion-icon name="sunny-outline" data-dark-mode></ion-icon>
        Light
        `;
    }
};

const toggle_dark_mode2 = () => {
    if(main_container.style.filter == 'hue-rotate(175deg) brightness(1) invert(1)'){
        localStorage.removeItem('dark2');
        localStorage.removeItem('dark');
        main_container.style.filter = '';
        mode_wrap2.innerHTML = `
        <ion-icon name="moon-outline" data-dark-mode></ion-icon>
        `;
    }
    else{
        localStorage.removeItem('dark2');
        localStorage.setItem('dark2', true);
        main_container.style.filter = 'hue-rotate(175deg) brightness(1) invert(1)';
        mode_wrap2.innerHTML = `
        <ion-icon name="sunny-outline" data-dark-mode></ion-icon>
        `;
    }
};

mode_wrap.addEventListener('click', toggle_dark_mode);
mode_wrap2.addEventListener('click', toggle_dark_mode2);

// main_container.addEventListener('click', () => {
//     let display = dropdown_list.style.display;
//     // if(display != '' && display != 'none'){
//     //     dropdown_list.style.display = 'none';
//     // }
//     console.log(display);
// });

const dropdown_btn_handler = () => {
    let display = overlay_section.style.display;
    if(display == '' || display == 'none'){
        overlay_section.style.display = 'flex';
        overlay_section.scrollIntoView({behavior: 'smooth', block: 'start'});
        // overlay_section.scrollTo(0, 0);
    }
    else if(display == 'flex'){
        overlay_section.style.display = 'none';
    }
};

dropdown_btn.addEventListener('click', dropdown_btn_handler);

overlay_close_btn.addEventListener('click', () => {
    overlay_section.style.display = 'none';
})

view_code_match.onclick = () => {
    window.open('https://github.com/CamSteph/Card-Match-Application', '_blank');
};
view_site_match.onclick = () => {
    window.open('https://camsteph.github.io/Card-Match-Application/', '_blank');
};
view_code_calc.onclick = () => {
    window.open('https://camsteph.github.io/Drop-Shop-Store/', '_blank');
};
view_site_calc.onclick = () => {
    window.open('https://camsteph.github.io/Calculator-Application/', '_blank');
};
view_code_quiz.onclick = () => {
    window.open('https://github.com/CamSteph/Quiz-Application', '_blank');
};
view_site_quiz.onclick = () => {
    window.open('https://camsteph.github.io/Quiz-Application/', '_blank');
};
view_code_api.onclick = () => {
    window.open('https://github.com/CamSteph/Weather-API-Application', '_blank');
};
view_site_api.onclick = () => {
    window.open('https://camsteph.github.io/Weather-API-Application/', '_blank');
};
view_code_form.onclick = () => {
    window.open('https://github.com/CamSteph/Form-Validation', '_blank');
};
view_site_form.onclick = () => {
    window.open('https://camsteph.github.io/Form-Validation/', '_blank');
};

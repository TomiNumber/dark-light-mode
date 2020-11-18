const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const pusheen = document.getElementById('pusheen');

function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    image1.src = 'img/undraw_On_the_way_re_swjt_dark.svg';
    image2.src = 'img/undraw_Questions_re_1fy7_dark.svg';
    image3.src = 'img/undraw_Scrum_board_re_wk7v_dark.svg';
    pusheen.removeAttribute('hidden');
}


function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 /50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    image1.src = 'img/undraw_On_the_way_re_swjt_light.svg';
    image2.src = 'img/undraw_Questions_re_1fy7_light.svg';
    image3.src = 'img/undraw_Scrum_board_re_wk7v_light.svg';
    pusheen.setAttribute('hidden', true);
}


//Switch theme
function switchTheme(event)
{
    if(event.target.checked)
     {
         document.documentElement.setAttribute('data-theme', 'dark');
         darkMode();
     } else{
         document.documentElement.setAttribute('data-theme', 'light');
         lightMode();
     }
}

// event listener
toggleSwitch.addEventListener('change', switchTheme);
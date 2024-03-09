var lastScrollTop = 0;
var navbar = document.querySelector('.main-nav');
const sidebar = document.querySelector('.sidebar');
const topbar = document.querySelector('.topbar');
const hamburger = document.querySelector('.menu-btn');
const emailBtn = document.getElementById('email-btn');
const timelines = document.querySelectorAll('.timeline')
const timelinesContainerList = document.querySelectorAll('.timeline-container');
const timelinesContainer = document.querySelector('.timeline-container');
window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "0";
        navbar.style.background = "var(--color-bg)";
    }
    if (sidebar.style.display == 'flex') {
        navbar.style.background = "transparent";
    } else {
        navbar.style.background = "var(--color-bg)";
    }
    lastScrollTop = scrollTop;
});

function showSidebar(){
    navbar.style.background = "transparent";
    sidebar.style.display = 'flex';
    emailBtn.style.display = 'none';
    hamburger.style.display = 'none';
    logo.style.display = 'none';
    topbar.style.flexBasis = '50%';
}

function hideSidebar(){
    navbar.style.background = "var(--color-bg)";
    sidebar.style.display = 'none'; 
    emailBtn.style.display = 'flex';
    hamburger.style.display = 'flex';
    logo.style.display = 'inline';
    topbar.style.flexBasis = '100%';
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            timelines.forEach(item => {
                item.classList.add('show');
            });
            timelinesContainer.classList.add('line-down');
        }
    });
});

timelinesContainerList.forEach(el => observer.observe(el));
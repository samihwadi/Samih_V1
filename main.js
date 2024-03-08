var lastScrollTop = 0;
var navbar = document.querySelector('.main-nav');
window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

const sidebar = document.querySelector('.sidebar');
const emailBtn = document.getElementById('email-btn');
function showSidebar(){
    sidebar.style.display = 'flex';
    emailBtn.style.display = 'none';
}

function hideSidebar(){
    sidebar.style.display = 'none'; 
    emailBtn.style.display = 'flex';

}

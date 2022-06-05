const bars = document.querySelector('.mbl-bar');
const closeSidebar = document.querySelector('.close-mbl-sidebar');
const sidebar = document.querySelector('.mbl-sidebar');

bars.addEventListener('click', () => {
	sidebar.classList.add('show-mbl-sidebar');
});
closeSidebar.addEventListener('click', () => {
	sidebar.classList.remove('show-mbl-sidebar');
});

// dropdown
const dropdown = document.querySelector('.dropdown');
const dropbtn = document.querySelector('.dropdown__btn');

dropbtn.addEventListener('click', function () {
	dropdown.classList.toggle('show-dropdown');
});

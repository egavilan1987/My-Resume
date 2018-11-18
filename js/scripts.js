src="../js/jquery.min.js">
src="../js/jquery.filterizr.js">
// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// ScrollSpy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});

var filterizd = $('.filtr-container').filterizr({});

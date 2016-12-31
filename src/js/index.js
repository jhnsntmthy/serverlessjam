/* eslint-env browser, tape */
// import $ from 'jquery';
import url from 'url';


// $(document).ready(() => {
// document.body.innerHTML = JSON.stringify(url.parse(window.location.href));
console.log('something works', JSON.stringify(url.parse(window.location.href, true, true)));
// });

export default 'index';

/* eslint-env browser, tape */
// import $ from 'jquery';
import url from 'url';


// $(document).ready(() => {
// document.body.innerHTML = JSON.stringify(url.parse(window.location.href));
const purl = url.parse(window.location.href, true, true);
history.replaceState({}, 'dis course', '/');
console.log('email address', purl.q.email);
// });

export default 'index';

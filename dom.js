// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title = 123;
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all[10].textContent)
// document.all[10].textContent = 'hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


const title = document.getElementById('header-title');
const header = document.getElementById('main-header');
title.innerHTML = '<h3>Hei</h3>';
header.style.borderBottom = 'dashed 3px black';

const items = document.getElementsByClassName('list-group-item');
Array.from(items).map((item) => item.style.backgroundColor = 'orange');

const li = document.getElementsByTagName('li');

const headerQuery = document.querySelector('#main-header');

headerQuery.style.borderBottom = 'dashed 3px red';

const input = document.querySelector('input');

input.value = 'Hello World';

const submit = document.querySelector('input[type="submit"]')
submit.value = 'Send';

const newItem = document.querySelector('.list-group-item');
newItem.style.color = 'red';

const lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

const $all = (query) => document.querySelectorAll(query);

const titles = $all('.title');
const odd = $all('li:nth-child(odd)');

Array.from(odd).map((item) => item.style.backgroundColor = 'red');
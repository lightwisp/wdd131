
const input = document.querySelector('#favchap');
const botton = document.querySelector('botton');
const list = document.querySelector('list')
const li =document.createElement('li');
const deleateButton = document.createElement('button');

li.textContent = input.value;

deleateButton.textContent = '❌';

li.append(deleateButton);

list.append(li);
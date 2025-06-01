
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul')



button.addEventListener('click', function(){
    if (input.value.trim() !== ''){
        const li = document.createElement('li');
        const deleateButton = document.createElement('button');


        li.textContent = input.value;
        deleateButton.textContent = '❌';

        li.append(deleateButton);
        list.append(li);

        deleateButton.addEventListener('click', function(){
            list.removeChild(li);
            input.value = '';
            input.focus();
        });
        
    } else {
        input.placeholder = 'Type in your favoret chapter'
    }
    input.focus();
});


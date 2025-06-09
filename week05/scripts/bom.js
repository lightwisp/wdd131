
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul')

const chaptersArray = getChapterList() || [];

setChapterList();

chaptersArray.forEach(chapter => {
    displayList(chapter)
});

button.addEventListener('click', function(){
    if (input.value.trim() !== ''){
       displayList(input.value);
       chaptersArray.push(input.value);
       setChapterList();
       input.value = '';
       input.focus();
    } 
});

function displayList(item){
        let li = document.createElement('li');
        let deleateButton = document.createElement('button');


        li.textContent = input.value;
        deleateButton.textContent = '❌';
        deleateButton.classList.add("delete");

        li.append(deleateButton);
        list.append(li);

        deleateButton.addEventListener('click', function(){
            list.removeChild(li);
            input.value = '';
            input.focus();
        });
}

function setChapterList(){
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray))
}

function getChapterList(){
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
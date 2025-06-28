//! practicum 4

// const btnRef = document.querySelector('button');  
 // отримання подii, селектор елементу, чтобы убедиться, что он есть
// console.log('btnRef: ', btnRef.textContent);
 //                       действие, ф-ия
// btnRef.addEventListener('click', handleClick);

// function handleClick(params) {
//     console.log('click');
// }

// function handleClick(event) {
//     console.log(event);
// }

// function handleClick(a) {
//     if(btnRef.textContent === 'add') {
//         btnRef.textContent = 'remove';
         // btnRef.classList.add('added');
        // btnRef.classList.remove('removed');
//         btnRef.classList.toggle('selected');


//     } else {
//         btnRef.textContent = 'added';
//         btnRef.classList.add('remove');
//         btnRef.classList.remove('added');
//     }
// }

// const formRef = document.querySelector('.js-contsct-form');  

// function handleTarget(event) {
//     event.preventDefault();

//     console.log(event.target.elements); - куди натиснули
//     console.log(event.currentTarget); -  висить слуxач подii
//  }

// const formRef = document.querySelector('.js-contsct-form');  

// function handleTarget(event) {
//     event.preventDefault();
    
//     console.log(event.target.elements);
//     console.log(event.currentTarget);
//  }
// !

// todo 1 отримай body елемент і виведи його в консоль;
// const bodyElement = document.body;
// console.log(bodyElement);

// todo 2 отримай елемент id="title" і виведи його в консоль;
// const titleElement = document.querySelector('#title');
// console.log(titleElement);

// todo 3 отримай елемент class="list" і виведи його в консоль;
//  const listElement = document.querySelector('.list');
// console.log(listElement);

// todo 4 отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const dataAllElement = document.querySelectorAll('li');
// console.log(dataAllElement.dataset.topic);

// todo 5 отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
//  const dataLiElement = document.querySelector('li');
// console.log(dataLiElement.dataset.topic);

// todo 6 отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const dataElement = document.querySelectorAll('[data-topic]');
// const lastElement = dataElement[dataElement.length - 1];
// console.log(lastElement.dataset.topic);

// todo 7
// const h1 = document.querySelector('h1');
// const neighbor = h1.nextElementSibling;
// console.log(neighbor);

// todo 8 
// const headingAll = document.querySelectorAll('h3');
// headingAll.forEach((heading) => {
//     console.log(heading.textContent);
// })

// todo 9

// const headings = document.querySelectorAll('h3');
// headings.forEach((heading) => {
//     heading.classList.add('active');
// }
// );
// console.log(headings);

// todo 10

// const liElement = document.querySelector('[data-topic="navigation"]');

// console.log(liElement);

// todo 11

//  const liElement = document.querySelector('[data-topic="navigation"]');

//  liElement.style.backgroundColor = 'yellow';

// todo 12 
//   const liElement = document.querySelector('[data-topic="navigation"]');
//   const pElement = document.querySelector('p');
//   pElement.textContent = 'Я змінив тут текст!'
//   console.log(pElement);

// todo 13 
// const currentTopic = "manipulation";

// const dataTopElement = document.querySelector(`[data-topic = ${currentTopic}]`);

// todo 14 додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

//  const currentTopic = "manipulation";

//  const dataTopElement = document.querySelector(`[data-topic = ${currentTopic}]`);

//  dataTopElement.style.backgroundColor = 'blue';

// todo 15 знайти в документі заголовок, який має class="completed" і виведи його в консоль;

// const heading = document.querySelector('.completed');

// console.log(heading);

// todo 16 видали елемент li в якому знаходиться заголовок, який має class="completed"

// const liElementRemove = heading.closest('li');
// liElementRemove.remove();

// todo 17 після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const newParagraph = document.createElement('p');

// newParagraph.textContent = "Об'єктна модель документа (Document Object Model)";

// h1.insertAdjacentElement('afterend', newParagraph);


// todo 18 додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// const newLi = document.createElement('li');
// const list = document.querySelector("ul"); 
// const newH3 = document.createElement('h3');
// const newP = document.createElement('p');
// newH3.textContent = "Властивість innerHTML";
// newP.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// newLi.append(newH3, newP);
// list.append(newLi);


// todo 19 зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

// const html = `
//   <li>
//     <h3>Властивість innerHTML</h3>
//     <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.</p>
//   </li>
// `;
// list.insertAdjacentHTML('beforeend', html);

// todo 20 очисти список

// list.innerHTML = '';

// const container = document.querySelector('.box');
// console.log(getComputedStyle(container).width);

// todo 2 

// todo Створіть контейнер div (з класом number-container) в HTML-документі 
//todo та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
//todo числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
//todo Парні числа повинні мати зелений фон (додати клас even), 
//todo Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const numberContainer = document.querySelector('.number-container');

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// for (let i = 0; i < 100; i++) {
//     const num = randomNumber();
//     const div = document.createElement('div');

// div.classList.add('number');
// div.textContent = num;

// if(num % 2 === 0) {
//     div.classList.add('even');
// } else {
//     div.classList.add('odd');
// };
// numberContainer.appendChild(div);
// }


// todo task-4 
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.

const input = document.querySelector('.js-username-input');
const submit = document.querySelector('form');
const checkBox = document.querySelector('.js-policy-checkbox');
const span = document.querySelector('.js-username-output');

input.addEventListener('input', eventInput);
input.addEventListener('focus', eventFocus);
input.addEventListener('blur', eventBlur);
submit.addEventListener('submit', eventSubmit);


function eventInput(event) {
    //     input
    //  event - об’єкт події
    // target - елемент, на якому подія відбулася (тобто сам input)
    // value - значення (текст), яке введено в це поле.
    // length — довжина цього тексту, тобто кількість символів
    if(event.target.value.length > 6) {
        input.classList.add('success');
        input.classList.remove('error');
    } else {
        input.classList.add('error');
        input.classList.remove('success');
    }
    if (event.target.value === '') {
        span.textContent = 'Anonymous';
      } else {
        span.textContent = event.target.value;
      }
}

function eventFocus(event) {
    if(event.target.value === '') {
        event.target.style.outline = '3px solid red';
    } else {
        event.target.style.outline = '3px solid lime';
    }
}

function eventBlur(event) {
    if(event.target.value === '') {
        event.target.style.outline = '3px solid red';
    } else {
        event.target.style.outline = '3px solid lime';
    }
}

function eventSubmit(event) {
    // блокує стандартну відправку форми.
    event.preventDefault();
    // перевіряє чекбокс відмічено & ім’я введено
    if(checkBox.checked && input.value !== '') {
        // збери данні (userName)
        // у обьект
    const user = {
        userName: input.value
    };
     console.log(user);

     input.value = '';
     checkBox.checked = false;
     span.textContent = 'Anonymous';
  
    } else {
        alert("Будь ласка, введіть ім’я і прийміть умови.");
    }
}

// todo task-4
//  Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const box = document.querySelector('.box');
const btnSmall = document.querySelector('#decrease');
const btnBig = document.querySelector('#increase');
const MIN_SIZE = 40;

btnBig.addEventListener('click', addBig);
btnSmall.addEventListener('click', addSmall);

function addBig(event) {
    const currentWidth = parseInt(box.style.width) || box.offsetWidth;
    const currentHeight = parseInt(box.style.height) || box.offsetHeight;
    //  щоб дістати фактичну ширину елемента в пікселях, навіть якщо вона не задана явно через style
    const newWidth = currentWidth + 20;
    const newHeight = currentHeight + 20;
    box.style.width = `${newWidth}px`;
    box.style.height = `${newHeight}px`;
    //       on
    btnSmall.disabled = false;
}

function addSmall(event) {
    const currentWidth = parseInt(box.style.width) || box.offsetWidth;
    const currentHeight = parseInt(box.style.height) || box.offsetHeight;
    //  щоб дістати фактичну ширину елемента в пікселях, навіть якщо вона не задана явно через style
    if (currentWidth  >= MIN_SIZE && currentHeight >= MIN_SIZE) {
        const newWidth = currentWidth - 20;
        const newHeight = currentHeight - 20;
        box.style.width = `${newWidth}px`;
        box.style.height = `${newHeight}px`;
        if (newWidth <= MIN_SIZE && newHeight <= MIN_SIZE) {
            //        off
            btnSmall.disabled = true;
    };
    };


}




// Створюємо функцію, яка буде виконувати послідовні дії
// 7-1. 
// За допомогою методів об’єкта window створити:
// 1) нове вікно розміром 300х300 пікселів.
// 2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
// 3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
// 4) із затримкою 2 сек закрийте вікно.

function actionsWindow() {
    const newWindow = window.open("about:blank", "hello", 'width=300, height=300');

    setTimeout(function () {
        newWindow.resizeTo(500, 500);
    }, 2000);

    setTimeout(function () {
        newWindow.moveTo(200, 200);
    }, 4000);

    setTimeout(function () {
        newWindow.close();
    }, 6000);
}
const openButton = document.querySelector('.openWindowButton');
openButton.addEventListener('click', actionsWindow);




//7-2. 
//Для заданої HTML-сторінки:
//<p id ='text'>I learning JavaScript events!</p> 
//<div>
//        <button . . . . . >Change style!</button>
//</div>
//
//напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий,
// розмір шрифту 20px, шрифт сімейства "Comic Sans MS".


function changeCSS() {
    const textElem = document.getElementById('text');
    textElem.style.color = 'orange';
    textElem.style.fontSize = '20px';
    textElem.style.fontFamily = 'Comic Sans MS'
}

const changeButton = document.querySelector('.changeStyleButton');
changeButton.addEventListener('click', changeCSS);

//7-3. 
//Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
//Приклад – курсор наведений на лінку.
//https://user-images.githubusercontent.com/9075641/228461056-455d4dbf-527b-43de-a3dd-7c079dfbffed.png

const blueButton = document.querySelector('.blueButton');
const pinkButton = document.querySelector('.pinkButton');
const brownButton = document.querySelector('.brownButton');
const linkHover = document.querySelector('.linkHover');

blueButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue'
});
pinkButton.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'pink'
});
brownButton.addEventListener('mousedown', () => {
    document.body.style.backgroundColor = 'brown'
})
brownButton.addEventListener('mouseup', () => {
    document.body.style.backgroundColor = 'white'
})
linkHover.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'yellow'
})
linkHover.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = 'white'
})

//
//7-4. 
//Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.
//https://user-images.githubusercontent.com/9075641/228462160-e0584c12-eb4a-4973-b598-46e1cde9b941.png

document.addEventListener('DOMContentLoaded', function () {
    const choiceEl = document.querySelector('.select');
    const deleteButton = document.querySelector('.deleteButton');

    deleteButton.addEventListener('click', function () {
        const choiceIndex = choiceEl.selectedIndex;
        if (choiceIndex !== -1) {
            choiceEl.options[choiceIndex].remove();
        }
    });
});
//7-5. 
//Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
//"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
//Приклад роботи:
const LiveButt = document.querySelector('.myButton');
const messagePush = document.querySelector('.message');

LiveButt.addEventListener('click', () => {
    appendMessage('I was pressed!');
});

LiveButt.addEventListener('mouseenter', () => {
    appendMessage('Mouse on me!');
});

LiveButt.addEventListener('mouseleave', () => {
    appendMessage('Mouse is not on me!');
});
function appendMessage(message) {
    if (messagePush.textContent) {
        messagePush.textContent += '\n' + message;
    } else {
        messagePush.textContent = message;
    }
}
//Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
//https://user-images.githubusercontent.com/9075641/228463011-5302f615-86e6-41dc-b09a-62bed3564596.png

const widthValue = document.querySelector('.widthValue');
const heightValue = document.querySelector('.heightValue');

function windowSize() {
    widthValue.textContent = window.innerWidth;
    heightValue.textContent = window.innerHeight;
}
windowSize();

window.addEventListener('resize', windowSize);

//На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. 
//Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни. 
//Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.
///Код HTML-сторінки:
//<select name="country" id="country">
//        <option value="ger">Germany</option>
//        <option value="usa">USA</option>
//        <option value="ukr">Ukraine</option>
//</select>

//<select name="cities" id="cities"></select>
//<p></p>

//https://user-images.githubusercontent.com/9075641/228463508-6225f4ee-7ad2-4130-b7fc-d97a2d236693.png


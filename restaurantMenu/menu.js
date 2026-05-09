const breakfastMenu = [
    'Pancakes - $12',
    'Eggs Benedict - $22.99',
    'Oatmeal - $21.99',
    'Frittata - $15'
];

const mainCourseMenu = [
    'Steak - $35',
    'Pasta - $25',
    'Burger - $18',
    'Salmon - $40'
];

const dessertMenu = [
    'Cake - $10',
    'Ice Cream - $8',
    'Pudding - $7',
    'Fruit Salad - $9'
];

document.getElementById('breakfastTotalItems').innerHTML =
    `<h3>Total Items: ${breakfastMenu.length}</h3>`;

const breakfastMenuItemsHTML = breakfastMenu
    .map((item, index) =>
        `<p>Item ${index + 1}: ${item}</p>`)
    .join('');

document.getElementById('breakfastMenuItems').innerHTML =
    breakfastMenuItemsHTML;

document.getElementById('maincourseTotalItems').innerHTML =
    `<h3>Total Items: ${mainCourseMenu.length}</h3>`;

let mainCourseItem = '';

mainCourseMenu.forEach((item, index) => {

    mainCourseItem +=
        `<p>Item ${index + 1}: ${item}</p>`;

});

document.getElementById('maincourseMenuItems').innerHTML =
    mainCourseItem;

document.getElementById('dessertTotalItems').innerHTML =
    `<h3>Total Items: ${dessertMenu.length}</h3>`;

let dessertItem = '';

for (let i = 0; i < dessertMenu.length; i++) {

    dessertItem +=
        `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}

document.getElementById('dessertMenuItems').innerHTML =
    dessertItem;
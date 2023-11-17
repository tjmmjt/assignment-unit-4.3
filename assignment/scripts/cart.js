console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// --- VARIABLES ---
let basket = [];
const maxItems = 5;
console.log('Basket:');
console.log(basket);

// --- ADD ITEMS ---
function addItem(item){
    if(isFull() === false){
        basket.push(item);
        console.log('Item added to basket:', item);
        return true;
    } else {
        console.log('Too many items! Cannot add:', item);
        return false;
    }
}

addItem('Bread');
addItem('cheese');
addItem('meat');
addItem('mayo');
addItem('mustard');

console.log('Full Basket:');
console.log(basket);


// --- LIST ITEMS ---
function listItems(array){
    for(list of array){
        console.log(list);
    }
}
console.log('List Items:');
listItems(basket);

// --- EMPTY ---
function empty(){
    return basket.length=0;
}
empty();
console.log('--- Emptied Basket ---');
console.log(basket);

// --- STRETCH ---


// --- IS FULL ---
console.log('--- IS FULL ---');

function isFull(){
    if(basket.length >= maxItems){
        return true;
    } else{
        return false;
    }
}

console.log('Is the basket full?', isFull());

// --- REMOVED ITEM ---
console.log('--- REMOVED ITEM ---');
console.log('ADDING ITEMS FOR TESTING');
addItem('bourbon');  // tests
addItem('whiskey');
addItem('beer');
console.log(basket);

console.log('REMOVING ITEMS');

// function removeItem(item) {      // Original Code which worked but did not pass test, talked with Ryan and he showed me what he had to do to get it to pass the tests
//     let index = basket.indexOf(item);
//     let splicedItem = basket.splice(index, 1);
//     if(index >= 0){
//         console.log('You removed:', splicedItem[0]);
//         return splicedItem[0];
//     } else {
//         console.log(splicedItem);
//         return null;
//     }
// }

function removeItem(item) {
    let index = basket.indexOf(item);
    let splicedItem = null;
    if(index >= 0){
        splicedItem = basket.splice(index, 1);
        console.log('You removed:', splicedItem[0]);
        return splicedItem[0];
    } else {
        console.log(splicedItem);
        return splicedItem;
    }
}

removeItem('beer');
console.log(basket);    // test

console.log('EMPTYING TO TEST FOR NULL');
empty();
removeItem('bourbon'); 
console.log(basket);    //test



// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}


// store.js

const inputs = document.getElementsByClassName("input-quantity");
const prices = document.getElementsByClassName("unit-price");
// Get the "add" and "remove" elements by their class names
const addElements = document.getElementsByClassName("add");
const removeElements = document.getElementsByClassName("remove");
const itemPrice = 44;
const total1 = document.getElementsByClassName("total-1");
const total2 = document.getElementsByClassName("total-2");
const delivery = 5;
const itemNumber = document.getElementsByClassName("items-number");
const itemNumber2 = document.getElementsByClassName("items-number-2");
let number = 0;
const discountInput = document.querySelector('.given-code');
const x = document.getElementsByClassName("x-remove");
let getDiscount = false;



// Function to increment the quantity when the "+" link is clicked
function incrementQuantity(index) {
    number += 1;
    console.log(number);
    inputs[index].value = Number(inputs[index].value) + 1;
    prices[index].textContent = (Number(prices[index].textContent) + itemPrice).toFixed(2);       
    if(getDiscount) {
        total1[0].textContent = (Math.floor(Number(total1[0].textContent) + itemPrice*0.9)).toFixed(2);
    } else {
        total1[0].textContent = (Number(total1[0].textContent) + itemPrice).toFixed(2);
    }   total2[0].textContent = (Number(total1[0].textContent) + delivery).toFixed(2)
    if(discountInput === 'ARK-X') {
        total2[0].textContent  = Math.floor(Number(total2[0].textContent)*0.9) ;
    }
    discountInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && total1[0].textContent > 0) {
          if (discountInput.value === 'ARK-X' && getDiscount === false) {
              total1[0].textContent = (Math.floor(Number(total1[0].textContent)*0.9)).toFixed(2);
              total2[0].textContent = (Number(total1[0].textContent) + delivery).toFixed(2);
              getDiscount = true;              
          }
        }
      });
    itemNumber[0].textContent = `${number} items`;
    itemNumber2[0].textContent = `Items ${number}`;
}



// Attach event listeners to the "add" elements

Array.from(addElements).forEach((addElement, index) => {
    addElement.addEventListener("click", () => {
        incrementQuantity(index);
    });
});


// Function to decrement the quantity when the "-" link is clicked
function decrementQuantity(index) {
    const input = Number(inputs[index].value);  
    if (input > 0) {
        inputs[index].value = Number(inputs[index].value) - 1;
        prices[index].textContent = (Number(prices[index].textContent) - itemPrice).toFixed(2);
        if(getDiscount) {
            total1[0].textContent = (Math.floor(Number(total1[0].textContent) - itemPrice*0.9)).toFixed(2);
        } else {
            total1[0].textContent = (Number(total1[0].textContent) - itemPrice).toFixed(2);
        }      
        if(input === 1) {
            total2[0].textContent = (Number(total1[0].textContent)).toFixed(2);
        } else {
            total2[0].textContent = (Number(total1[0].textContent) + delivery).toFixed(2);
        }
        number -= 1;


        discountInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' && total1[0].textContent > 0) {
                if (discountInput.value === 'ARK-X' && getDiscount === false) {
                  total1[0].textContent = (Math.floor(Number(total1[0].textContent)*0.9)).toFixed(2);
                  console.log(total1[0].textContent);
                  total2[0].textContent = (Number(total1[0].textContent) + delivery).toFixed(2);
                  console.log(total2[0].textContent);
                  getDiscount = true;              
             
              }
            }
          });
        
        itemNumber[0].textContent = `${number} items`;
        itemNumber2[0].textContent = `Items ${number}`;
    }

}

// Attach event listeners to the "remove" elements
Array.from(removeElements).forEach((removeElement, index) => {
    removeElement.addEventListener("click", () => {
        decrementQuantity(index)
    } );
})

//remove all the items
function initialiaze(index) {
    number = number - inputs[index].value;
    itemNumber[0].textContent = `${number} items`;
    itemNumber2[0].textContent = `Items ${number}`;
    inputs[index].value = 0;
    total1[0].textContent = Number(total1[0].textContent) - Number(prices[index].textContent);
    total2[0].textContent = (Number(total1[0].textContent) + delivery).toFixed(2);


    prices[index].textContent = 0;

    console.log(`${number - inputs[index].value} items`);

    // itemNumber2[0].textContent = `Items ${number}`;

    if(total1[0].textContent === '0') {
        total2[0].textContent = total1[0].textContent;
    } else {
        total2[0].textContent = Number(total2[0].textContent) - Number(prices[index].textContent);
    }
}

Array.from(x).forEach((element,index) => {
    element.addEventListener("click", () => {
        initialiaze(index);
    })
})
  



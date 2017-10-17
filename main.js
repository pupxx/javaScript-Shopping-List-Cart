let formContents = document.querySelector('.listInput');

formContents.addEventListener("submit", (e)=>{
    e.preventDefault();
    let inputText = document.querySelector('#item-input').value;

   addAndRemove(inputText);
   document.querySelector('.listInput').reset();   
});


function addAndRemove(input, count) {
    var ul = document.querySelector('.shopping-list-items');
    var li = document.createElement('li');
    var button = document.createElement('button');
    button.innerHTML = 'Add to Cart';
    button.setAttribute('class', 'add-to-cart');

        li.appendChild(document.createTextNode(input));
        li.appendChild(button);
        ul.appendChild(li);   
    
    addToCart(button, ul, li);   
}


function addToCart(button, ul, li){
    button.addEventListener('click', function (e) {
        if (button.innerHTML === 'Add to Cart') {
            let listItem = this.parentNode.childNodes[0];
            let cartUl = document.querySelector('.shopping-cart-list');
            let cartLi = document.createElement('li');
            cartLi.appendChild(document.createTextNode(listItem));
            cartUl.appendChild(li);
            button.innerHTML = 'return to list';
        } else {
            ul.appendChild(li);
            this.innerHTML = 'Add to Cart';
        }
    });
}
let cartItemTextInputEl = document.getElementById("cartItemTextInput");
let cartItemContainerEl = document.getElementById("cartItemsContainer");

function onAddCartItem() {

    let cartItemText = cartItemTextInputEl.value;

    let cartItemEl = document.createElement("li");
    cartItemEl.textContent = cartItemText;

    cartItemTextInputEl.value = "";
    cartItemContainerEl.appendChild(cartItemEl);
}
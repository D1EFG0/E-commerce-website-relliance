document.addEventListener('DOMContentLoaded', function() {
    const shoppingItemsContainer = document.querySelector('.shopping-items');

    // Load shopping bag items from localStorage
    function loadShoppingBagItems() {
        const savedItems = JSON.parse(localStorage.getItem('shoppingBagItems'));
        if (savedItems && savedItems.length > 0) {
            savedItems.forEach(item => {
                const shoppingItem = createShoppingItem(item);
                shoppingItemsContainer.appendChild(shoppingItem);
            });
        }
    }

    // Function to create a shopping item element
    function createShoppingItem(item) {
        const shoppingItem = document.createElement('div');
        shoppingItem.classList.add('shopping-item');

        // Create image element
        const itemImage = document.createElement('img');
        itemImage.classList.add('item-image');

        // Set image source based on item name
        switch(item.itemName) {
            case 'Item1': itemImage.src = 'women clothing.jpg'; break;
            case 'Item2': itemImage.src = 'goose.jpg'; break;
            case 'Item3': itemImage.src = 'baseball.jpg'; break;
            case 'Item4': itemImage.src = 'bird4.jpg'; break;
            case 'Item5': itemImage.src = 'water5.jpg'; break;
            case 'Item6': itemImage.src = 'eye.jpg'; break;
            case 'Item7': itemImage.src = 'bocho.jpg'; break;
            case 'Item8': itemImage.src = 'blueberry.jpg'; break;
            case 'Item9': itemImage.src = 'mineral.jpg'; break;
            case 'Item10': itemImage.src = 'orange.jpg'; break;
            case 'Item11': itemImage.src = 'leaves.jpg'; break;
            case 'Item12': itemImage.src = 'camaleon.png'; break;
            case 'Item13': itemImage.src = 'flowers.jpg'; break;
            case 'Item14': itemImage.src = 'computer.jpg'; break;
            case 'Item15': itemImage.src = 'aguacate.jpg'; break;
            case 'Item16': itemImage.src = 'owl.jpg'; break;
            case 'Item17': itemImage.src = 'dog.jpg'; break;
            case 'Item18': itemImage.src = 'canastas.jpg'; break;
            case 'Item19': itemImage.src = 'coco.jpg'; break;
            case 'Item20': itemImage.src = 'agave.jpg'; break;
            default: itemImage.src = ''; break;
        }
        
        itemImage.style.width = '200px'; // Set image width (adjust as needed)
        itemImage.style.height = '200px'; // Maintain aspect ratio
        itemImage.style.float = 'left'; // Float image to the left
        shoppingItem.appendChild(itemImage); // Append image to shopping item container

        // Create item details container
        const itemDetails = document.createElement('div');
        
        // Create item name element
        const itemName = document.createElement('p');
        itemName.textContent = item.itemName;
        itemDetails.appendChild(itemName);

        // Create item price element
        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.itemPrice;
        itemDetails.appendChild(itemPrice);

        // Create item size element
        const itemSize = document.createElement('p');
        itemSize.textContent = `Size: ${item.itemSize}`;
        itemDetails.appendChild(itemSize);

        // Create quantity counter element
        const itemQuantity = document.createElement('p');
        itemQuantity.textContent = 'Quantity: 1'; // Assuming quantity-counter is a property of item
        itemDetails.appendChild(itemQuantity);

        shoppingItem.appendChild(itemDetails);
        return shoppingItem;
    }

    loadShoppingBagItems();
});

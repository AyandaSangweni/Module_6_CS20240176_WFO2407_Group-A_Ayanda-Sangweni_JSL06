// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu'); 
    for (const [category, items] of Object.entries(menu)) {
        const categoryDiv = document.createElement('div'); 
        const categoryTitle = document.createElement('h3'); 
        categoryTitle.textContent = category; 

        categoryDiv.appendChild(categoryTitle); 
        menuContainer.appendChild(categoryDiv); 

        const itemList = document.createElement('ul');
       
        items.forEach(item => {
            const itemLi = document.createElement('li'); 
            itemLi.textContent = item;

            itemLi.addEventListener('click', () => addToOrder(item)); 
            itemList.appendChild(itemLi);
        });

        categoryDiv.appendChild(itemList); 
    }
}

// Callback function for adding an item to the order
function addToOrder(item) {
    const orderItemsList = document.getElementById('order-items'); 
    const orderTotalElement = document.getElementById('order-total'); 

    const orderItemLi = document.createElement('li'); 
    orderItemLi.textContent = item; 
    orderItemsList.appendChild(orderItemLi);

    let currentTotal = parseFloat(orderTotalElement.textContent.replace('R', '')) || 0;
    const itemPrice = 25.00;
    const newTotal = currentTotal + itemPrice; 
    orderTotalElement.textContent = `R${newTotal.toFixed(2)}`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);

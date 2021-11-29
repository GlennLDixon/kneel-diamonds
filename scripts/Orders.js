import { getOrders } from "./database.js"

const buildOrderListItem = (order) => {
    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()
    // let html = "<ul>"

    // Getting the <ul> html tag by the id in the KneelDiamonds.js file
    let orderList = document.getElementById("order-list");
    
    // Settings a list of orders to a variable
    const listItems = orders.map(buildOrderListItem)
    
    // Inserting the list of orders into the <ul> tag with the id of "order-list".
    orderList.innerHTML = listItems.join(""); // .join("") is getting rid of the comma that is added from the array collection ex: [order1, order2,...]
    // html += listItems.join("")
    // html += "</ul>"

    return orderList;
}


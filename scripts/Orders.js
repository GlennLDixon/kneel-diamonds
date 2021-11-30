import { getOrders } from "./database.js"
import { getMetals } from "./database.js"
import { getSizes } from "./database.js"
import { getStyles } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()

const buildOrderListItem = (order) => {

// Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    const totalCost = foundMetal.price + foundSize.price + foundStyle.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()
    let html = "<ul>"

    // Getting the <ul> html tag by the id in the KneelDiamonds.js file
    //let orderList = document.getElementById("order-list");
    
    // Settings a list of orders to a variable
    const listItems = orders.map(buildOrderListItem)
    
    // Inserting the list of orders into the <ul> tag with the id of "order-list".
    // orderList.innerHTML = listItems.join(""); // .join("") is getting rid of the comma that is added from the array collection ex: [order1, order2,...]
    html += listItems.join("")
    html += "</ul>"

    return html;
}


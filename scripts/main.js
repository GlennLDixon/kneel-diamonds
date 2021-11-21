import { KneelDiamonds } from "./KneelDiamonds.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { Metals } from "./Metals.js"
import { JewelryStyles } from "./JewelryStyles.js"

const mainContainer = document.querySelector("#container")

// const renderAllHTML = () => {
//     mainContainer.innerHTML = KneelDiamonds()
// }

// renderAllHTML()

const applicationHTML = `
<h1>Kneel Diamonds</h1>

<article class="choices">
        <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
        </section>
        <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
        </section>
        <section class="choices__styles options">
        <h2>Styles</h2>
                ${JewelryStyles()}
        </section>
</article>

<article>
    <button id="orderButton">Create Custom Order</button>
</article>

<article class="customOrders">
    <h2>Custom Jewelry Orders</h2>
</article>
`

mainContainer.innerHTML = applicationHTML


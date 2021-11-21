import { KneelDiamonds } from "./KneelDiamonds.js"
import { DiamondSizes } from "./DiamondSizes.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Kneel Diamonds</h1>

<article class="choices">
        <section class="choices__metals options">
                <h2>Metals</h2>
                ${getMetals}
        </section>
        <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${getSizes}
        </section>
        <section class="choices__styles options">
        <h2>Styles</h2>

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


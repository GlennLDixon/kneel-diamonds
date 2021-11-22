import { KneelDiamonds } from "./KneelDiamonds.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { Metals } from "./Metals.js"
import { JewelryStyles } from "./JewelryStyles.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()


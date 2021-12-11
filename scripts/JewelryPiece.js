import { getJewelryPiece } from "./database.js";

const jewelry = getJewelryPiece()

document.addEventListener('change', event => {
    if(event.target.name === "piece") {
        setPiece(parseInt(event.target.value))
    }
})

export const JewelryPiece = () => {

}
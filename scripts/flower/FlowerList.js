import { Flower } from "./Flower.js";
import { useFlowers } from "./flowerProvider.js";

const contentTarget = document.querySelector("#flowersList");
const headerContentTarget = document.querySelector("#flowersHeader");

const render = (flower) => {
    contentTarget.innerHTML += Flower(flower)
}

export const FlowerList = () => {
    const flowerArray = useFlowers();
    headerContentTarget.innerHTML = `<h2 class="bold">Available Flowers</h2>`
    flowerArray.map(flower => render(flower))
}
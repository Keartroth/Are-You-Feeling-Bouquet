import { useRetailers } from "./retailerProvider.js";
import { Retailer } from "./Retailer.js";

const contentTarget = document.querySelector("#retailersList");
const headerContentTarget = document.querySelector("#retailersHeader");

const render = (retailer) => {
    contentTarget.innerHTML += Retailer(retailer)
}

export const RetailerList = () => {
    const retailerArray = useRetailers();
    headerContentTarget.innerHTML = `<h2 class="bold">List of Local Flower Retailers</h2>`
    retailerArray.map(retailer => render(retailer))
}
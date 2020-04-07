import { useRetailers } from "./retailerProvider.js";
import { Retailer } from "./Retailer.js";
import { useDistributors } from "../distributors/distributorsProvider.js";
import { useFlowers } from "../flower/flowerProvider.js";

const contentTarget = document.querySelector("#retailersList");
const headerContentTarget = document.querySelector("#retailersHeader");

const render = (retailer, distributor) => {
    contentTarget.innerHTML += Retailer(retailer, distributor)
}

export const RetailerList = () => {
    const arrayOfRetailerObjects = useRetailers();
    const arrayOfDistributorObjects = useDistributors();
    const arrayOfFlowers = useFlowers()
    headerContentTarget.innerHTML = `<h2 class="bold">Local Flower Retailers</h2>`
    arrayOfRetailerObjects.map(retailerObject => {
        const foundDistributorObject = arrayOfDistributorObjects.find(distro => distro.id === retailerObject.distributorsID)
        const foundFlowers = arrayOfDistributorObjects.filter(distro => {
            // THIS IS WHERE I AM
        })
        render(retailerObject, foundDistributorObject)})
}
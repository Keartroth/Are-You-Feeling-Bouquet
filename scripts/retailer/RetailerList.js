import { useRetailers } from "./retailerProvider.js";
import { Retailer } from "./Retailer.js";
import { useDistributors } from "../distributors/distributorsProvider.js";

const contentTarget = document.querySelector("#retailersList");
const headerContentTarget = document.querySelector("#retailersHeader");

const render = (retailer, distributor) => {
    contentTarget.innerHTML += Retailer(retailer, distributor)
}

export const RetailerList = () => {
    const arrayOfRetailerObjects = useRetailers();
    const arrayOfDistributorObjects = useDistributors();
    headerContentTarget.innerHTML = `<h2 class="bold">List of Local Flower Retailers</h2>`
    arrayOfRetailerObjects.map(retailerObject => {
        const foundDistributorObject = arrayOfDistributorObjects.find(distro => distro.id === retailerObject.distributorsID)
        render(retailerObject, foundDistributorObject)})
}
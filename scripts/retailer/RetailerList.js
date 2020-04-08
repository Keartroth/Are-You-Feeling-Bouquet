import { useRetailers } from "./retailerProvider.js";
import { Retailer } from "./Retailer.js";
import { useDistributors } from "../distributors/distributorsProvider.js";
import { useFlowers } from "../flower/flowerProvider.js";
import { useNurseries } from "../nurseries/nurseriesProvider.js";

const contentTarget = document.querySelector("#retailersList");
const headerContentTarget = document.querySelector("#retailersHeader");

const render = (retailer, distributor, nurseries, flowers) => {
    contentTarget.innerHTML += Retailer(retailer, distributor, nurseries, flowers)
}

export const RetailerList = () => {
    const arrayOfRetailerObjects = useRetailers();
    const arrayOfDistributorObjects = useDistributors();
    const arrayOfFlowerObjects = useFlowers();
    const arrayOfNurseryObjects = useNurseries();
    
    headerContentTarget.innerHTML = `<h2 class="bold">Local Flower Retailers</h2>`
    arrayOfRetailerObjects.map(retailerObject => {
        let foundFlowers = [];
        const foundDistributorObject = arrayOfDistributorObjects.find(distro => distro.id === retailerObject.distributorsID)
        let foundNurseries = foundDistributorObject.nurseryIDs.map(nurseryID => {
            return arrayOfNurseryObjects.find(nursery => nursery.id === nurseryID)
        })
        foundNurseries.map(nursery => {
           nursery.products.map(product => {
            let flowerObject = arrayOfFlowerObjects.find(flower => flower.id === product)
                foundFlowers.push(flowerObject)
            })
        })
        render(retailerObject, foundDistributorObject, foundNurseries, foundFlowers)
    })
}
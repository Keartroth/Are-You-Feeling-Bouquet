
import { Retailer } from "./Retailer.js";
import { useNurseryDistributor } from "../providers/nurseryDistributorProvider.js";
import { useNurseryFlower } from "../providers/nurseryFlowerProvider.js";
import { useRetailers } from "./retailerProvider.js";
import { useDistributors } from "../providers/distributorsProvider.js";
import { useFlowers } from "../flower/flowerProvider.js";
import { useNurseries } from "../providers/nurseriesProvider.js";

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
    const arrayOfNurseryDistributorObjects = useNurseryDistributor();
    const arrayOfNurserFlowerObjects = useNurseryFlower();
    
    headerContentTarget.innerHTML = `<h2 class="bold">Local Flower Retailers</h2>`
    arrayOfRetailerObjects.map(retailerObject => {
        let foundNurseryFlowers = []
        const foundDistributorObject = arrayOfDistributorObjects.find(distro => distro.id === retailerObject.distributorsID)
        const foundNurseryDistributors = arrayOfNurseryDistributorObjects.filter(nurseryDistro => nurseryDistro.distributorId === foundDistributorObject.id)
        const foundNurseries = foundNurseryDistributors.map(nurseryDistro => {
            return arrayOfNurseryObjects.find(nursery => nursery.id === nurseryDistro.nurseryId)
        })
        foundNurseries.forEach(foundNursery => {
            arrayOfNurserFlowerObjects.filter(nurseryFlower => nurseryFlower.nurseryId === foundNursery.id).forEach(object => {
                foundNurseryFlowers.push(object)
            })
        })
        let foundFlowers = foundNurseryFlowers.map(nurseryFlower => {
            return arrayOfFlowerObjects.find(flower => nurseryFlower.flowerId === flower.id)
        })
        render(retailerObject, foundDistributorObject, foundNurseries, foundFlowers)
        })
}
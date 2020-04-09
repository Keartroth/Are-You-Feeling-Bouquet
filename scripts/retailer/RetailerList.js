
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
    contentTarget.innerHTML += Retailer(retailer, distributor, nurseries, flowers);
};

export const RetailerList = () => {
    const arrayOfRetailerObjects = useRetailers();
    const arrayOfDistributorObjects = useDistributors();
    const arrayOfFlowerObjects = useFlowers();
    const arrayOfNurseryObjects = useNurseries();
    const arrayOfNurseryDistributorObjects = useNurseryDistributor();
    const arrayOfNurserFlowerObjects = useNurseryFlower();
    
    headerContentTarget.innerHTML = `<h2 class="bold">Local Flower Retailers</h2>`;
    arrayOfRetailerObjects.map(retailerObject => {
        const foundDistributorObject = arrayOfDistributorObjects.find(distro => distro.id === retailerObject.distributorsID);
        const foundNurseryDistributors = arrayOfNurseryDistributorObjects.filter(nurseryDistro => nurseryDistro.distributorId === foundDistributorObject.id);
        const foundNurseries = foundNurseryDistributors.map(nurseryDistro => {
            return arrayOfNurseryObjects.find(nursery => nursery.id === nurseryDistro.nurseryId)
        });
        retailerObject.flowers = [];
        foundNurseries.map(foundNursery => {
            arrayOfNurserFlowerObjects.filter(nurseryFlower => nurseryFlower.nurseryId === foundNursery.id).map(nurseryFlower => {
                let flowerObject = arrayOfFlowerObjects.find(flower => {
                    return nurseryFlower.flowerId === flower.id
                });
                retailerObject.flowers.push(flowerObject);
            });
        });
        render(retailerObject, foundDistributorObject, foundNurseries, retailerObject.flowers);
        });
};
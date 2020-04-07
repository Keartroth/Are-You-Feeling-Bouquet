import { getFlowers, useFlowers } from "./flower/flowerProvider.js";
import { FlowerList } from "./flower/FlowerList.js";
import { getRetailers } from "./retailer/retailerProvider.js";
import { RetailerList } from "./retailer/RetailerList.js";
import { getDistributors } from "./distributors/distributorsProvider.js";

getFlowers()
    .then(useFlowers)
    .then(FlowerList)

getRetailers()
    .then(getDistributors)
    .then(RetailerList)
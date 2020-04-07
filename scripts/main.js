import { getFlowers, useFlowers } from "./flower/flowerProvider.js";
import { FlowerList } from "./flower/FlowerList.js";
import { getRetailers, useRetailers } from "./retailer/retailerProvider.js";
import { RetailerList } from "./retailer/RetailerList.js";

getFlowers()
    .then(useFlowers)
    .then(FlowerList)

getRetailers()
    .then(useRetailers)
    .then(RetailerList)
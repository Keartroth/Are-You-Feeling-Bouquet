import { getFlowers, useFlowers } from "./flower/flowerProvider.js";
import { FlowerList } from "./flower/FlowerList.js";
import { getRetailers } from "./retailer/retailerProvider.js";
import { RetailerList } from "./retailer/RetailerList.js";
import { getDistributors } from "./providers/distributorsProvider.js";
import { getNurseries } from "./providers/nurseriesProvider.js";
import { getNurseryDistributor } from "./providers/nurseryDistributorProvider.js";
import { getNurseryFlower } from "./providers/nurseryFlowerProvider.js";

getFlowers()
    .then(useFlowers)
    .then(FlowerList)

getRetailers()
    .then(getDistributors)
    .then(getNurseries)
    .then(getNurseryDistributor)
    .then(getNurseryFlower)
    .then(RetailerList)
export const Retailer = (retailer, distributor, nurseries, flowers) => {
    return `
        <section class="retailer">
            <header>
                <h2>${retailer.name}</h2>
            </header>
            <div>
                <p><span class="bold">Address: </span>
                <br>
                ${retailer.address}
                <br>
                ${retailer.city}, ${retailer.state}
                </p>
                <p>
                <span class="bold">Distributor: </span>
                ${distributor.name}
                </p>
                <div>
                    <p class="bold">Nurseries: </p>
                    <ul>
                        ${
                            nurseries.map(nursery => {
                               return `<li>${nursery.name}</li>`
                            }).join("")
                        }
                    </ul>
                    <p class="bold">Available Flowers: </p>
                    <ul>
                    ${
                        flowers.map(flower => {
                            return `<li><span class="bold">Type: </span>${flower.commonName}  |  <span class="bold">Color: </span></span>${flower.color}</li>`
                        }).join("")
                    }
                    </ul>
                </div>
            </div>
        </section>`
}
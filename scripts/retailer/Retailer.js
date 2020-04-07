export const Retailer = (retailer, distributor) => {
    return `
        <section class="retailer">
            <header>
                <h2>${retailer.name}</h2>
            </header>
            <div>
                <p>Address: ${retailer.address}
                <br>
                ${retailer.city}, ${retailer.state}
                <br><br>
                Distributor: ${distributor.name}
                </p>
            </div>
        </section>`
}
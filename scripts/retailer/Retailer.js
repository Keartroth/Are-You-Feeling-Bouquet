export const Retailer = (retailer) => {
    return `
        <section class="retailer">
            <header>
                <h2>${retailer.name}</h2>
            </header>
            <div>
                <p>Address: ${retailer.address}<br>
                ${retailer.city}, ${retailer.state}
                </p>
            </div>
        </section>`
}
export const Flower = (flower) => {
    return `
        <section class="flower">
            <header>
                <h2>${flower.commonName}</h2>
            </header>
            <div>
                <p>Color: ${flower.color}</p>
            </div>
        </section>`
}
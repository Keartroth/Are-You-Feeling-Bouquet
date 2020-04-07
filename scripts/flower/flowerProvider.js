let flowers = []

export const useFlowers = () => flowers.slice()

export const getFlowers = () => fetch("http://localhost:8088/flowers")
    .then(response => response.json())
    .then(data => flowers = data)
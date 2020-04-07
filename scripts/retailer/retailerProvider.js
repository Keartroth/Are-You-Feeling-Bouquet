let retailers = []

export const useRetailers = () => retailers.slice()

export const getRetailers = () => fetch("http://localhost:8088/retailers")
    .then(response => response.json())
    .then(data => retailers = data)
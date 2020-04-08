let nurseryDistributor = []

export const useNurseryDistributor = () => nurseryDistributor.slice()

export const getNurseryDistributor = () => fetch("http://localhost:8088/nurseryDistributor")
    .then(response => response.json())
    .then(data => nurseryDistributor = data)
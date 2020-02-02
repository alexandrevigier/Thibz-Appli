export function getStationVelib() {
    const url = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel'
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
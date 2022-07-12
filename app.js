const main = document.getElementById("main");
const url = "https://rickandmortyapi.com/api/character";

fetch(url)
.then((resp) => resp.json())
.then((data) => printData(data.results))
.catch((error) => console.log(error))

const printData = (arr) => { 
    console.log(arr)
    let str = '';
    for(let i = 0; i < arr.length; i++){
        const image = arr[i].image;
        const name = arr[i].name;
        const status = arr[i].status;
        const species = arr[i].species;
        const gender = arr[i].gender;
        str = str + ` 
        <div class="tarjeta">
            <figure>
                <img src="${image}" alt="${name}">
            </figure>
            <div class="personaje">
                <p>
                    ${name}
                </p>
                <p>
                    ${gender}
                </p>
                <p>
                    ${species}
                </p>
                <p>
                    ${status}
                </p>
            </div>
        </div>

        `

    }
    main.innerHTML = str;
}
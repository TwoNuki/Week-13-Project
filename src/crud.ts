import {url} from './main.ts';
import {displayCards} from './displaycards.ts';

export async function getData() {

    let res = await fetch(`${url}/games`)
    let data = await res.json();
    console.log(typeof data);
    displayCards(data);

    console.log(data);
}

//commented out "let data" which was a useless declaration, also gave id a type
export async function deleteGame(id: string) {
    let res = await fetch(`${url}/games/${id}`, {
        method: 'DELETE'
    });
    //let data = 
    await res.json();
    getData();
}

//async function to pull the data from the form on the page and add it to the API using the POST method and displaying it on the page as a card, followed by clearing the form

//added as HTMLFormELement to addGameForm variable
export async function addGame() {

    let addGameForm = document.getElementById('addGameForm') as HTMLFormElement;
    const addedGame = new FormData(addGameForm);
    let res = await fetch(`${url}/games`, {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(addedGame)),
        headers: {
            'content-type': 'application/json'
        }
    });
    const content = await res.json();
    console.log(content);
    getData();
    clearForm();
    console.log(addedGame.get('gameTitle'));
};

const clearForm = () => {
    (document.getElementById('gameRating') as HTMLFormElement).value = '';
    (document.getElementById('gameTitle') as HTMLFormElement).value = '';
    (document.getElementById('gameArt') as HTMLFormElement).value = '';
};
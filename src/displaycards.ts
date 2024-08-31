import {container} from './main.ts';
import {deleteGame} from './crud.ts';

//adjusted to eliminate ts error and specified games as an object with type "any"
export function displayCards(games: Array<object>) {
    container!.innerHTML = "";
    let game: any //found that any should rarely be used, but function would not work otherwise with other type attempts. tried to make custom one, but kept getting iterator errors.
    for (game of games){

        let column = document.createElement('div')
        column.setAttribute('class', 'col-md-4 mb-4')

        let card = document.createElement('div')
        card.setAttribute('class', 'card');

        let title = document.createElement('h2')
        title.setAttribute('class', 'text-center')
        title.innerText = game.title;

        let image = document.createElement('img')
        image.src = game.boxArt;
        image.setAttribute('class', 'card-img-top');

        let rating = document.createElement('h5')
        rating.setAttribute('class', 'text-center')
        rating.innerText = `My Rating: ${game.rating / 10}` //game.rating / 10;
        let deleteButton = document.createElement('button')


        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('class', 'btn btn-info');
        deleteButton.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(game.id);
            deleteGame(game.id)
        });
        
        //added ! to indicate container is not null
        column.appendChild(card)
        card.append(title, image, rating, deleteButton);
        //document.body.append(card);
        container!.appendChild(column)
        document.getElementById('body')
    }
}
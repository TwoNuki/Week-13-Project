import {getData, addGame} from './crud.ts';
import './displaycards.ts';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

export let url = 'https://66c550d4134eb8f43493fc51.mockapi.io/'

//attempts to make a gameObject type to make game have a type other than "any"
//type gameObject = 'id'| 'rating' | 'boxArt' | 'title';

/*interface gameObject extends Array<any> {
  id:string,
  rating:string,
  boxArt:string,
  title:string
  }*/
 
 
 //variable to set the container element
 
 export const container = document.getElementById('dynamic-row');
 
 //calls the function
 getData();

 document.getElementById('addGameButton')!.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('pudding');
  addGame()
});

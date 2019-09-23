import './style.css';
import {Card,DisplayCard,mainBody} from './card';
import {MainUI} from './ui';


// navbar elements

  // search button animation start
 
// main-body elements

  let count = 0; // Counter that increments every time a card is created

  // loading multiple cards at the beginning
  const loadCards = (number) =>{
      
      for (let i =0 ; i<number ; i++) {
        count ++;
        // a random "spacePts" value for each card inst
        const randSpacePts = Math.floor(Math.random() * 99);
        // creates and loads a new card instance with a unique id
        let card = new Card (count,randSpacePts);
        card.load();
      };    
  }

  loadCards(50);  // loading multiple cards at the beginning
  
  const mainUi = new MainUI(count);  // (check ui.js)
  
  mainUi.cardsPerLine();  // calculates the number of cards per line + adds a div after every line the first time it's fired  
  
  // fires the previous function on window resize
    addEventListener("resize", ()=>{
      console.log("window resized");
      mainUi.cardsPerLine();
    });
  
  // Displays the content of a card on the displaycardie div 
  let divElem = HTMLPreElement;

  document.querySelectorAll('.clickCard')
    .forEach(card =>{
      
      card.addEventListener('click', e => {  
        e.preventDefault();

        // removes the previous display-card  
          if (divElem.id !== HTMLPreElement) divElem.innerHTML = ''; 

        divElem = card;
        
        do {
          if (divElem == null) break;
          divElem = divElem.nextElementSibling;
        } while (divElem.classList.value != 'card-display')
        
        // logs the next div element
        // console.log('element found', divElem); 
        
        const displayCard = new DisplayCard(divElem,card);
        displayCard.load();
        divElem.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
      });
    });

  // erase the diplaycard content when clicking outside the frame  

  mainBody.addEventListener('click',e=>{
    // console.log(e.target.classList.contains('card-display'))
    if(e.target.classList.contains('card-display')) {
      divElem.innerHTML = '';
    }
});
import './style.css';
import {Card,DisplayCard} from './card';
import {MainUI} from './ui';


// navbar elements

  // search button animation start
  document.addEventListener("touchstart", function(){}, true);

// main-body elements

  let count = 0; // Counter that increments every time a card is created

  // loading multiple cards at the beginning
  const loadCards = (number) =>{
      
      for (let i =0 ; i<number ; i++) {
        count ++;
        
        // creates and loads a new card instance with a unique id
        let card = new Card (count);
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
  
  // Displays the content of a card on the next div node
  let divElem = HTMLPreElement;

  document.querySelectorAll('.clickCard')
    .forEach(card =>{
      
       
      
      card.addEventListener('click', e => {  
        e.preventDefault();
        if (divElem.id !== HTMLPreElement) divElem.innerHTML = ''; // removes the previous display-card  
        divElem = card;
        
        do {
          divElem = divElem.nextElementSibling;
        } while (divElem.classList.value != 'card-display')
        
        // console.log('element found', divElem); // logs the next div element
        
        const displayCard = new DisplayCard(divElem,card.id);
        displayCard.load();
        
      });
    });
  

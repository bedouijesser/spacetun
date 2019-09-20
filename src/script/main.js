import './style.css';
import {Card} from './card';
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
  const mainui = new MainUI(count);  // (check ui.js)

  mainui.cardsPerLine();  // creates an empty div after every card break (check ui.js)



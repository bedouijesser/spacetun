// Main site file
// imports all other .js/.css files for bundling
// Determine when a card element breaks to the next line

import './style.css';
import {mainBody,Card,DisplayCard,Login} from './render';
import {HomeUI} from './ui';


// navbar elements

  // search button animation start
  const searchIcon = document.querySelector("form > a");
  const searchInputField = document.querySelector("form > input")
  
  searchIcon.addEventListener('click', e =>{
    e.preventDefault;
    searchInputField.focus();
  })

// main-body elements

  // main menu / meme cards 
    let count = 0; // Counter that increments every time a card is created

    // loading multiple cards at the beginning
    const loadCards = (number) =>
    {    
        for (let i =0 ; i<number ; i++) {
          count ++;
          // a random "spacePts" value for each card inst
          const randSpacePts = Math.floor(Math.random() * 99);
          // creates and loads a new card instance with a unique id
          let card = new Card (count,randSpacePts);
          card.load();
        };    
    }

    loadCards(50);  
    
    const HomeUi = new HomeUI(count);  // (check ui.js)
    
    HomeUi.cardsPerLine();  // calculates the number of cards per line + adds a div after every line the first time it's fired  
    
    // fires the previous function on window resize
      addEventListener("resize", ()=>
      {
        console.log("window resized");
        HomeUi.cardsPerLine();
      });
    
    // Displays the content of a card on the displaycardie div 
    let divElem = HTMLUnknownElement;

    document.querySelectorAll('.clickCard')
      .forEach(card => 
        {
        
        card.addEventListener('click', e => 
        {  
          e.preventDefault();

          // removes the previous display-card  
            if (divElem.id !== HTMLUnknownElement) divElem.innerHTML = ''; 

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

    mainBody.addEventListener('click', e => 
    {
      // console.log(e.target.classList.contains('card-display'))
      if(e.target.classList.contains('card-display')) {
        divElem.innerHTML = '';
      }
    });
  
  
  // Login / Register
    // Creates a new login instence; check render.js
    const login = new Login;

    const navLogin = document.querySelector('.login');
      
      navLogin.addEventListener('click', e =>
      {
        e.preventDefault();
        login.load();
    });
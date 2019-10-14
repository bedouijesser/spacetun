// note to self: the webpack server script compiles the code but "doesn't" save it to the bundled js file.. huh.. 
// Main site file
// imports all other .js/.css files for bundling
// Determine when a card element breaks to the next line

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {mainBody,MainBody,Card,DisplayCard,ChangePage} from './render';
import {HomeUI} from './ui';


// search button animation start
const searchIcon = document.querySelector(".navbar-right > li:nth-child(1) > div > form > i");
const searchInputField = document.querySelector(".navbar-right > li:nth-child(1) > div > form > input")

searchIcon.addEventListener('hover', e =>{
  e.preventDefault;
  console.log(e.target.gethtml);
  searchInputField.focus();
})

// main-body elements
  
  // meme cards 
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
  // T loades 50 blank cards at the beginning
  loadCards(99);  
  
  const cardClickEvent =() =>{
  const HomeUi = new HomeUI(count);  // (check ui.js)
  
  // calculates the number of cards per line + adds a div after every line the first time it's fired 
  HomeUi.cardsPerLine();   
  
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
  };
  
  // fires the previous function the first time around
  cardClickEvent();
  
  
  // Login / Register
    // login instence for loading login forms; check render.js
    const chPage = new ChangePage;

    // a main body instence for clearing the body elements; check render.js
    const mainbd = new MainBody;

    // Selectors and listeners for the nav-items
    
    const navBrand = document.querySelector('.navbar-brand');
    const navHomeBtn = document.querySelector('.home-lnk');
    const navNewBtn = document.querySelector('.new-lnk');
    const navLoginBtn = document.querySelector('.login-lnk');

      navBrand.addEventListener('click', e =>
      {
        e.preventDefault();
      
        mainbd.clear();
        count = 0;
        loadCards(99);
        cardClickEvent();
    });
      
      navHomeBtn.addEventListener('click', e =>
      {
        e.preventDefault();
       
        mainbd.clear();
        count = 0;
        loadCards(99);
        cardClickEvent();
    });

      navNewBtn.addEventListener('click', e =>
      {
        e.preventDefault();
       
        mainbd.clear();
        count = 0;
        loadCards(99);
        cardClickEvent();
    });

      navLoginBtn.addEventListener('click', e =>
      {
        e.preventDefault();

        mainbd.clear();
        chPage.login();
    });

    // Selectors and listeners for the side panel
    const sideAbout = document.querySelector(".about-lnk");
    const sideContact = document.querySelector(".contact-lnk");
    const sideShop = document.querySelector(".shop-lnk");
    const sideOwner = document.querySelector(".owner-lnk");
    const sideFaq = document.querySelector(".faq-lnk");

    sideAbout.addEventListener('click', e =>
      {
        e.preventDefault();

        mainbd.clear();
        chPage.about();
    });

    sideContact.addEventListener('click', e =>
      {
        e.preventDefault();

        mainbd.clear();
        chPage.contact();
    });

    sideShop.addEventListener('click', e =>
      {
        e.preventDefault();

        mainbd.clear();
        chPage.shop();
    });

    sideOwner.addEventListener('click', e =>
      {
        e.preventDefault();

        mainbd.clear();
        chPage.owner();
    });
    
    sideFaq.addEventListener('click', e =>
      {
        e.preventDefault();

        mainbd.clear();
        chPage.faq();
    });
// Creat a card class
// Render card templates to the dom
// Determine when a card element breaks to the next line

const mainBody = document.querySelector('.content'); // main body where the magic happens 

// The card Class
class Card {

    constructor(id, spacePts) {
        this.id = id,
        this.spacePts= spacePts
    }

    load()
    {   
        // Creats a new element for the card
        
        // console.log(this.spacePts)
        const card= `<a class="clickCard" id=${this.id} spacePts=${this.spacePts}>
        <div class="cardie-container">
            <div class="cardie">       
                <div class="cardie-body">
                </div>
            </div>
        </div>
        </a>`;
        
        //  Inegrates the element in the dom
        mainBody.innerHTML += card;
    }
};

// The Card-diplay Class
class DisplayCard {

    constructor(displayElem,card) {
        this.displayElem = displayElem,
        this.card = card
    }

    load()
    {   // Creats a new element for the DisplayCard
        
        // console.log(this.card.getAttribute('spacePts'));
        const card= `
        <div class="display-cardie-container" id=${this.card.id}>
            <p style="color:#e5e5e5">just now</p>   
            <div class="display-cardie">           
                <div class="cardie-body"></div>
            </div>
        </div>
        
        <div class="display-content-container">
            <p>User: <span style="color:#ffc107"> ${this.card.id}</span></p>
            <p class="space-Pts">${this.card.getAttribute('spacePts')} <i class="fas fa-rocket"></i></p>
            

        </div>`;
        
        //  Inegrates the element in the dom
        this.displayElem.innerHTML = card;
    }
};

export {Card,DisplayCard,mainBody};
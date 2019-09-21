// Creat a card class
// Render card templates to the dom
// Determine when a card element breaks to the next line

const mainBody = document.querySelector('.content'); // main body where the magic happens 

// The card Class
class Card {

    constructor(id) {
        this.id = id
    }

    load()
    {   // Creats a new element for the card

        const card= `<a href="#" class="clickCard" id=${this.id}>
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

    constructor(_elem,_id) {
        this.elem = _elem,
        this.id = _id
    }

    load()
    {   // Creats a new element for the DisplayCard

        const card= `<div class="display-cardie-container" id=${this.id}>
            <div class="display-cardie">       
                <div class="cardie-body">
                </div>
                <div class="display-cardie-user">
                </div>
            </div>
        </div>
        </a>`;
        
        //  Inegrates the element in the dom
        this.elem.innerHTML = card;
    }
};

export {Card,DisplayCard};
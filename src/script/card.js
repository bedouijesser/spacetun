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

        const card= `<a href="#" class="clickCard">
        <div class="cardie-container">
            <div class="cardie" id=${this.id}>       
                <div class="cardie-body">
                </div>
            </div>
        </div>
        </a>`;
        
        //  Inegrates the element in the dom
        mainBody.innerHTML += card;
    }
};


export {Card,mainBody};
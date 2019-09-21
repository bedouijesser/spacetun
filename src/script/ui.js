// Main body functions 
// CardPerLine calcluates the number of cards per line 

let result = 0; // contains the C/L result

class MainUI {
    constructor(count) {
        this.count = count,
        this.resize = 0
    }

    //  Creates a div element after line break 
    cardsPerLine() {
    
        // Fires when there are screen resizes and removes pre placed divs
        if (this.resize) {
        document.querySelectorAll('.card-display')
            .forEach(card =>{
                card.remove();
            });
        };
            
        console.log('new count'); // marks a new count 

        let firstTest = 1; // checks if a fuction below is fired for the first time

        // iterates throught the card element two by two comparing offsetTop attr to determine an element break
        for(let i=1 ; i<this.count ; i++)
        {
            const leftSelect = document.getElementById(`${i}`); // Selector for the left card element
            // offset from the window top
                var leftCard = leftSelect.offsetTop; 
                var rightCard = document.getElementById(`${i+1}`).offsetTop; 
            // console.log(leftCard,rightCard) 
            
             
            if (Math.abs(leftCard - rightCard) > 50 || i === this.count) {
                
                if (firstTest && !this.resize) {result = i} else {firstTest--}; // checks if CardsPerLine result is found and there has been no screen resizes
                
                leftSelect.insertAdjacentHTML('afterend','<div class="card-display"></div>');
                
            };
        };
        this.resize++;
    }
};

export {MainUI};
// Main body functions 
// HomeUI.CardPerLine() determines when the card breaks line, and injects a div after the last card per line.


// contains the Cardes per line result
let result = 0; 

class HomeUI 
{
    constructor(count) 
    {
        this.count = count,
        this.resize = 0
    }

    //  Creates a div element after line break 
    cardsPerLine() 
    {
    
        // Fires when there are screen resizes and removes pre placed divs
        if (this.resize) 
        {
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
            // Selector for the left card element
            const leftSelect = document.getElementById(`${i}`);
            const rightSelect = document.getElementById(`${i+1}`); 
            // offset from the window top
                var leftCard = leftSelect.offsetTop; 
                var rightCard = rightSelect.offsetTop;

            // console.log(leftCard,rightCard) 
            // console.log( rightSelect.nextElementSibling );
            if (Math.abs(leftCard - rightCard) > 50) 
            {     
                // checks if CardsPerLine result is found and there has been no screen resizes
                if (firstTest && !this.resize) {result = i} else {firstTest--}; 
                
                leftSelect.insertAdjacentHTML('afterend','<div class="card-display"></div>');
                
            };
            //fix for the last card bug
            if( rightSelect.nextElementSibling == null)
            {
                 // checks if CardsPerLine result is found and there has been no screen resizes
                 if (firstTest && !this.resize) {result = i} else {firstTest--}; 
                
                 rightSelect.insertAdjacentHTML('afterend','<div class="card-display"></div>');
            }
        };
        this.resize++;
    }
};



export {HomeUI};
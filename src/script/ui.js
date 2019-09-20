// Main body functions

class MainUI {
    constructor(count) {
        this.count = count
    }

    //  Creates a div element after line break 
    cardsPerLine() {
    
    for(let i=1 ; i<this.count ; i++)
    {
        const leftSelect = document.getElementById(`${i}`);
        const rightSelect = document.getElementById(`${i+1}`);

        var leftCard = leftSelect.offsetTop;
        var rightCard = rightSelect.offsetTop;
        console.log(leftCard,rightCard)

            if (Math.abs(leftCard - rightCard) > 50) {
             leftSelect.parentElement.parentElement.insertAdjacentHTML('afterend',`<div></div>`);
            };
        };
    }
};

export {MainUI};
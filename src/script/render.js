// creates and renders different templates to the dom


const mainBody = document.querySelector('.content'); // main body where the magic happens 

class MainBody {
    clear()
    {   
        mainBody.innerHTML = '';
    }
}

// the class that renders the Display card
class Card {

    constructor(userId, spacePts) {
        this.userId = userId,
        this.spacePts= spacePts
    }

    load()
    {   
        // Creats a new element for the card
        
        // console.log(this.spacePts)
        const card= `<a class="clickCard" id=${this.userId} spacePts=${this.spacePts}>
        <div class="cardie-container">
            <div class="cardie">       
                <div class="cardie-body">
                </div>
            </div>
        </div>
        </a>`;
        
        //  Renders the element in the dom
        mainBody.innerHTML += card;
    }
};

// the class that renders the Display card
class DisplayCard {

    constructor(displayElem,card) {
        this.displayElem = displayElem,
        this.card = card
    }

    load()
    {   
        // Creats a new element for the DisplayCard

        // console.log(this.card.getAttribute('spacePts'));
        const card= `
        <div class="display-cardie-container" id=${this.card.userId}>
            <h2>Insert Title Here</h2>
            <p>just now</p>   
            <div class="display-cardie">           
                <div class="cardie-body"></div>
            </div>
        </div>
        
        <div class="display-content-container">
            <p>User: <span style="color:#ffc107"> ${this.card.id}</span></p>
            <p class="space-Pts">${this.card.getAttribute('spacePts')} <i class="fas fa-rocket"></i></p>
            

        </div>`;
        
        //  Renders the element in the dom
        this.displayElem.innerHTML = card;
    }
};

class ChangePage 
{   
    // displays the card on the card display container
    
    login()
    {
        const form = 
        ` <div class="login-container">           
          
        <div class="signIn">
          <form>   
            
            <h4>Sign In</h4>

            <input class="code-input" type="email" placeholder="Email" required/>  

            <br>
            <input class="code-input" type="password" placeholder="Password" required/>
            
            <p class="forgot"><a href="#">Forgot Password?</a></p>
            
            <button class="btn btn-light"/>Sign In</button>
            
          </form>
        </div>
        
        <!-- the vertical line -->
        <div class="vl"></div>
              
        <div class="signUp">
        
            <form>
                
                <h4>Sign Up</h4>
                
                <p>This site uses invite codes to get in. if you have code
                already go ahead and redeem it in order to register an 
                account, if not, click <a href="#">Here</a> to order yours
                now. </p>
                
                <input class="code-input" type="text" placeholder="Code" required/>
          
                <button class="btn btn-warning signIn-btn"/>Log In</button>

            </form>

        </div>`

        mainBody.innerHTML=form;
    }
    about()
    {
        const form = 
        `<div class="side-container">
            
        <p>Spacetun is non profit website. <br>
        Meaning, unless you buy our merch or click on our ads, we will never charge you for using the site. <br> 
        <br>
        Since this website uses invite only system there are few rules to keep mind in order to keep your access code: <br>
        </p>
        
        <ol>
          <li>Watch fight club</li>
          <li>click on this <a href="#">link</a></li>
          <li>No abusive language or hate speech</li>
          <li>Religion, Whatever it is, We don't talk about that here</li>
          <li>harassing users for invites or Sp will get you warnings, get 3 and you're out</li>
          <li>You do not ask to be a Mod, Mods get picked on Sp only</li>
        </ol>
      </div>`
        mainBody.innerHTML=form;
    }
    contact()
    {
        const form = 
        `<div class="login-container"></div>`
        mainBody.innerHTML=form;
    }
    shop()
    {
        const form = 
        `<div class="login-container"></div>`
        mainBody.innerHTML=form;
    }
    owner()
    {
        const form = 
        `<div class="login-container"></div>`
        mainBody.innerHTML=form;
    }
    faq()
    {
        const form = 
        `<div class="login-container"></div>`
        mainBody.innerHTML=form;
    }

}

export {mainBody,MainBody,Card,DisplayCard,ChangePage};
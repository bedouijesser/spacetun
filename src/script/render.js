// creates and renders different templates to the dom


const mainBody = document.querySelector('.content'); // main body where the magic happens 

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
    {   // Creats a new element for the DisplayCard
        
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

class Login 
{   
    load()
    {
        // Clears the previous dom elements
        mainBody.innerHTML='';

        const form = 
        `<div class="login-container">           
            <div class="singIn">
                <form>
                <div id="signIn-Container">   
                <h4>Sign In</h4>
                
                <form action="/" method="post">
                
                  <div class="field-wrap">
                  <label>
                    Email Address<span class="req">*</span>
                  </label>
                  <input type="email"required autocomplete="off"/>
                </div>
                
                <div class="field-wrap">
                  <label>
                    Password<span class="req">*</span>
                  </label>
                  <input type="password"required autocomplete="off"/>
                </div>
                
                <p class="forgot"><a href="#">Forgot Password?</a></p>
                
                <button class="button button-block"/>Log In</button>
                
                </form>
      
              </div>
            </div>
            <div class="singUp">
                <h4>Sign Up</h4>
                <p>This site uses ivite codes to get in. if you have code
                already go ahead and redeem it in order to register an 
                account, if not, click <a href="#">Here</a> to order yours
                now. </p>
                <div class="field-wrap">
                  <label>  Redeem Invite </label>
                  <input type="text" placeholder="Code" required/>
                  <button class="btn btn-dark"/>Log In</button>
                </div>
            </div>
        </div>`

        mainBody.innerHTML=form;
    }

}

export {mainBody,Card,DisplayCard,Login};
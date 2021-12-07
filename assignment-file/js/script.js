// Use window.addEventListener("scroll",) Event listener. 
// then add callback function that includes when the window height scroll down to 100vh and add 'fixed-top' class on Navbar element.
// For your mind: object.classList.add('class') this method is add class on selected element
// e.target.scrollingElement.scrollTop use that method when track scrolling amount


window.addEventListener('scroll', event =>{
    if(window.scrollY > 547) {
        document.getElementById("navbar").classList.add('fixed-top', 'float-panel','shadow-sm', 'sticky', 'opacity-75');
        // document.getElementById('navbar').style.transition = '0.7s';
        // document.getElementById('navbar').style.animationDirection = 'normal';
        document.getElementById('navbar').style.cssText = 'transition = 0.7s; animationDirection = normal;';
    } else {
        document.getElementById("navbar").classList.remove('fixed-top', 'shadow-sm', 'sticky', 'opacity-75');
        document.getElementById('navbar').style.animationDuration = null;
        document.getElementById('navbar').style.animationDirection = null;
    }
});


// Add scrollDetect callback function on window.addEventlistener('scroll', callback) Listener


// Define Play button variable

    // const playBtn = document.getElementById('play-btn');

    // playBtn.addEventListener('click', finsetModal.show(){
        
    // });

    // const finsetModal =

// Create a modal with a single line of JavaScript: https://getbootstrap.com/docs/5.1/components/modal/#via-javascript
// Define finsetModal then use Bootstrap modal Object request

// var myModal = new bootstrap.Modal(document.getElementById('myModal'), options);

// Create Click Event Listener on Play button variable (you already created above)
// add finsetModal.show() on callback function
// Select '.modal-body' class from finsetModal variable then use innerHTML method and add Youtube embed code



// Create an XMLHttpRequest object
// Create a callback function
// Open a GET request and use data from ../data/company_intro.json
// Send the request


const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (){

    if (this.readyState == 4) {
        const data = JSON.parse(xhr.responseText).data;
        let tmp2 = '';
        for(let i = 0; i < data.length; i++) {
            let tmp1 = data[i];
            tmp2 += 
            `
                <div class="col-4">
                    <div class="card d-flex flex-column" style="height: 50vh;">
                        <div class="thumbnail">
                            <img src="${tmp1.thumbnail}" style="height: calc(50vh/2); border-radius: 20px; width: 100%;"
                                class="card-img-top img-fluid" alt="icons">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${tmp1.title}</h5>
                            <p class="card-text">${tmp1.content.slice(0, 100)}</p>
                            <a href="#" class="">Go somewhere</a>
                        </div>
                    </div>
                </div>
            `;
            // console.log(tmp2);
        }
        document.getElementById("cards-1").innerHTML = tmp2;
        document.getElementById("cards-2").innerHTML = tmp2;
    } else return 'fail';
}
xhr.open("GET", "../data/company_intro.json");
xhr.send();




/*  Add subscription email action. When subscription POST request is successful, 
    change the email element and subscribe button into "Your subscription is successful" Text. 
    POST request should be done by AJAX request. We need a POST request end point for subscription email. 
*/
// Define Subscribe by ID name

// Add CLICK Event Listener on the button
// Then using Fetch method POST input value to http://52.221.191.153/subscribe/subscription/create 

var menuList = document.getElementById("menuList");
    
menuList.style.maxHeight = "0px";
    
function togglemenu() {
    if(menuList.style.maxHeight === "0px") 
    {
        menuList.style.maxHeight = "300px";
    }
    else 
    {
        menuList.style.maxHeight = "0px";
    }
}

// Get the button:
let mybutton = document.getElementById("to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Scroll down to selected Id
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
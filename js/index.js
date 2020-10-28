// Your code goes here
// Task 2a:
//Variables with their querySelectors 
const headerTransition = document.querySelector('header');
const logoHeading = document.querySelector('.logo-heading');
const introImage = document.querySelector('.intro img');
const button = Array.from(document.querySelectorAll('.btn'));
const contactLink = document.querySelectorAll('.nav-link');
const images = Array.from(document.querySelectorAll('img'));
const body = document.querySelector('body');

// 1. & 2. MOUSEOVER Event Listener && MOUSELEAVE Event Listener, changes background color of header region when mouse is inside of it.
headerTransition.addEventListener('mouseover', event => {
    headerTransition.style.backgroundColor = "#FABD50";
});
headerTransition.addEventListener('mouseleave', event => {
    headerTransition.style.backgroundColor = "#FFFFFF";
});

// 3. KEYDOWN Event Listener: When user presses '-' key, an alert pops up, explains what happened, as well as what user should do next.
//Functionality also includes being able to press any other key to bring back Logo.
document.addEventListener('keydown', event => {
    if (event.key === "-") {
        logoHeading.classList.add('off');
        alert(`You pressed ${event.key}, and you subtracted the Fun Bus logo from the page. Click any other key to bring it back!.`)
    } else {
        logoHeading.classList.remove('off');
    }
});

// 4. WHEEL Event Listener: When inside the intro img section, user can 'wheel' over the image and it will zoom in/out
// This function is from MDN, however, I took time to understand what it's doing, and personalized aspects of it. 
function zoom(event) {
    //Prevents the rest of the page from also zooming in/out.
    event.preventDefault();
    //MouseWheel speed: If the number (-0.03 in this case), is made larger, then wheel speed becomes drastic.
    //If the number is made smaller, then wheel speed is slower to respond.
    //.deltaY vs .deltaX have to do with the axis.
    scale += event.deltaY * -0.03;
    // Restrict scale: .5 in this case, is the smallest you can zoom out (half the original size), 1.5 is how large zooming in will make the img.
    scale = Math.min(Math.max(.5, scale), 1.5);
    // Apply scale transform
    introImage.style.transform = `scale(${scale})`;
};
let scale = 1;
introImage.addEventListener('wheel', zoom);

// 5. LOAD Event Listener: When the window loads, this alert pops up.
window.addEventListener('load', event =>{
    alert(`Welcome to Fun Bus! 😎🚌 Double click the bus image for something fun!`);
});

// 6. FOCUS Event Listener: When user clicks any 'Sign Me Up!' button, the 'Contact' link in the header is focused.
// --- Old Way ---
// button[0].addEventListener('click', event => {
//     contactLink[3].focus();
// });
// button[1].addEventListener('click', event => {
//     contactLink[3].focus();
// });
// button[2].addEventListener('click', event => {
//     contactLink[3].focus();
// });
// --- Better Way ---
button.forEach(element => (element.addEventListener('click', event => {
    contactLink[3].focus();
})));


// 7. RESIZE Event Listener: alerts user that the window size has changed when the user changes the window size.
window.addEventListener('resize', event => {
    alert('Viewport has changed size 🤓');
});

// 8. SCROLL Event Listener: Changes the transparency/opacity of the header bar when user scrolls.
window.addEventListener('scroll', event => {
    headerTransition.style.opacity = '0.85';
});

// 9. SELECT Event Listener: 
// function textSelection(event) {
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     alert(`You highlighted ${selection}`);
// }
// headerTransition.addEventListener('select', textSelection);

// 9. DBLCLICK Event Listener: Upon user double click, the intro image goes away.
introImage.addEventListener('dblclick', event => {
    introImage.classList.add('off');
});

// 10. CONTEXTMENU Event Listener: Disables the 'right click' menu on all images of the page, that would normally come up.
images.forEach(element => (element.addEventListener('contextmenu', event => {
    event.preventDefault();
})));

// Task 2b:
// Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
logoHeading.addEventListener('click', event => {
    logoHeading.style.backgroundColor = "#32A2B8";
    event.stopPropagation();
});
headerTransition.addEventListener('click', stopProp => {
    headerTransition.style.backgroundColor = "#32A2B8";
});

// Task 2c:
// Stop the navigation items from refreshing the page by using `preventDefault()`
const navigationItems = Array.from(document.querySelectorAll('.nav-link'));
navigationItems.forEach(cb => (cb.addEventListener('click', event => {
    event.preventDefault();
})));   




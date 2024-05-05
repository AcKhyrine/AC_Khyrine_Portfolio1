let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);









// Get the container element
const container = document.querySelector('.container');

// Variables to store the initial mouse position and scroll position
let isDown = false;
let startX;
let scrollLeft;

// Function to handle mouse down event
function handleMouseDown(e) {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
}

// Function to handle mouse leave event
function handleMouseLeave() {
    isDown = false;
}

// Function to handle mouse up event
function handleMouseUp() {
    isDown = false;
}

// Function to handle mouse move event
function handleMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX); // Adjust scrolling speed
    container.scrollLeft = scrollLeft - walk;
}

// Add event listeners for mouse events
container.addEventListener('mousedown', handleMouseDown);
container.addEventListener('mouseleave', handleMouseLeave);
container.addEventListener('mouseup', handleMouseUp);
container.addEventListener('mousemove', handleMouseMove);


// Get the car element
const car = document.getElementById('car');

// Function to handle container scroll event
// Function to handle container scroll event
function handleContainerScroll() {
    // Calculate the new size of the car based on the container's scroll position
    const scrollPercentage = container.scrollLeft / (container.scrollWidth - container.clientWidth);
    let newSize = 40 - scrollPercentage * 55; // Adjust the scaling factor as needed

    // Check if the car size is smaller than a certain threshold
    const thresholdSize = 30; // Define the threshold size
    if (newSize < thresholdSize) {
        newSize = thresholdSize; // Set the size to the threshold size
        const bottomOffset = 10; // Define the offset from the bottom
        car.style.bottom = bottomOffset + 'px'; // Apply the bottom offset
    } else {
        car.style.bottom = '0'; // Reset bottom offset if size is not smaller than threshold
    }

    // Apply the new size to the car
    car.style.width = newSize + '%';
}

// Add event listener for container scroll event
container.addEventListener('scroll', handleContainerScroll);


// Add event listener for container scroll event
container.addEventListener('scroll', handleContainerScroll);



// SCROLL------
(function () {
    let element = document.querySelector('.scroll-horizontal-container')
    element.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault()
            window.requestAnimationFrame(() => {
                element.scrollLeft += e.deltaY
            })
        }
    })
})()

// var controller = new ScrollMagic.Controller();
// var tween = TweenMax.to("#target", 10, { z: -150 });
// // build scee
// var scene = new ScrollMagic.Scene({
//     triggerElement: "#trigger",
//     duration: 500
// })
//     .setTween(tween);




//contact===========
const form = document.querySelector('form');
const name = document.getElementById("name");
const email = document.getElementById("email");
const address = document.getElementById("address");
const number = document.getElementById("number");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${name.value} <br> Email: ${email.value} <br> Phone Number: ${number.value} <br> Address: ${address.value} <br> Message: ${message.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "khyrine@fullsuite.ph",
        Password: "5A456E8620B34DE14CFF5B02ACB6527CD953",
        To: 'khyrine@fullsuite.ph',
        From: "khyrine@fullsuite.ph",
        Subject: "Portfolio Website",
        Body: bodyMessage
    }).then(
        // response => alert(response)
        message => {
            if(message == "OK"){
                Swal.fire({
                  title: "Success!",
                  text: "Message sent successfully!",
                  icon: "success"
                });
            }
            form.reset();
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});


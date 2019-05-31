//  Define these variables here uninitialised, so we can use them later
let secondHand;
let minuteHand;
let hourHand;

//  This triggers our callback when the page has finished loading
document.addEventListener("DOMContentLoaded", function() {
    //  Get the hand elements from the DOM
    secondHand = document.querySelector(".hand.second");
    minuteHand = document.querySelector(".hand.minute");
    hourHand = document.querySelector(".hand.hour");

    //  Call the update method
    updateTime();
});

//  Helper variables for calculating the current time rotations
const secondDivide = 60 * 1000;
const minuteDivide = 60 * secondDivide;
const hourDivide = 12 * minuteDivide;

function updateTime() {
    //  These methods get the current seconds, minutes, hours as integers
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();

    //  These calculations will get the rotation on the clock for the full second/minute/hour
    const secondRotation = (seconds / 60) * 360;
    // const minuteRotation = (minutes / 60) * 360;
    // const hourRotation = (hours / 12) * 360;

    //  This gets the current time in milliseconds
    const currentTimeMS = Date.now() - (currentTime.getTimezoneOffset() * 60 * 1000);

    //  These calculations get the exact position around the clock for each hand
    // const secondRotation = ((currentTimeMS / secondDivide) * 360) % 360;
    const minuteRotation = ((currentTimeMS / minuteDivide) * 360) % 360;
    const hourRotation = ((currentTimeMS / hourDivide) * 360) % 360;

    //  Display Method 1: Use CSS to rotate the hands themselves
    // minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    // hourHand.style.transform = `rotate(${hourRotation}deg)`;
    // secondHand.style.transform = `rotate(${secondRotation}deg)`;

    //  Display Method 2: Use CSS to rotate the container that wraps the hands
    document.querySelector(".wrap.minute").style.transform = `rotate(${minuteRotation}deg)`;
    document.querySelector(".wrap.hour").style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector(".wrap.second").style.transform = `rotate(${secondRotation}deg)`;

    //  Update Method 1: Update the hand positions every seconds
    // setTimeout(() => updateTime(), 1000 - currentTimeMS % 1000);

    //  Update Method 2: Update the hand positions every browser frame
    // requestAnimationFrame(() => updateTime());

    //  Update Method 3: Only run this method once and use CSS to update the clock hands
}
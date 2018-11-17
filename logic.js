// OPtions
// Caldiascope - all same images
// Shuffle Grid


// Our Images
const images=["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg", "./images/6.jpg", "./images/7.jpg", "./images/8.jpg", "./images/9.jpg","./images/10.jpg", "./images/11.jpg","./images/12.jpg", "./images/13.jpg","./images/14.jpg", "./images/15.jpg","./images/16.jpg", "./images/17.jpg","./images/18.jpg", "./images/19.jpg","./images/20.jpg", "./images/21.jpg","./images/22.jpg", "./images/23.jpg", "./images/24.jpg", "./images/25.jpg","./images/26.jpg", "./images/27.jpg","./images/28.jpg", "./images/29.jpg","./images/30.jpg"]

// Randomize Images
let randomImages = images.sort(function(a, b){return 0.5 - Math.random()})
// console.log(randomImages);

// Ser Vars for DOM Elements
const box1=document.getElementById("box-1");
const box2=document.getElementById("box-2");
const box3=document.getElementById("box-3");
const box4=document.getElementById("box-4");
const box5=document.getElementById("box-5");
const box6=document.getElementById("box-6");

const boxArray = [box1, box2, box3, box4, box5, box6];

// To Track Our Index
let count = 0;

// Store Our Interval So We Can Have Access To It
let carousel;


// ============================================================================================================
// There is a DRY way to do this code with a loop but it does not achieve the stagered effect I was looking for
// ============================================================================================================

// Set Initial Images
const loadStartImages = () =>{
    for(i=0; i<boxArray.length; i++){
        boxArray[i].style.backgroundImage = `url(${randomImages[count + i]})`;
        console.log(count);
        count++
    }
}

const fadeOut = (box) => {
    box.setAttribute("class", "box fadeOut");
}

const updateImages = (box) => {
    box.style.visibility = "hidden";
    box.style.backgroundImage = `url(${randomImages[count]})`;
    console.log(`Image Number: ${count}`);
    count++;
    console.log(`Updated Count: ${count}`);

}

const updateClass = (box) => {
    box.setAttribute("class", "box scaleIn");
    box.style.visibility = "visible";
}

const fullCycle = (box) => {
    setTimeout(()=>fadeOut(box), 0);
    setTimeout(()=>updateImages(box), 3000);
    setTimeout(()=>updateClass(box), 4000);
}


function cycleImages() {

    // Check If All Images Used & Reshuffle
    if(count>=randomImages.length-1){
        randomImages = images.sort(function(a, b){return 0.5 - Math.random()})
        count=0;
        setTimeout(()=>fullCycle(box1), 500);
        setTimeout(()=>fullCycle(box2), 1000);
        setTimeout(()=>fullCycle(box3), 1500);
        setTimeout(()=>fullCycle(box4), 2000);
        setTimeout(()=>fullCycle(box5), 2500);
        setTimeout(()=>fullCycle(box6), 3000);
    } else {
        setTimeout(()=>fullCycle(box1), 500);
        setTimeout(()=>fullCycle(box2), 1000);
        setTimeout(()=>fullCycle(box3), 1500);
        setTimeout(()=>fullCycle(box4), 2000);
        setTimeout(()=>fullCycle(box5), 2500);
        setTimeout(()=>fullCycle(box6), 3000);
    }
}

// Start Carousel
const start = () => {
    carousel = setInterval(cycleImages, 10000);
}

// Stop Carousel
const stop = () => {
    clearInterval(carousel);
}


const suffle = ()=>{
    console.log("clicked");
}



document.getElementById("play").addEventListener("click", function(){
    console.log("clicked");
    cycleImages();
    start();
    document.getElementById("pause-modal").style.display="none";
});

document.getElementById("pause").addEventListener("click", function(){
    console.log("clicked");
    stop();
    document.getElementById("pause-modal").style.display="block";

    // setTimeout(()=>fadeOut(box1), 500);
    // setTimeout(()=>fadeOut(box2), 1000);
    // setTimeout(()=>fadeOut(box3), 1500);
    // setTimeout(()=>fadeOut(box4), 2000);
    // setTimeout(()=>fadeOut(box5), 2500);
    // setTimeout(()=>fadeOut(box6), 3000);
});

document.getElementById("shuffle").addEventListener("click", function(){
    console.log("clicked");
    shuffle();
});

loadStartImages();
gsap.registerPlugin(ScrollTrigger)

//default toggle action:
//toggleActions: "play none none none"
//  arguments: 1. Enters view while scrolling down; 2. Exites the view while scrolling down
//             3. Enters view while scrolling up; 4. Exites the view while scrolling up

// key words: play pause resume reverse restart reset complete none

gsap.from('.boxa', {
    scrollTrigger: {
        trigger: ".boxa",
        start: 'top top',
        end: 'bottom top',
        toggleActions: "play pause reverse pause",
        markers: true
    },
    duration: 1,
    rotation: 360,
    x: '90vw'
})

//default - start: 'top center' 
//Animation starts when 1 argument of the object is in the 2 argument
//  arguments: 1. Part of the object 2. Part of the screen 

// key words: top, center, bottom, 
// pixels, percentages (relative to the top)

//default - end: 'bottom top'

// () => "+=" + document.querySelector(".boxb").offsetHeight

gsap.from(".boxb", {
    scrollTrigger: {
        trigger: ".boxb",
        start: 'center bottom',
        end: 'center top',
        markers: true,
        scrub: true
    },
    duration: 3,
    rotation: 360,
    x: '90vw'
})
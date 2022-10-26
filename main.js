gsap.registerPlugin(ScrollTrigger)

//default toggle action:
//toggleActions: "play none none none"
//  arguments: 1. Enters view while scrolling down; 2. Exites the view while scrolling down
//             3. Enters view while scrolling up; 4. Exites the view while scrolling up

// key words: play pause resume reverse restart reset complete none

// pinned

ScrollTrigger.defaults({
    markers: true
})

gsap.from('.boxa', {
    scrollTrigger: {
        trigger: ".boxa",
        start: 'top top',
        end: '400vh top',
        toggleActions: "play pause reverse pause",
        pin: true
    },
    duration: 1,
    rotation: 180,
    x: '90vw',

    id: 'Box_c'

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
        scrub: 1
    },
    duration: 3,
    rotation: 360,
    x: '90vw',
    
    id: 'Box_c',

})

//callbacks

ScrollTrigger.create({
    trigger: ".boxc",
    start: 'top center',
    end: 'bottom center',
    scrub: 1,
    onEnter: () => console.log('enter'),
    onLeave: () => console.log('leave'),
    onEnterBack: () => console.log('enter back'),
    onLeaveBack: () => console.log('leave back'),

    onUpdate: (self) => console.log('update: ', self.progress.toFixed(3)),

    toggleClass: 'active',

    id: 'Box_c',

})
<template>
    <div></div>
</template>

<script setup>
import { onMounted } from 'vue';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// const VueRecaptcha = defineAsyncComponent({
//   loader: () => import('vue-recaptcha').then(module => module.VueRecaptcha),
//   loadingComponent: () => '<div>Loading...</div>',
//   delay: 4000
// });

// const lenis = new Lenis({
//     duration: 1.5
// })

// function raf(time) {
//     lenis.raf(time)
//     requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger);

const animateUp = gsap.utils.toArray('.animateUp');
animateUp.forEach(grow => {
    gsap.from(grow, {
        scrollTrigger: {
            trigger: grow,
            start: 'bottom 100%',
        },
        y: 20,
        opacity: 0,
        duration: 2,
        ease: "Expo.easeOut",
    });
});

const showLeft = gsap.utils.toArray('.showLeft');
showLeft.forEach(grow => {
    gsap.from(grow, {
        scrollTrigger: {
            trigger: grow,
            start: 'bottom 100%',
        },
        x: -40,
        opacity: 0,
        duration: 2,
        ease: "Expo.easeOut",
    });
});

const scaleUp = gsap.utils.toArray('.scaleUp');
scaleUp.forEach(grow => {
    gsap.from(grow, {
        scrollTrigger: {
            trigger: grow,
            start: 'bottom 100%',
        },
        scale: 0,
        opacity: 0,
        duration: 2,
        ease: "Expo.easeOut",
    });
});

const fadeIn = gsap.utils.toArray('.fadeIn');
fadeIn.forEach(grow => {
    gsap.from(grow, {
        scrollTrigger: {
            trigger: grow,
            start: 'bottom 100%',
        },
        opacity: 0,
        duration: 2,
        ease: "Expo.easeOut",
    });
});

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((word, i) => {

    const text = new SplitType(word, { types: 'words' })

    gsap.from(text.words, {
        scrollTrigger: {
            trigger: word,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false,
        },
        opacity: .2,
        color: '#a1a1a1',
        stagger: 0.1
    })
})

const wordSplit = document.querySelectorAll('.word-split')

wordSplit.forEach((word, i) => {

    const text = new SplitType(word, { types: 'words' })

    gsap.from(text.words, {
        scrollTrigger: {
            trigger: word,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
            markers: false,
        },
        opacity: .2,
        color: '#a1a1a1',
        stagger: 0.1
    })
})

onMounted(() => {
    // const { initialize } = useGtag();
    // initialize();
    // setupTawkTo();
    // printConsoleMessage();
});

function setupTawkTo() {
    (window.Tawk_API = window.Tawk_API || {}),
        (window.Tawk_LoadStart = new Date());
    (function () {
        var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = "https://embed.tawk.to/5714b32b0702fb561cdad46b/default";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s0.parentNode.insertBefore(s1, s0);
    })();

    document.querySelectorAll(".show-chat-button").forEach((elem) => {
        elem.addEventListener("click", function (e) {
            e.preventDefault();
            // console.log("clicking");
            if (window.Tawk_API && window.Tawk_API.maximize) {
                window.Tawk_API.maximize();
            }
        });
    });
}
</script>

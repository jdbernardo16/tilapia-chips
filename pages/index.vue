<template>
    <!-- Frame 1 -->
    <div class="h-[150vh] w-full bg-gray-100 flex justify-center relative firstFrame">
        <nuxt-img class="absolute top-0 lef-0 w-full h-full opacity-10" src="/images/aurora.png" />
        <div class=" absolute left-[-100px] top-[-10px] rotate-[15deg] w-[300px] h-[500px] firstLeft z-[5]">
            <nuxt-img src="/images/original.png" />
        </div>
        <div class=" absolute left-[-50px] top-[300px] rotate-[20deg] w-[300px] h-[500px] secondLeft z-[4]">
            <nuxt-img src="/images/garlic_parmesan.png" />
        </div>
        <div class=" absolute left-[50px] top-[500px] rotate-[35deg] w-[300px] h-[500px] thirdLeft z-[1]">
            <nuxt-img src="/images/salted_egg.png" />
        </div>

        <div class=" absolute right-[-100px] top-[-10px] rotate-[-15deg] w-[300px] h-[500px] firstRight z-[5]">
            <nuxt-img src="/images/barbeque.png" />
        </div>
        <div class=" absolute right-[-50px] top-[300px] rotate-[-20deg] w-[300px] h-[500px] secondRight z-[4]">
            <nuxt-img src="/images/cheese.png" />
        </div>
        <div class=" absolute right-[50px] top-[500px] rotate-[-35deg] w-[300px] h-[500px] thirdRight z-[1]">
            <nuxt-img src="/images/sweet_spicy.png" />
        </div>

        <div class="h-[100vh] stickyItem flex items-center justify-center w-full">
            <div class="text-center w-[550px] relative z-[2]">
                <p class="text-h1 mb-8 playfair">Best food for<br>your taste</p>
                <p class="leading-6 font-light mb-10">Discover the ultimate tilapia chips<br>crispy, flavorful, and crafted for your perfect bite.</p>
                <div class="flex items-center space-x-4 w-fit m-auto">
                    <div class="bg-blue-600 px-8 py-5 rounded-full text-white">
                        Be A Reseller
                    </div>
                    <div class="border border-black px-8 py-5 rounded-full">
                        Explore Products
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="relative">
        <div class="w-full px-20 pt-20 pb-0">
            <h3 class="text-h3 text-center playfair">Featured Products</h3>
        </div>
        <nuxt-img class="absolute top-0 left-0 w-full h-full opacity-30" src="/images/product-bg.png" />
        <div class="gallery relative">
            <div class="left z-[2]">
                <div class="desktopContent">
                    <div class="desktopContentSection">
                        <h3 class="playfair text-h3 mb-6">Original Flavor</h3>
                        <div class="ck-content text-lg">
                            <p>Crisp and light, our Original Flavor Tilapia Chips bring out the natural, savory taste of tilapia in every bite. Seasoned simply with Himalayan salt, these chips are perfect for a wholesome, guilt-free snack that’s packed with protein and flavor.</p>
                        </div>
                    </div>
                    <div class="desktopContentSection">
                        <h3 class="playfair text-h3 mb-6">Salted Egg</h3>
                        <div class="ck-content">
                            <p>Dive into the rich, savory taste of our Salted Egg Tilapia Chips! Coated with a creamy, umami-packed salted egg seasoning, these chips are an indulgent treat with a perfect balance of saltiness and crunch. Each bite delivers a burst of flavor that’s satisfyingly addictive and uniquely delicious – perfect for those craving something bold yet wholesome.</p>
                        </div>
                    </div>
                    <div class="desktopContentSection">
                        <h3 class="playfair text-h3 mb-6">Garlic Parmesan</h3>
                        <div class="ck-content">
                            <p>For garlic lovers, our Garlic Parmesan Tilapia Chips offer a rich, savory blend of roasted garlic and creamy parmesan. This mouthwatering flavor adds a gourmet twist to every crunchy bite, making it the perfect choice for an indulgent yet healthy snack.</p>
                        </div>
                    </div>
                    <div class="desktopContentSection">
                        <h3 class="playfair text-h3 mb-6">Sweet and Spicy</h3>
                        <div class="ck-content">
                            <p>A delightful fusion of sweetness and heat, our Sweet and Spicy Tilapia Chips deliver a flavor explosion. The subtle sweetness balanced with a kick of spice will leave your taste buds craving more, offering a snack that’s as bold as it is satisfying.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="right">

                <!-- desktop content -->

                <div class="desktopPhotos m-auto">
                    <div class="desktopPhoto">
                        <nuxt-img class="w-full h-full object-contain" src="/images/original.png" />
                    </div>
                    <div class="desktopPhoto">
                        <nuxt-img class="w-full h-full object-contain" src="/images/salted_egg.png" />
                    </div>
                    <div class="desktopPhoto">
                        <nuxt-img class="w-full h-full object-contain" src="/images/garlic_parmesan.png" />
                    </div>
                    <div class="desktopPhoto">
                        <nuxt-img class="w-full h-full object-contain" src="/images/sweet_spicy.png" />
                    </div>
                </div>

                <!-- mobile content -->
                <div class="mobileContent">
                    <div class="mobilePhoto red"></div>
                    <h1>Red</h1>
                    <p>Red is a color often associated with strong emotions such as passion, love, and anger. It's a bold and attention-grabbing color that can evoke feelings of excitement, warmth, and energy.</p>

                    <div class="mobilePhoto green"></div>
                    <h1>Green</h1>
                    <p>Green is a color that is often associated with nature, growth, and harmony. It is a calming and relaxing color that can evoke feelings of balance, stability, and freshness. In color psychology, green is said to represent balance and stability, making it a popular choice for branding and marketing in the health and wellness industry. </p>

                    <div class="mobilePhoto pink"></div>
                    <h1>Pink</h1>
                    <p>Pink is a color that is often associated with femininity, romance, and sweetness. It is a softer and more delicate shade of red that can evoke feelings of warmth, love, and nurturing. In the world of branding and marketing, pink is often used to target a female audience or to promote products that are associated with beauty, love, or romance.</p>

                    <div class="mobilePhoto blue"></div>
                    <h1>Blue</h1>
                    <p>Blue is a color that is often associated with calmness, trust, and reliability. It is a peaceful and serene color that can evoke feelings of stability, security, and professionalism. In color psychology, blue is said to represent loyalty and trust, making it a popular choice for branding and marketing in the finance and technology industries.</p>
                </div>

            </div>
        </div>
    </div>

    <!-- Frame 3 -->
    <div class="w-full bg-gray-100 flex items-center justify-center space-x-20 px-20 pb-20 pt-40">
        <div class="w-1/2 relative">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <nuxt-img 
                    class="w-full h-full object-contain" 
                    src="/images/healthy.webp" 
                />
            </div>
            <div class="p-12 bg-neutral-700 absolute -top-20 -right-20 rounded-xl max-w-[411px]">
                <p class="font-semibold text-white mb-10">Come and visit us</p>
                <div class="space-y-6">
                    <nuxt-link to="tel:+(63) 921 469 6757" target="_blank" rel="noreferrer" class="flex items-center space-x-3 text-white">
                        <PhoneIcon class="w-5 h-5" />
                        <p class="w-[calc(100%-32px)]">+(63) 921 469 6757</p>
                    </nuxt-link>
                    <nuxt-link to="mailto:info@tilapiachips.com" target="_blank" rel="noreferrer" class="flex items-center space-x-3 text-white">
                        <EnvelopeIcon class="w-5 h-5" />
                        <p class="w-[calc(100%-32px)]">info@tilapiachips.com</p>
                    </nuxt-link>
                    <nuxt-link to="https://maps.app.goo.gl/6c2AvGKSYBAAhTH97" target="_blank" rel="noreferrer" class="flex items-center space-x-3 text-white">
                        <MapPinIcon class="w-5 h-5" />
                        <p class="w-[calc(100%-32px)]">122 Tabing Sangka, Prenza 1, Marilao, Bulacan</p>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="w-1/2 space-y-6 pl-20">
            <h3 class="text-h3 playfair">
                We provide healthy food for your family.
            </h3>
            <div class="ck-content">
                <p>At Jeannie’s, we’re dedicated to bringing your family a healthy and delicious snacking option with our tilapia chips. Made from high-quality, sustainably sourced tilapia, our chips are packed with protein and carefully seasoned for a satisfying crunch.<br><br>We believe in offering snacks that don’t compromise on flavor or nutrition – a perfect choice for mindful snacking that the whole family can enjoy. Discover more about our journey to make healthy snacking easy and enjoyable.</p>
            </div>
            <div class="border border-black px-8 py-5 rounded-full w-fit">
                More About Us
            </div>
        </div>
    </div>

    <!-- Frame 4 -->
    <div class="w-full bg-white px-20 py-20">
        <h3 class="text-h3 playfair mb-16">We also offer unique<br>promos and packages</h3>
        <div class="grid grid-cols-4 gap-6">
            <div>
                <div class="aspec-w-1 aspect-h-1 overflow-hidden rounded-lg mb-7">
                    <nuxt-img 
                        class="w-full h-full object-contain" 
                        src="/images/promo4.jpg" 
                    />
                </div>
                <div>
                    <p class="text-2xl font-semibold mb-2">Buy 5 save ₱80</p>
                    <p class="line-clamp-2 text-neutral-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur asperiores odio, rem libero dignissimos inventore vero aliquid qui numquam!
                    </p>
                </div>
            </div>
            <div>
                <div class="aspec-w-1 aspect-h-1 overflow-hidden rounded-lg mb-7">
                    <nuxt-img 
                        class="w-full h-full object-contain" 
                        src="/images/promo1.jpg" 
                    />
                </div>
                <div>
                    <p class="text-2xl font-semibold mb-2">Buy 5 save ₱80</p>
                    <p class="line-clamp-2 text-neutral-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur asperiores odio, rem libero dignissimos inventore vero aliquid qui numquam!
                    </p>
                </div>
            </div>
            <div>
                <div class="aspec-w-1 aspect-h-1 overflow-hidden rounded-lg mb-7">
                    <nuxt-img 
                        class="w-full h-full object-contain" 
                        src="/images/promo2.jpg" 
                    />
                </div>
                <div>
                    <p class="text-2xl font-semibold mb-2">Reseller Package 1</p>
                    <p class="line-clamp-2 text-neutral-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur asperiores odio, rem libero dignissimos inventore vero aliquid qui numquam!
                    </p>
                </div>
            </div>
            <div>
                <div class="aspec-w-1 aspect-h-1 overflow-hidden rounded-lg mb-7">
                    <nuxt-img 
                        class="w-full h-full object-contain" 
                        src="/images/promo6.jpg" 
                    />
                </div>
                <div>
                    <p class="text-2xl font-semibold mb-2">Reseller Package 2</p>
                    <p class="line-clamp-2 text-neutral-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur asperiores odio, rem libero dignissimos inventore vero aliquid qui numquam!
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Frame 5 -->
    <div class="px-20 py-20">
        <div class="text-center mb-16">
            <h3 class="text-h3 playfair">What Our Customers Say</h3>
        </div>
        <div class="grid grid-cols-3 gap-6">
            <div v-for="i in 3" class="bg-[#F9F9F7] rounded-lg p-10">
                <div class="space-y-6 pb-8 border-b mb-8">
                    <p class="font-semibold text-2xl text-blue-600">“The best restaurant”</p>
                    <p class="text-[#414536] text-lg">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
                </div>
                <div class="flex items-center space-x-5">
                    <div class="w-[70px] h-[70px] rounded-full relative overflow-hidden">
                        <nuxt-img src="https://picsum.photos/id/237/70/70" />
                    </div>
                    <div class="text-[#414536]">
                        <p class="font-semibold">Sophire Robson</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- frame 6 -->

     <div class="px-20 py-20 bg-neutral-100">
        <div class="flex items-center justify-between mb-16">
            <h3 class="text-h3 playfair">Our Blog & Articles</h3>
            <div class="border bg-blue-600 px-8 py-5 rounded-full text-white">
                Read all Articles
            </div>
        </div>
        <div class="grid grid-cols-2 gap-6">
            <div>
                <div class="bg-white rounded-2xl overflow-hidden">
                    <div class="aspect-w-[636] aspect-h-[456]">
                        <nuxt-img class="w-full h-full object-cover" src="https://picsum.photos/id/237/636/456" />
                    </div>
                    <div class="p-10">
                        <p class="text-sm mb-4">January 3, 2023</p>
                        <p class="font-semibold mb-4">The secret tips & tricks to prepare a perfect burger & pizza for our customers</p>
                        <p class="text-neutral-500">Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</p>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-6">
                <div class="bg-white rounded-lg h-fit overflow-hidden">
                    <div class="aspect-w-[300] aspect-h-[200]">
                        <nuxt-img class="w-full h-full object-cover" src="https://picsum.photos/id/240/636/456" />
                    </div>
                    <div class="p-4">
                        <p class="text-xs mb-3">January 3, 2023</p>
                        <p class="font-semibold line-clamp-3">The secret tips & tricks to prepare a perfect burger & pizza for our customers</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg h-fit overflow-hidden">
                    <div class="aspect-w-[300] aspect-h-[200]">
                        <nuxt-img class="w-full h-full object-cover" src="https://picsum.photos/id/241/636/456" />
                    </div>
                    <div class="p-4">
                        <p class="text-xs mb-3">January 3, 2023</p>
                        <p class="font-semibold line-clamp-3">The secret tips & tricks to prepare a perfect burger & pizza for our customers</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg h-fit overflow-hidden">
                    <div class="aspect-w-[300] aspect-h-[200]">
                        <nuxt-img class="w-full h-full object-cover" src="https://picsum.photos/id/242/636/456" />
                    </div>
                    <div class="p-4">
                        <p class="text-xs mb-3">January 3, 2023</p>
                        <p class="font-semibold line-clamp-3">The secret tips & tricks to prepare a perfect burger & pizza for our customers</p>
                    </div>
                </div>
                <div class="bg-white rounded-lg h-fit overflow-hidden">
                    <div class="aspect-w-[300] aspect-h-[200]">
                        <nuxt-img class="w-full h-full object-cover" src="https://picsum.photos/id/243/636/456" />
                    </div>
                    <div class="p-4">
                        <p class="text-xs mb-3">January 3, 2023</p>
                        <p class="font-semibold line-clamp-3">The secret tips & tricks to prepare a perfect burger & pizza for our customers</p>
                    </div>
                </div>
            </div>
        </div>
     </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/vue/24/outline";

gsap.registerPlugin(ScrollTrigger);

onMounted(()=> {
    const firstLeft = gsap.utils.toArray('.firstLeft');
    firstLeft.forEach(fadeOut => {
        gsap.to(fadeOut, {
            scrollTrigger: {
                trigger: ".firstFrame",
                start: 'top top',
                end: 'bottom 0',
                scrub: true,
                duration: 1,
                ease: "none",
            },
            rotate: -10,
            left: -300,
            top: -300,
        });
    });

    const secondLeft = gsap.utils.toArray('.secondLeft');
    secondLeft.forEach(fadeOut => {
        gsap.to(fadeOut, {
            scrollTrigger: {
                trigger: ".firstFrame",
                start: 'top top',
                end: 'bottom 0',
                scrub: true,
                duration: 1,
                ease: "none",
            },
            rotate: -10,
            left: -300,
            top: -300,
        });
    });

    const thirdLeft = gsap.utils.toArray('.thirdLeft');
    thirdLeft.forEach(fadeOut => {
        gsap.to(fadeOut, {
            scrollTrigger: {
                trigger: ".firstFrame",
                start: 'top top',
                end: 'bottom 0',
                scrub: true,
                duration: 1,
                ease: "none",
            },
            rotate: -10,
            left: -400,
            top: -300,
        });
    });

    const firstRight = gsap.utils.toArray('.firstRight');
    firstRight.forEach(fadeOut => {
        gsap.to(fadeOut, {
            scrollTrigger: {
                trigger: ".firstFrame",
                start: 'top top',
                end: 'bottom 0',
                scrub: true,
                duration: 1,
                ease: "none",
            },
            rotate: 10,
            right: -300,
            top: -300,
        });
    });

    const secondRight = gsap.utils.toArray('.secondRight');
    secondRight.forEach(fadeOut => {
        gsap.to(fadeOut, {
            scrollTrigger: {
                trigger: ".firstFrame",
                start: 'top top',
                end: 'bottom 0',
                scrub: true,
                duration: 1,
                ease: "none",
            },
            rotate: 10,
            right: -300,
            top: -300,
        });
    });

    const thirdRight = gsap.utils.toArray('.thirdRight');
    thirdRight.forEach(fadeOut => {
        gsap.to(fadeOut, {
            scrollTrigger: {
                trigger: ".firstFrame",
                start: 'top top',
                end: 'bottom 0',
                scrub: true,
                duration: 1,
                ease: "none",
            },
            rotate: 10,
            right: -400,
            top: -300,
        });
    });

    ScrollTrigger.create({
        trigger:".firstFrame",
        start:"top top",
        end:"bottom bottom",
        pin:".stickyItem"
    })


    const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")


    gsap.set(photos, { opacity: 0 })

    const allPhotos = gsap.utils.toArray(".desktopPhoto")


    // create
    let mm = gsap.matchMedia();

    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 600px)", () => {

        // this setup code only runs when viewport is at least 600px wide
        console.log("desktop")

        ScrollTrigger.create({
            trigger: ".gallery",
            start: "top 112px",
            end: "bottom bottom",
            pin: ".right",
            markers: false
        })

        //create scrolltrigger for each details section
        //trigger photo animation when headline of each details section 
        //reaches 80% of window height
        details.forEach((detail, index) => {

            let headline = detail.querySelector("h3")
            let animation = gsap.timeline()
                .to(photos[index], { opacity: 1 })
                .set(allPhotos[index], { autoAlpha: 0 })
            ScrollTrigger.create({
                trigger: headline,
                start: "top 80%",
                end: "top 50%",
                animation: animation,
                scrub: true,
                markers: false
            })
        })



        return () => { // optional
            // custom cleanup code here (runs when it STOPS matching)
            console.log("mobile")
        };
    });
})





</script>
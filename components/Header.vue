<template>
    <header class="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div class="px-20 bg-neutral-700 flex items-center justify-between w-full py-2">
            <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-1 text-white text-xs">
                    <PhoneIcon class="w-3 h-3" />
                    <p>+63941230</p>
                </div>
                <div class="flex items-center space-x-1 text-white text-xs">
                    <EnvelopeIcon class="w-3 h-3" />
                    <p>email@email.com</p>
                </div>
            </div>
        </div>
        <div class="px-20 w-full flex justify-between items-center py-2.5">
            <img class="h-[60px]" src="/images/tilapia-logo.png" alt="">
            <div class="flex items-center space-x-20">
                <div class="flex items-center space-x-3 text-sm">
                    <nuxt-link class="px-4 py-1 rounded-full bg-[#DBDFD0]" to="#">Home</nuxt-link>
                    <nuxt-link class="px-4 py-1 rounded-full" to="#">About</nuxt-link>
                    <nuxt-link class="px-4 py-1 rounded-full" to="#">Products</nuxt-link>
                    <nuxt-link class="px-4 py-1 rounded-full" to="#">Blog</nuxt-link>
                    <nuxt-link class="px-4 py-1 rounded-full" to="#">Contact</nuxt-link>
                </div>
                <nuxt-link to="#" class="border px-4 py-2 text-sm rounded-full bg-blue-600 text-white block">
                    Be A Reseller
                </nuxt-link>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
import { PhoneIcon, EnvelopeIcon } from "@heroicons/vue/24/outline";
</script>
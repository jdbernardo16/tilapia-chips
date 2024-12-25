<template>
    <NuxtLazyHydrate :when-triggered="idleTrigger" @hydrated="onHydrated">
        <Header :custom-class="layoutProps.customClass" />
        <main class="overflow-x-hidden">
            <NuxtPage />
        </main>
        <LazyFooter />
        <!-- <LazyDefer v-if="loadDeferred" /> -->
    </NuxtLazyHydrate>
    <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const route = useRoute()
const layoutProps = computed(() => route.meta.layoutProps || {})

const idleTrigger = ref(false)
const loadDeferred = ref(false)
function fireTrigger() {
    idleTrigger.value = true
}

onMounted(() => {
    const delay = detectMobile() ? 5000 : 2500

    const loadScripts = async () => {
        setTimeout(fireTrigger, delay)
    }

    if (document.readyState === "complete") {
        loadScripts()
    } else {
        window.addEventListener("load", loadScripts)
    }
})

const onHydrated = () => {
    loadDeferred.value = true
}
</script>

<style lang="scss">
@use "~/assets/scss/main.scss";
</style>
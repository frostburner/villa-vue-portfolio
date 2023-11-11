<script setup lang="ts">

</script>

<template>
    <div class="landingPage">
        <div class="nav">
            <div class="logo">
            <h1> Logo Here </h1> 
            <p> Logo Text </p>
        </div>
        </div>
        <h1 class="landingText" > Developer </h1>




    </div>
</template>

<style scoped>
.landingPage{
    @apply bg-neutral min-h-screen min-w-full font-sans
}

.landingText{
    @apply text-primary text-7xl text-center font-semibold
}

.nav {
    @apply bg-default flex p-5 
}

.nav>h1{
    @apply text-primary
}

.logo {
    @apply flex bg-gray-300 max-w-[15%] space-x-4
}

</style>
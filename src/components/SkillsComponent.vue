<script setup lang = "ts">

</script>

<template>
<div class="body">
    <div class="skills">
    <div class="skillsTitle">
        <h1> About Me </h1>
    </div>
    <div class = "skillsDesc">
        <div class="textDecorPrimary">
                    <p>{{ "<about>" }}</p>
                </div>
        
    
        <div class="textDecorPrimary">
                    <p>{{ "</about>" }}</p>
                </div>
    </div>
</div>

</div>


</template>

<style scoped>
.body{
    @apply bg-neutral max-h-full flex  
}
.skills{
    @apply w-full mt-10 bg-gray-800
}

.skillsTitle{
    @apply text-gray-50 text-4xl font-semibold text-center
}
.skillsDesc{
    @apply text-gray-50 my-10   w-[600px] p-4 rounded-[15px] hover:bg-default active:bg-neutral
}
.aboutDesc>h1{
    @apply text-4xl text-primary
}

.textDecorPrimary>p {
    @apply text-primary text-sm my-9;
}
.imgHolder{
    @apply  flex justify-center items-center
}
.me{
    @apply  w-[75%] rounded-tl-[10px] rounded-br-[10px] border-4 border-primary
}
</style>
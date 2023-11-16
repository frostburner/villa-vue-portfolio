<script setup lang = "ts">
import me from "../assets/img/me.jpg"
import bg from ""
</script>

<template>
<div class="body">
    <div class="about">
    <div class="aboutTitle">
        <h1> About Me </h1>
    </div>
    <div class = "aboutDesc">
        <div class="textDecorPrimary">
                    <p>{{ "<about>" }}</p>
                </div>
        <h1>Hello!</h1> <br>

        <p>My name is Rafael Jose S. Villa. A 4th year student taking up IT. 
            I am web developer specializing in Front End development.
        </p><br>
        <p> I consider myself an entry-level developer with a substantial knowledge about Web Development basics such as HTML, CSS,
            and a little bit of JavaScript
        </p><br>
        <p>
            I also have entry-level knowledge about different frameworks such as React, Angular, ExpresJS, and Vue. Currently, I am studying
            VueJs and Tailwind for my CSS. 
        </p><br>

        <p>
            I also have small knowledge about databases like MySQL, PostgreSQL, and MongoDB. Not to mention, I am also studying backend frameworks 
            like Express and Flask. Test
        </p>
    
        <div class="textDecorPrimary">
                    <p>{{ "</about>" }}</p>
                </div>
    </div>
</div>
<div class="imgHolder">
<img class="me" :src="me">
</div>
</div>

</template>

<style scoped>

.body{
    @apply bg-zinc-900 max-h-full flex 
    }

.about{
    @apply  ml-40 py-9 min-w-[35%]
}

.aboutTitle{
    @apply text-gray-50 text-4xl font-semibold  border-2 active:bg-default hover:bg-primary cursor-pointer border-primary h-fit w-[50%] p-10 content-around rounded-tl-[10px] rounded-br-[10px]
}
.aboutDesc{
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
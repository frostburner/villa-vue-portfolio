<script setup lang="ts">

// import { ref, onMounted } from 'vue';
import image from "../../src/assets/img/img2.png";
import logo from "../assets/img/logo-portfolio.svg";

// const scrollToTarget = (targetId) => {
//   const targetElement = document.getElementById(targetId);
//   if (targetElement) {
//     window.scrollTo({
//       top: targetElement.offsetTop,
//       behavior: 'smooth'
//     });
//   }
// };

// const smoothScroll = (e) => {
//   e.preventDefault();
//   const targetId = e.target.getAttribute('href').substring(1);
//   scrollToTarget(targetId);
// };

// onMounted(() => {
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', smoothScroll);
//   });
// });
  
</script>

<template>
    <div class="landingPage">
        <div class="nav">
            <div class="logo-holder">
                <img :src="logo">
                <!-- <p>Raf.Dev</p> -->
            </div>

            <div class="navButtons">
                <a onclick="window.location.href='#home'">Home</a>
                <a onclick="window.location.href=='#about'">About</a>
                <a onclick="window.location.href='#skills'">Skills</a>
                <a onclick="window.location.href='#projects'">Projects</a>
            </div>

        </div>

        <div class="landingBody">
            <img class="imgHolder" :src="image">

            <div class="landingIntro">
                <h1> Portfolio</h1>
                <div class="textDecorPrimary">
                    <p>{{ "<hello>" }}</p>
                </div>
                <p>Hi, <br> My name is Raf, <br> a Web Developer</p>
                <div class="textDecorPrimary">
                    <p>{{ "</hello>" }}</p>
                </div>
                <p>I am currently a 4th year IT student in La Consolacion College - Bacolod</p>
                <div class="moreInfo">
                   <a onclick="window.location.href='#contacts'"> Let's Talk</a>
                </div>

            </div>
            

        </div>
    </div>
</template>

<style scoped>
.landingPage {
    @apply bg-neutral min-h-screen min-w-full font-sans;
}

.landingIntro {
    @apply max-w-screen-sm
}

.landingIntro>h1 {
    @apply text-primary text-7xl pb-16;
}

.landingIntro>p {
    @apply text-gray-50 text-2xl;
}

.textDecorPrimary>p {
    @apply text-primary text-sm my-9;
}

.moreInfo {
    @apply text-primary text-2xl pt-10 hover:text-secondary cursor-pointer w-fit
}

.landingBody {
    @apply min-w-fit flex m-4;
}

.imgHolder {
    @apply w-[35%] mx-10 border-4  rounded-tl-[50%] rounded-br-[50%] drop-shadow-2xl;
}

.nav {
    @apply bg-neutral flex p-8 place-content-between text-xl;
}

.nav>h1 {
    @apply text-primary;
}

.logo-holder{
    @apply flex h-10 max-w-[20%] space-x-4 content-center;
}

.logo-holder>p{
    @apply py-1 text-primary
}

/* .logo{
    @apply 
} */
.navButtons {
    @apply scroll-smooth text-gray-50 flex space-x-6 mr-12 ;
}

.navButtons>a{
    @apply hover:text-primary active:text-gray-50 cursor-pointer ;
}</style>

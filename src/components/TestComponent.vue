<script setup lang="ts">
import { ref, onMounted } from 'vue';
import image from "../assets/img/landing2.png";
import logo from "../assets/img/logo-portfolio.svg";

const scrollToTarget = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
};

const smoothScroll = (targetId: string) => {
  scrollToTarget(targetId);
};

onMounted(() => {
  const navLinks = document.querySelectorAll('.navButtons a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      smoothScroll(targetId);
    });
  });
});
</script>

<template>
  <div class="landingPage">
    <div class="nav">
      <div class="logo-holder">
        <img :src="logo" alt="Logo">
      </div>
      <div class="navButtons">
        <a @click="smoothScroll('home')">Home</a>
        <a @click="smoothScroll('about')">About</a>
        <a @click="smoothScroll('skills')">Skills</a>
        <a @click="smoothScroll('projects')">Projects</a>
      </div>
    </div>
    <div class="landingBody">
      <img class="imgHolder" :src="image" alt="Landing Image">
      <div class="landingIntro">
        <h1>Portfolio</h1>
        <div class="textDecorPrimary">
          <p>{{ "<hello>" }}</p>
        </div>
        <p>Hi,<br>My name is Raf,<br>a Web Developer</p>
        <div class="textDecorPrimary">
          <p>{{ "</hello>" }}</p>
        </div>
        <p>I am currently a 4th year IT student at La Consolacion College - Bacolod</p>
        <div class="moreInfo">
          <a @click="smoothScroll('contacts')">Let's Talk</a>
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
    @apply w-[35%] mx-10;
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

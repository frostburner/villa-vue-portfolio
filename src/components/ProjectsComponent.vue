<script setup lang="ts">

import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="body">
    <div class="skills">
      <div class="skillsTitle">
        <h1>Projects</h1>
      </div>


<div class="textDecorPrimary">
          <p>&lt;projects&gt;</p>
        </div>
      <div class="Desc">
        
      
        <div class="cardHolder">
        <v-card class="card">
          <v-card-item>
            <Icon icon="mdi:desktop-mac" width="40" />
        <v-card-title>Web Apps </v-card-title>

        <v-card-subtitle> 8 Projects</v-card-subtitle>
        </v-card-item>

      <!-- <v-card-text> This is content </v-card-text> -->
        </v-card>

        <v-card class="card">
          <v-card-item>
            <Icon icon="ph:figma-logo" width="40" />
        <v-card-title>Wep Designs</v-card-title>

        <v-card-subtitle>13 Projects</v-card-subtitle>
        </v-card-item>

      <!-- <v-card-text> This is content </v-card-text> -->
        </v-card>
        
        <v-card class="card">
          <v-card-item>
            <Icon icon="material-symbols-light:phone-android" width="40" color=""/>
        <v-card-title>Mobile App Designs</v-card-title>

        <v-card-subtitle>7 Projects</v-card-subtitle>
        </v-card-item>

      <!-- <v-card-text> This is content </v-card-text> -->
        </v-card>

        

      </div>

      <div class="info">
        <p> Over my college years, I have created 8 web apps, 13 web design projects, and 7 mobile app designs. I aim to create 
          and add more as I progress through my web development journey.
        </p> <br>
        <p>I explore different tools and libraries for every framework that I work with. I also aim to make the codes I make as clean
          and efficient as I can. </p> <br>
        <p> This portfolio is made with simple Vue libraries for icons and components.</p>
      </div>




</div>
        <div class="textDecorPrimary">
          <p>&lt;/projects&gt;</p>
        </div>

      
    </div>
  </div>
</template>

<style scoped>
.info{
  @apply w-1/2  p-[5%]
}
.cardHolder{
  @apply space-y-4  w-fit
}
.card {
  @apply w-[400px] h-auto bg-cyan-500  flex items-center hover:bg-secondary cursor-pointer
}
.body {
  @apply bg-slate-700 max-h-full flex justify-center w-full;
}

.skills {
  @apply m-6 w-2/3;
}

.skillsTitle {
  @apply text-gray-50 text-4xl font-semibold text-center text-primary mt-10;
}

.Desc {
  @apply text-gray-50 my-5 w-full p-4 rounded-[15px] flex justify-between ;
}


.aboutDesc > h1 {
  @apply text-4xl text-primary;
}

.textDecorPrimary > p {
  @apply text-primary text-sm my-9;
}

.imgHolder {
  @apply flex justify-center items-center;
}

.me {
  @apply w-[75%] rounded-tl-[10px] rounded-br-[10px] border-4 border-primary;
}

.text {
  @apply flex justify-center mb-5;
}

.skillsBoxHolder {
  @apply w-auto h-fit flex justify-center space-x-20;
}

.rectangle {
  @apply w-[200px] h-[120px] bg-cyan-400 text-black rounded-lg ;
}



.rectangleText {
  @apply text-center bg-slate-500;
}

.skillsIconsHolder {
  @apply min-w-full h-full flex justify-between my-10;
}

.skillsIcon {
  @apply w-20 h-20 bg-emerald-600 rounded-full text-center;
}

.skillsDiv {
  @apply text-center mt-5;
}

.skillsDiv > p {
  @apply mt-5;
}
</style>

<script setup lang="ts">

import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="body">
    <div class="skills">
      <div class="skillsTitle">
        <h1>Skills</h1>
      </div>
      <div class="skillsDesc">
        <div class="textDecorPrimary">
          <p>&lt;projects&gt;</p>
        </div>

        <p class="text">
          I am always striving to never stop learning and improving
        </p>

        <div class="skillsBoxHolder">
          <div class="rectangle">
            <Icon
              icon="icon-park-outline:computer"
              color="#020617"
              width="32"
              display="flex"
              justify-content="center"
              m
            />
            <p class="rectangleText">Web Development</p>
          </div>

          <div class="rectangle">
            <Icon icon="ph:figma-logo" color="#020617" width="32" display="flex" />
            <p class="rectangleText">UI/UX</p>
          </div>
        </div>

        <div class="skillsIconsHolder">
          <div class="skillsDiv">
            <Icon icon="vscode-icons:file-type-html" width="96" />
            <p>HTML</p>
          </div>

          <div class="skillsDiv">
            <Icon icon="vscode-icons:file-type-css" width="96" />
            <p>CSS</p>
          </div>

          <div class="skillsDiv">
            <Icon icon="vscode-icons:file-type-vue" width="96" />
            <p>Vue</p>
          </div>

          <div class="skillsDiv">
            <Icon icon="vscode-icons:file-type-reactjs" width="96" />
            <p>React</p>
          </div>
        </div>

        <div class="textDecorPrimary">
          <p>&lt;/projects&gt;</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  @apply bg-neutral max-h-full flex justify-center;
}

.skills {
  @apply m-6;
}

.skillsTitle {
  @apply text-gray-50 text-4xl font-semibold text-center text-primary mt-10;
}

.skillsDesc {
  @apply text-gray-50 my-5 w-[600px] p-4 rounded-[15px];
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

<script setup lang="ts">
import AboutComponent from "./components/AboutComponent.vue";
import ContactsComponent from "./components/ContactsComponent.vue";
import HelloWorld from "./components/HelloWorld.vue";
import ProjectsComponent from "./components/ProjectsComponent.vue";
import SkillsComponent from "./components/SkillsComponent.vue";
import TestComponent from "./components/TestComponent.vue";

</script>

<template>
  <div>

    <TestComponent  id="test"/>
    <AboutComponent id="about"/>
    <SkillsComponent id="skills" />
    <ProjectsComponent id="projects" />
   
    
  </div>

</template>

<style scoped>

:root, html, body {
scroll-behavior: smooth;
scroll-padding: 10rem;

}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

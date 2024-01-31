<script>
import { Icon } from "@iconify/vue";


export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
    }),
  }

</script>

<template>
  <div class="body">

    <v-form v-model="valid">
    <v-container class="form">
      <v-row>
        <v-col >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
            hide-details
          ></v-text-field>
        </v-col>

        <v-col >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            hide-details
            required
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            hide-details
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>

  </div>
</template>

<style scoped>
.form{
  @apply w-full
}
.icon{
  @apply object-top
}

.card {
  @apply w-[400px] h-auto bg-cyan-500  flex items-center hover:bg-secondary cursor-pointer
}

.body {
  @apply bg-neutral max-h-full flex w-full;
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
  @apply w-[200px] h-[120px] bg-cyan-400 text-black rounded-lg;
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

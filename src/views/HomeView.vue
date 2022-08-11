<template>
  <v-col cols="12">
    <v-combobox
      v-model="select"
      :items="items"
      label="Select a favorite activity or create a new one"
      multiple
    ></v-combobox>
  </v-col>
  <div class="alert alert-primary" role="alert">
    A simple primary alert—check it out!
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components

export default defineComponent({
  name: "HomeView",

  components: {},
});
</script>

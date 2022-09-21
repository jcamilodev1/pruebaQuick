<template>
  <section class="RegisterContainer">
    <label for=""><span>*</span> Nombre completo</label>
    <BaseInput placeholder="Ariel Camacho"></BaseInput>
    <label for=""><span>*</span> Email</label>
    <BaseInput placeholder="example@mail.com"></BaseInput>
    <label for=""><span>*</span> Contraseña</label>
    <InputPass placeholder="Password" v-model="form.pass"></InputPass>
    <BaseButton label="Registrarse"></BaseButton>
  </section>
</template>

<script>
import BaseInput from "@/components/form/BaseInput.vue";
import InputPass from "@/components/form/InputPass/InputPass.vue";
import { ref } from "@vue/reactivity";
import BaseButton from "../../components/form/BaseButton.vue";

export default {
  components: { BaseInput, InputPass, BaseButton },
  setup() {
    const form = ref({});
    return {
      form,
    };
  },
};
</script>

<style lang="scss" scoped>
.RegisterContainer {
  padding: 32px;
  text-align: start;
  label {
    display: block;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
    color: #000;
    span {
      color: #ff4e78;
    }
  }
  input {
    margin-bottom: 25px;
  }
  > div {
    text-align: center;
  }
}
</style>
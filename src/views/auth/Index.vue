<template>
  <section class="loginToggle">
    <a :class="'active'" @click="active = true">Login</a>
  </section>
  <h2>Bienvenidos</h2>
  <Login v-if="active"></Login>
</template>
<script>
import { ref } from '@vue/reactivity';
import Login from './Login.vue';
  export default {
    components: { Login },
    setup(){
      const form = ref({})
      const active = ref(true)
      return{
        form,
        active
      }
    }
  }
</script>

<style lang="scss" scoped>
h2{
  font-weight: 500;
  font-size: 3.6rem;
  line-height: 4rem;
  color: #000;
}
.loginToggle{
  display: flex;
  padding: 32px;
  a{
    display: block;
    width: 100%;
    padding: 20px;
    color: #647188;
    border-bottom: 1px solid #647188;
    font-size: 16px;
    cursor: pointer;
    &.active{
      font-weight: 400;
      color: #fcb100;
      border-bottom: 3px solid #fcb100;
    }
  }
}

</style>
<template>
  <section class="loginContainer">
    <label for=""><span>*</span> Email</label>
    <BaseInput placeholder="example@mail.com" v-model="form.email"></BaseInput>
    <label for=""><span>*</span> Contraseña</label>
    <InputPass placeholder="Password" v-model="form.pass"></InputPass>
    <BaseButton label="Entrar"></BaseButton>
    <div>
      <router-link to="/about">Olvide mi clave</router-link>
    </div>
  </section>
</template>

<script>
  
  import BaseInput from '@/components/form/BaseInput.vue';
import InputPass from '@/components/form/InputPass/InputPass.vue';
import { ref } from '@vue/reactivity';
import BaseButton from '../../components/form/BaseButton.vue';
export default {
    components: { BaseInput, InputPass, BaseButton },
    setup(){
      const form = ref({})
      const login = () => {
        
      }
      return{
        form,
      }
    }
  }
</script>

<style lang="scss" scoped>
.loginContainer{
  padding: 32px;
  text-align: start;
  label{
    display: block;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
    color: #000;
    span{
      color: #FF4E78;
    }
  }
  input{
    margin-bottom: 25px;
  }
  a{
    color: #fcb100;
    font-size: 16px;
    font-weight: 500;
    &:hover{
      text-decoration: none;
    }
  }
  > div{
    text-align: center;
  }
}
</style>
<template>
  <section class="loginContainer">
    <label for=""><span>*</span> Email</label>
    <BaseInput placeholder="example@mail.com" v-model="form.email" type="email" required></BaseInput>
    <label for=""><span>*</span> Contraseña</label>
    <InputPass placeholder="Password" v-model="form.password" required ></InputPass>
    <BaseButton label="Entrar" @click="login"></BaseButton>
    <div>
      <router-link to="/">Olvide mi clave</router-link>
    </div>
  </section>
</template>

<script>
import BaseInput from "@/components/form/BaseInput.vue";
import InputPass from "@/components/form/InputPass/InputPass.vue";
import { ref } from "@vue/reactivity";
import BaseButton from "../../components/form/BaseButton.vue";
import axios from "axios";
import { useRoute, useRouter } from 'vue-router';
export default {
  components: { BaseInput, InputPass, BaseButton },
  setup() {
    const route = useRoute()
    const router =  useRouter()
    const form = ref({});
    const getUsers = async () => {
      const data = await axios.get("/src/fakeApi/datos.json");
      return data.data
    }
    const login = async () => {
      const users = await getUsers()
      const match = await users.filter(element => element.email == form.value.email?.trim() && element.password == form.value.password?.trim())
      const adminUser = match[0]
      console.log(adminUser.status)
      adminUser ? localStorage.setItem('token', JSON.stringify(adminUser)) : ''
      if(adminUser.status == 1){
        router.push({ path: '/'})
      }else{
        router.push({ path: '/servicing'})
      }
    };
    return {
      form,
      login
    };
  },
};
</script>

<style lang="scss" scoped>
.loginContainer {
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
  a {
    color: #fcb100;
    font-size: 16px;
    font-weight: 500;
    &:hover {
      text-decoration: none;
    }
  }
  > div {
    text-align: center;
  }
}
</style>
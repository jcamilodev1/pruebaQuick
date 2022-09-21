<template>
  <section class="dashboard">
    <article class="dashboard__aside">
      <a :class="active ? 'active': ''" @click="active = true">Table</a>
      <a :class="active ? '': 'active'" @click="active = false">Categories</a>
      <BaseButton @click="logOut" label="Cerrar"></BaseButton>
    </article>
    <article class="dashboard__container">
      <Table v-if="active"></Table>
      <Categories v-if="!active"></Categories>
    </article>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity';

import Table from './Table.vue';
import Categories from './Categories.vue';
import BaseButton from '@/components/form/BaseButton.vue';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const form = ref({});
        const router = useRouter()
        const active = ref(true);
        const logOut =  () => {
          localStorage.removeItem('token')
          router.push({ path: '/login'})
        }
        return {
            form,
            active,
            logOut
        };
    },
    components: { Table, Categories, BaseButton }
};
</script>

<style lang="scss">
.dashboard {
  display: grid;
  grid-template-columns: 20% 1fr;
  min-height: 100vh;
  &__aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    a{
      width: 100%;
      margin-bottom: 20px;
      color: white;
      cursor: pointer;
      text-decoration: none;
      &:hover{
        text-decoration: underline;
      }
      &.active{
        color: #fcb100;
      }
    }
    button{

    }
  }
  &__container{
    padding: 20px 40px;
    overflow: hidden;
  }
}
.pagination {
    margin-top: 20px;
    justify-content: center !important;

    .page-item{
      width: 40px;
      height: 40px;
      border-radius: 100%;
      .page-link{
        display: inline-block;
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 100%;
        color: #000000;
        &:focus{
          box-shadow: none;
        }
      }
      &.active > .page-link{
      color: white;
      background: #fcb100;
    }
    }
  }
</style>
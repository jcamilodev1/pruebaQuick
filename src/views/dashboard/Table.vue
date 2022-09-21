<template>
  <section class="atletas__table">
      <article class="atletas__table__title">
        <h2>Atletas</h2>
      </article>
      <article class="atletas__table__container">
        <article class="atletas__table__table">
          <article class="atletas__table__table-header">
            <p>Atleta</p>
            <p>Edad</p>
            <p>País</p>
            <p>Año</p>
            <p>Fecha</p>
            <p>Deporte</p>
            <p>Oro</p>
            <p>Plata</p>
            <p>Bronce</p>
            <p>Total</p>
          </article>
          <article
            class="atletas__table__table-row"
            v-for="(element) in users"
            :key="element"
          >
            <p>{{element.athlete}}</p>
            <p>{{element.age}}</p>
            <p>{{element.country}}</p>
            <p>{{element.year}}</p>
            <p>{{element.date}}</p>
            <p>{{element.sport}}</p>
            <p>{{element.gold}}</p>
            <p>{{element.silver}}</p>
            <p>{{element.bronze}}</p>
            <p>{{element.total}}</p>
          </article>
        </article>
      </article>
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
    </section>
</template>

<script>
import { ref } from '@vue/reactivity'
import axios from "axios";
import { watch } from '@vue/runtime-core';

export default {
  setup(){
    const currentPage =  ref(1)
    const rows =  ref(50)
    const perPage = ref(10)
    const init = ref(0)
    const final = ref(0)
    const users = ref([])
    const getDataAttribute =  async () => {
      const data = await axios.get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json");
      rows.value = await data.data.length
      users.value = await data.data
      init.value = (currentPage.value - 1) * perPage.value
      final.value = (currentPage.value * perPage.value)
      users.value = await users.value.slice(init.value , final.value)
    }
    watch(currentPage, () => getDataAttribute())
    getDataAttribute()
    return{
      currentPage,
      rows,
      perPage,
      users
    }
  }
}
</script>

<style lang="scss" scoped>
.atletas{
  &__table {
    &__container{
      overflow: hidden;
    }
    margin-top: 20px;
    &__title {
      display: flex;
      justify-content: space-between;
      input {
        max-width: 300px;
      }
    }
    @include Table(10);
  }
}
</style>
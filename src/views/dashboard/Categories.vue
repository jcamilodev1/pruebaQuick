<template>
  <section class="atletas__table">
      <article class="atletas__table__title">
        <h2>Categories</h2>
      </article>
      <article class="atletas__table__container">
        <article @click="OpenPopUp('Rowing', 'lorem5kjaskaj')">
          <h3>Rowing</h3>
          <div>
            <span class="material-icons md-18">person</span> Gold: {{match?.filter(element => element.sport == 'Rowing').reduce(function (acc, obj) { return acc + obj.gold; }, 0)}}
          </div>
          <div>
            <span class="material-icons md-18">people</span> Silver: {{match?.filter(element => element.sport == 'Rowing').reduce(function (acc, obj) { return acc + obj.silver; }, 0)}}
          </div>
          <div>
            <span class="material-icons md-18">diversity_3</span> Bronze: {{match?.filter(element => element.sport == 'Rowing').reduce(function (acc, obj) { return acc + obj.bronze; }, 0)}}
          </div>
          <div>
            <span class="material-icons md-18">emoji_events</span> Total: {{match?.filter(element => element.sport == 'Rowing').reduce(function (acc, obj) { return acc + obj.total; }, 0)}}
          </div>
        </article>
        <article @click="OpenPopUp('Shooting', 'lorem5kjaskaj')">
          <h3>Shooting</h3>
          <div>
            <span class="material-icons md-18">person</span> Gold: {{match?.filter(element => element.sport == 'Shooting').reduce(function (acc, obj) { return acc + obj.gold; }, 0)}}
          </div>
          <div>
            <span class="material-icons md-18">people</span> Silver: {{match?.filter(element => element.sport == 'Shooting').reduce(function (acc, obj) { return acc + obj.silver; }, 0)}}
          </div>
          <div>
            <span class="material-icons md-18">diversity_3</span> Bronze: {{match?.filter(element => element.sport == 'Shooting').reduce(function (acc, obj) { return acc + obj.bronze; }, 0)}}
          </div>
          <div>
            <span class="material-icons md-18">emoji_events</span> Total: {{match?.filter(element => element.sport == 'Shooting').reduce(function (acc, obj) { return acc + obj.total; }, 0)}}
          </div>
        </article>
        <article @click="OpenPopUp('Swimming', 'lorem5kjaskaj')">
          <h3>Swimming</h3>
          <div>
            <span class="material-icons md-18">person</span> Gold: {{match?.filter(element => element.sport == 'Swimming').reduce(function (acc, obj) { return acc + obj.gold; }, 0)}}
          </div>
          <div>
            <span class="material-icons md-18">people</span> Silver: {{match?.filter(element => element.sport == 'Swimming').reduce(function (acc, obj) { return acc + obj.silver; }, 0)}}
          </div>
          <div>
            <span class="material-icons md-18">diversity_3</span> Bronze: {{match?.filter(element => element.sport == 'Swimming').reduce(function (acc, obj) { return acc + obj.bronze; }, 0)}}
          </div>
          <div>
            <span class="material-icons md-18">emoji_events</span> Total: {{match?.filter(element => element.sport == 'Swimming').reduce(function (acc, obj) { return acc + obj.total; }, 0)}}
          </div>
        </article>
      </article>
    </section>
    <section class="popUp" v-if="popUP.show">
    <section class="popUp__container">
      <article class="popUp__container__title">
        <h3>{{ popUP.title }}</h3>
        <p>{{popUP.label}}</p>
      </article>
    </section>
    <section class="popUp__layer" @click="popUP.show = false"></section>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
import axios from "axios";

export default {
    setup() {
        const users = ref([]);
        const match = ref([]);
        const getDataAttribute = async () => {
            const data = await axios.get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json");
            users.value = await data.data;
            match.value = users.value.filter(element => element.sport == "Rowing" || element.sport == "Shooting" || element.sport == "Swimming");
        };
        const popUP = ref({})
        const OpenPopUp = ( title, label ) => {
          popUP.value.title = title
          popUP.value.label = label
          popUP.value.show =  true
          console.log("first")
        }
        getDataAttribute();
        return {
            users,
            match,
            popUP,
            OpenPopUp
        };
    },
}
</script>

<style lang="scss" scoped>
.atletas{
  &__table {
    &__container{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      article{
        width: 250px;
        border: 1px solid rgba(58, 58, 58, 0.2);
        border-radius: 10px;
        background: #FCFCFC;
        padding: 20px;
        cursor: pointer;
        &:hover{
          box-shadow: 10px 1px 10px 1px rgba(58, 58, 58, 0.2);
        }
      }
    }
    &__title{
      margin-bottom: 40px;
    }
  }
}
.popUp {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  &__container {
    position: relative;
    z-index: 8;
    max-width: 700px;
    padding: 30px;
    background-color: white;
    border-radius: 16px;
    font-family: $main-font;
    &__title {
      text-align: center;
      h3 {
        margin-bottom: 0;
        font-size: 30px;
        font-weight: 600;
        color: #0d1520;
      }
      img {
        margin-bottom: 15px;
      }
    }
  }
  &__layer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 6, 38, 0.8);
  }
}
</style>
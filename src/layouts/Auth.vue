<template>
  <section class="authLayout">
    <article class="authLayout__img">
      <img src="https://images.pexels.com/photos/3802666/pexels-photo-3802666.jpeg?cs=srgb&dl=pexels-will-mu-3802666.jpg&fm=jpg" alt="">
    </article>
    <article class="authLayout__contain">
        <router-view />
    </article>
  </section>
    
</template>

<script>

export default {
};
</script>

<style lang="scss" scoped>
  .authLayout{
    height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-columns: 60% 40%;
    @media (max-width: 780px){
      height: auto;
      grid-template-columns: 1fr;
    }
    &__img{
      @media (max-width: 780px){
        display: none;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__contain{
      padding-top: 80px;
      text-align: center;
      background-color: white;
      @media (max-width: 780px){
        padding-top: 0px;
      }
      img{
        max-width: 200px;
        margin: 0 auto;
      }
    }
  }
</style>



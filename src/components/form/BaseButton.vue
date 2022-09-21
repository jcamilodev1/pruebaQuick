<template>
  <button>{{label}}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped>
  button{
    display: block;
    width: 100%;
    margin: 25px 0;
    padding: 10px;
    border-radius: 8px;
    background: linear-gradient(180deg, #fcd6a4 0%, #fcb100 100%);
    color: white;
    font-weight: 600;
    border: none;
    font-size: 14px;
    cursor: pointer;
    transition: all 1s;
    &:hover{
      background: linear-gradient(180deg, #fcd6a485 0%, #fcb100 100%);
      transition: all 1s;
    }
  }
</style>
<template>
  <div>
      <div>我是Profile组件</div>
    <h2>{{this.$route.query.name}}</h2>
  </div>
</template>

<script>
export default {
    name:"Profile",
    data(){
        return{

        }
    },
}
</script>

<style>

</style>
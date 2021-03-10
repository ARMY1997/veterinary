<template>
<div class="wrapper">
<div id="app">
<header>
    <div class="navbar">
        <div class="container">
            <div class="navbar-content">
                <router-link class="header-logo" to="/">UImini</router-link>
            <div class="button-burger" @click="menyShow=!menyShow">
                <span class="line line-1"></span>
                <span class="line line-2"></span>
                <span class="line line-3"></span></div>
            <div class="navbar-list__wrapper">
                <ul class="navbar-list">
                <li class="navbar-item" v-for="link in linkMenu" :key="link.title"><router-link class="navbar-link" :to="`${link.url}`">{{link.title}}</router-link></li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</header>
</div>
</div>
</template>

<script>
export default {
  data(){
      return{
          menyShow:false,
          linkMenu:[
              {title:'Home',url:'/'},
              {title:'Login',url:'./Auth/Login.vue'},
              {title:'Registration',url:'./Auth/Registration.vue'}
          ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
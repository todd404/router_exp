<template>
  <div id="app">
    <div id="nav">
      <router-link to="/message?msg=待付款商品信息">待付款</router-link> |
      <router-link to="/message?msg=待发货商品信息">待发货</router-link> |
      <router-link to="/message?msg=待收货商品信息">待收货</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
    <div id="app">
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body {
    margin: 0 0;
    padding: 0 0;
    letter-spacing: 2px;
  }
  div {
    margin: 0 0;
    padding: 0 0;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  /*li {*/
  /*  display: inline-block;*/
  /*  !*margin: 0 18px;*!*/
  /*}*/
  a {
    color: #42b983;
  }
  .hand {
     cursor: pointer
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(255,255,255,1);
  /*color: inherit;*/
  background-color: #1C1C1C;
  width: 100%;
}
  .aboutUs {
    height:20px;
    font-size:20px;
    font-family:NotoSansHans-bold;
    /*font-weight:bold;*/
    color:rgba(28,28,28,1);
    padding: 3px 3px;
  }
</style>

<style >
    @import '../static/font/font.css';
</style>

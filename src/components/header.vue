<template>
  <div class="nav">
    <router-link to="/"> Home</router-link>
    <router-link to="/add">Add Todo</router-link>
    <a @click="handleLogOut()" href="#">Logout</a>
  </div>
    
</template>

<script>
    export default{
        name: "Header",
        methods:{
            handleLogOut(){
                localStorage.clear();
            }
        }

    }
</script>

<style scoped>

.nav a {
    padding: 10px;
    color: black;
    float: left;
    text-align: center;
    text-decoration: none;
}

.nav a:hover{
    color: white;
    background-color: aqua;
}

.nav{
    background-color: skyblue;
    overflow: hidden;
    padding: 20px;
}

</style>

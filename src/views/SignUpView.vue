<template>
    <img class="logo" src= "../assets/logo.png">
    <h1>SignUp</h1>

    <div class="register" >
        <input v-model="email"  type="text" placeholder="Enter Email"/>
        <input v-model="password" type="password" placeholder="Enter Password"/>

        <button @click="handleSignUp"> 
            SignUp
        </button>
    </div>
    
</template>

<script>
export default {
    name: 'SignUpView',
    data(){
        return {
            email: '',
            password: ''
        }  
    },
    methods: {
        async handleSignUp(){
            console.log(this.email)
            alert("Successfully  Login");
            localStorage.setItem("user-info", "logged")
            this.$router.push({name: 'home'})
        }

    },
    mounted(){
        let islogged = localStorage.getItem("user-info")
        if (islogged){
             this.$router.push({name: 'home'})
        }
    }
 
}
</script>

<style scoped>
.logo{
    width: 100px;
}

.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    margin: auto;
    border: 1px solid skyblue;
    margin-bottom: 30px;
    display: block;

}

.register button{
     width: 320px;
    height: 40px;
    color: aliceblue;
    background-color: skyblue;
    border: 1px solid skyblue;

}
</style>

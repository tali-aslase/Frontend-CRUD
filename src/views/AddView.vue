<template>
    <Header/>
    <label>
        Type title of todo
    </label>
    <input v-model="title" type="text" placeholder="">

    <!-- <button @click="createTodo" :disabled="isempty">
        Create Todo
    </button> -->

     <button @click="submitForm" :disabled="isTitleEmpty">Submit</button>

</template>

<script>
import axios from "axios";
import Header from '../components/header.vue'

export default{
    name: "AddView",
    components: {
        Header
    },    
    data(){
        return{
            title: "",
        }
    },
    computed:{
        isTitleEmpty(){
             return this.title.trim() === '';
        }
    },
    methods:{
        submitForm(){
            axios.post('http://localhost:3000/todos', {title: this.title}).then(response =>{
                if (response.status == 201 ){
                    this.title = "";
                    alert("Todo was succcessfully created")
                }
            })     
        }
    }

}
</script>

<template>
    <Header/>

    <table class="table">
    <thead>
        <tr>
            <th>Todo ID</th>
            <th>Todo Content </th>
            <th>Actions </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="todo in todos" :key="todo.id">

            <td>{{ todo.id }}</td>
            <td>{{ todo.title }}</td>
            <td>
                <button @click="deleteTodo(todo.id)">Delete</button>
                 <router-link :to="'/update/' + todo.id">Update Todo</router-link>

                  <!-- <router-link to='update'>Update Todo</router-link> -->
            </td>
        </tr>
    </tbody>
    </table>
</template>

<script>
import axios from "axios";
import Header from "../components/header.vue"

export default {
    name: "HomeView",
    data(){
        return {
            todos: null,
        }
    },
    components: {
        Header
    },
    methods:{
        deleteTodo(id){
            axios
            .delete(`http://localhost:3000/todos/${id}`)
            .then(response => {
                this.todos =  this.todos.filter(todo => todo.id!= id);
            })
        },
        updateTodo(id){ 
            
            




        }
    },
    mounted () {
    axios
    .get('http://localhost:3000/todos')
    .then(response => (this.todos = response.data))
  }
}
</script>
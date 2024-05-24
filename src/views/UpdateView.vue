<template>
    <Header/>
    <h1>{{ title }}</h1>
    <label>Type title of todo</label>
    <input v-model="title" type="text" placeholder="">
    <button @click="submitForm" :disabled="isTitleEmpty">Submit</button>
</template>

<script>
import Header from '../components/header.vue'
import axios from "axios";

export default {
    name: "UpdateTodo",
    components: {
        Header
    },
    data() {
        return {
            todo: null,
            title: ''

        
        };
    },
    computed: {
        isTitleEmpty() {
            return this.title.trim() === '';
        }
    },
    mounted() {
        this.fetchTodo();
    },
    methods: {
        fetchTodo() {
            const todoId = this.$route.params.id;
            axios.get(`http://localhost:3000/todos/${todoId}`)
                .then(response => {
                    if (response.status === 200) {
                        this.todo = response.data;
                        this.title = response.data.title;
                        this.id
                    } else {
                        console.error("Failed to fetch todo");
                    }
                })
                .catch(error => {
                    console.error("Error fetching todo:", error);
                });
        },
        submitForm() {
            axios.put(`http://localhost:3000/todos/${this.todo.id}`, {title: this.title})
                    .then(response => {
                        if (response.status === 200) {
                           alert("Todo was successfully updated")
                            this.$router.push({ name: 'home' });
                        } else {
                            console.error("Failed to fetch todo");
                        }
                    })
                    .catch(error => {
                        console.error("Error fetching todo:", error);
                    });
        }
    }
};
</script>

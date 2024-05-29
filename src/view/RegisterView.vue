<template>
    <div class="container-2">
        <div class="container">
            <h2 class="tittle">Registrar Usuario</h2>
            <div class="input-container">
                <input type="text" placeholder="Username" v-model="username">
                <input type="password" placeholder="Password" v-model="password">
            </div>
            <button class="btn" @click="createUser()">Registrarse</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            async createUser() {
                try {
                    let result = await axios.post("http://localhost:3000/users", {
                        username: this.username,
                        password: this.password
                    })

                    if (result.status === 201) {
                        this.$router.push({name:'login'});
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }
</script>

<style scoped>
    .container-2 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 22%;
    }
    .tittle {
        text-align: center;
        margin-bottom: 24px;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input {
        margin-bottom: 8px;
    }
    .input-container {
        margin-bottom: 16px;
    }
</style>
<template>
    <div class="container-2">
        <div class="container">
            <h2 class="tittle">Iniciar Sesion</h2>
            <div class="input-container">
                <input type="text" placeholder="Username" v-model="username">
                <input type="password" placeholder="Password" v-model="password">
            </div>
            <button class="btn" @click="iniciarSesion()">Iniciar Sesion</button>
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
            async iniciarSesion() {
                try {
                    let result = await axios.get(`http://localhost:3000/users?username=${this.username}&password=${this.password}`);
                    if (result.status === 200) {
                        this.$router.push({name:"landingPage"});
                    } else {
                        alert("usuario no encontrado")
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
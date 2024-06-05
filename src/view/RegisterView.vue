<template>
    <div class="background"></div>
    <div class="register-wrapper">
        <div class="register-container">
            <h2 class="register-title">Registrar Usuario</h2>
            <div class="input-container">
                <input type="text" placeholder="Username" v-model="username">
                <input type="password" placeholder="Password" v-model="password">
            </div>
            <button class="btn" @click="createUser()">Registrarse</button>
            <router-link to="/login">¿Ya tienes cuenta?</router-link>
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
    .register-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 22%;
    }
    .register-title {
        text-align: center;
        margin-bottom: 24px;
    }
    .register-container {
        display: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgb(45, 45, 45);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 220px;
        padding: 32px;
    }
    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("../assets/fondo.png") no-repeat center center/cover;
        opacity: 0.5;
        z-index: -1;
    }
    input {
        margin-bottom: 8px;
    }
    .input-container {
        margin-bottom: 16px;
    }
    .btn {
        width: 200px;
    }
    a {
        margin-top: 10px;
    }
</style>
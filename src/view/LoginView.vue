<template>
    <div class="background"></div>
    <div class="login-wrapper">
        <div class="login-container">
            <h2 class="login-title">Iniciar Sesion</h2>
            <div class="input-container">
                <input type="text" placeholder="Username" v-model="username">
                <input type="password" placeholder="Password" v-model="password">
            </div>
            <button class="btn" @click="iniciarSesion()">Iniciar Sesion</button>
            <router-link to="/register">Registrarse</router-link>
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
                if (!this.username || !this.password) {
                    alert('Por favor, completa todos los campos.');
                    return;
                }
                try {
                    let result = await axios.get(`http://localhost:3000/users?username=${this.username}&password=${this.password}`);
                    if (result.status === 200 && result.data.length > 0) {
                        localStorage.setItem("usuarioLogeado", JSON.stringify(result.data[0]));
                        this.$router.push({path:"/"});
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
    .login-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 22%;
    }
    .login-title {
        text-align: center;
        margin-bottom: 24px;
    }
    .login-container {
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
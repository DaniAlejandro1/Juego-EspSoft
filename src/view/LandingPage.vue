<template>
    <div class="background"></div>
    <NavComponent/>
    <div class="content-container">
        <div class="title">
            <h1 class="title">Fury of Elements</h1>
        </div>
        <div>
            <p>Fury of Elements es un juego de pelea 1v1 que enfrenta a diversos guerreros legendarios en épicas batallas por el dominio elemental. En un bosque místico donde el fuego, el hielo y otros elementos chocan, los jugadores pueden elegir entre múltiples personajes únicos, cada uno con sus propias habilidades y estilos de combate.</p>
            <hr>
        </div>
        <div v-if="userStore.estaLogeado">
            <button class="play-btn">Jugar</button>
        </div>
        <div v-else>
            <button class="login-btn" @click="goToLogin">Inicia Sesión para Jugar</button>
        </div>
    </div>
</template>

<script setup>
    import NavComponent from './components/NavComponent.vue';
    import { useUserStore } from '../stores/userStore';
    import { useRouter } from 'vue-router';

    const userStore = useUserStore();
    const router = useRouter();

    const goToLogin = () => {
        router.push({ path: '/login' });
    };
</script>

<style scoped>
    .content-container {
        padding: 20px;
        margin: 20px;
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
    .title {
        text-align: center;
        margin-bottom: 10px;
    }
    .play-btn, .login-btn {
        display: block;
        margin: 20px auto;
        padding: 15px 30px;
        font-size: 1.5em;
        background-color: #2e2163;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: transform 0.3s ease, background-color 0.3s ease;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
    .play-btn:hover, .login-btn:hover {
        background-color: #404c9d;
        transform: scale(1.05);
    }
    a {
        margin-left: 8px;
    }
</style>
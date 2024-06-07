<template>
    <div>
        <nav class="navbar">
            <router-link to="/" class="nav-link">Inicio</router-link>
            <router-link to="/wiki" class="nav-link">Wiki</router-link>  
            <router-link to="/records" class="nav-link">Records</router-link> 
            <router-link to="/login" class="nav-link" v-if="!userStore.estaLogeado">Iniciar Sesion</router-link>
            <router-link to="/register" class="nav-link">Crear Cuenta</router-link> 
            <a @click="cerrarSesion" class="nav-link" v-if="userStore.estaLogeado">Cerrar Sesion</a>
        </nav>
    </div>
</template>

<script setup>
    import { useUserStore } from '../../stores/userStore';

    const userStore = useUserStore();

    const cerrarSesion = () => {
        userStore.logout();
        this.$router.push({path:"/"});
    };
</script>

<style scoped>
    .navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background-color: rgb(45, 45, 45);
        margin-bottom: 20px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        border-bottom: 8px solid rgb(46, 46, 104);
    }
    .nav-link {
        text-decoration: none;
        color: white;
        margin: 0 15px;
        padding: 10px 20px;
        transition: background-color 0.3s ease, color 0.3s ease;
    }
    .nav-link:hover {
        background-color: #535353;
        border-radius: 4px;
    }
</style>
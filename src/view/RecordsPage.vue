<template>
    <div class="background"></div>
    <NavComponent/>
    <div class="container">
        <h1>Records</h1>
        <div>
            {{username}}
        </div>
    </div>
</template>

<script setup>
    import NavComponent from './components/NavComponent.vue';
    import { useUserStore } from '../stores/userStore';
    import { storeToRefs } from 'pinia';

    const userStore = useUserStore();
    const {username} = storeToRefs(userStore);
</script>

<style scoped>
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
</style>
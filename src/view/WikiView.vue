<template>
    <div class="background"></div>
    <NavComponent/>
    <div class="container">
        <h1>Fury of Elements</h1>
        <div>
            <h1>Historia</h1>
            <hr>
            <p>En un mundo donde la magia y la naturaleza se entrelazan, guerreros de tiempos y tierras distantes son convocados por fuerzas místicas a un bosque ancestral. Este bosque, conocido como el Bosque de los Eternos, es un lugar sagrado donde los elementos se manifiestan con una fuerza inigualable. Cada guerrero trae consigo el poder de un elemento primordial, ya sea fuego, hielo, tierra, agua, viento, o electricidad. Estos combatientes deben enfrentarse en épicas batallas para determinar quién tiene el dominio sobre el Bosque de los Eternos y su energía elemental.</p>
        </div>
        <div>
            <h1>Personajes</h1>
            <hr>
            <div>
                <h2>Kaito "El Fénix de Fuego"</h2>
                <p>Kaito fue un samurái respetado en el antiguo Japón, conocido por su valentía y habilidad en combate. Durante una batalla crucial, Kaito fue herido de muerte. En ese momento crítico, un espíritu del fuego se manifestó ante él, ofreciéndole una segunda oportunidad a cambio de convertirse en su anfitrión. Kaito aceptó y renació con el poder del fuego, convirtiéndose en el Fénix de Fuego. Ahora, su espada arde con llamas eternas y puede desatar torrentes de fuego con cada movimiento.</p>
                <img src="../assets/kaito.gif" alt="kaito">
            </div>
            <div>
                <h2>Bjorn "El Guerrero del Hielo"</h2>
                <p>Bjorn era un vikingo legendario, conocido por su fuerza y su lealtad a su clan. Durante una expedición en los fríos territorios del norte, Bjorn y su clan fueron atacados por un dragón de hielo. Al derrotarlo, Bjorn reclamó su hacha, la cual estaba imbuida con el poder del hielo eterno. Desde entonces, Bjorn ha sido conocido como el Guerrero del Hielo, utilizando su hacha para congelar a sus enemigos y proteger a su gente. Su hacha tiene la habilidad de invocar tormentas de nieve y crear barreras de hielo.</p>
                <img src="../assets/bjorn.gif" alt="kaito">
            </div>
        </div>
        <div>
            <h1>Bosque de los Eternos</h1>
            <hr>
            <p>El Bosque de los Eternos es el campo de batalla donde diversos guerreros se enfrentan. Este lugar está lleno de antiguos árboles gigantescos, cuyas raíces y ramas parecen estar vivas. La magia elemental es fuerte aquí, y los elementos como el fuego, el hielo, la tierra, y el viento reaccionan de maneras impredecibles, creando un entorno en constante cambio. El bosque es también el hogar de espíritus elementales que pueden interferir en las batallas, añadiendo un nivel extra de desafío para los combatientes.</p>
        </div>
    </div>
</template>

<script>
    import NavComponent from './components/NavComponent.vue';
    export default {
        components: {
            NavComponent
        }
    }
</script>

<style scoped>
    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("../assets/fondo.png") no-repeat center center/cover;
        background-attachment: fixed;
        opacity: 0.5;
        z-index: -1;
    }
    .content-container {
        padding: 20px;
        margin: 20px;
    }
</style>
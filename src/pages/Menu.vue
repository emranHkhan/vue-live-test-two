<script setup>
import { reactive } from 'vue'

const coffees = reactive([
    "Espresso",
    "Americano",
    "Cappuccino",
    "Latte",
    "Macchiato",
    "Mocha",
    "Flat White",
    "Affogato",
    "Cold Brew",
    "French Press",
    "Pour Over",
    "Turkish Coffee"
])

const showCoffeeName = (coffee) => {
    alert(coffee)
}

</script>

<template>
    <div v-for="coffee in coffees" :key="coffee" id="coffee">
        <span @click="showCoffeeName(coffee)">{{ coffee }}</span>
    </div>
</template>

<style scoped>
#coffee {
    margin: 15px 0;
    cursor: pointer;
}

#coffee>span:hover {
    padding: 5px;
    border: 2px solid white;
}
</style>
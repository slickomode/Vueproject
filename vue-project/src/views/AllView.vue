<script setup>
</script>

<template>
    <div class="propcontainer">
        <div class="welcome-container">
            <h2 class="welcome-message">{{ welcomeMessage }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        welcomeMessage: {
            type: String,
            required: true
        }
    },
}
</script>


<style>
.propcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

}

.welcome-message {
    font-size: 36px;
    font-weight: bold;
    color: rgb(255, 255, 255);

}

.welcome-container {
    text-align: center;
    background: rgb(21, 145, 147);
    background: linear-gradient(0deg, rgba(21, 145, 147, 1) 0%, rgba(24, 177, 101, 1) 100%);
    padding: 15px;
    border-radius: 5px;
}
</style>

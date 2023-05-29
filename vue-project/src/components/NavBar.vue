<template>
    <nav :class="{ active: isSidebarOpen }">
        <div class="nav-bar">
            <i class="bx bx-menu sidebarOpen" @click="toggleSidebar"></i>
            <span class="logo navLogo">
                <router-link to="/">CountrySearch</router-link>
            </span>

            <div class="menu">
                <ul class="nav-links">
                    <li>
                        <router-link to="/search">Search</router-link>
                        <router-link to="/countries">Countries</router-link>
                    </li>
                </ul>
            </div>

            <div class="darkLight">
                <div class="dark-light" @click="toggleDarkMode">
                    <i class="bx bx-moon moon" :class="{ active: isDarkMode }"></i>
                    <i class="bx bx-sun sun" :class="{ active: !isDarkMode }"></i>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isSidebarOpen: false,
            isDarkMode: false,
        };
    },
    mounted() {
        const getMode = localStorage.getItem("mode");
        if (getMode && getMode === "dark-mode") {
            this.toggleDarkMode();
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            const mode = this.isDarkMode ? "dark-mode" : "light-mode";
            document.body.classList.toggle("dark", this.isDarkMode);
            localStorage.setItem("mode", mode);
        },
    },
};
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

.container {
    background-color: var(--container-color);
    width: 80vw;
    max-width: 45em;
    padding: 3em 2.5em;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 0.62em;
    box-shadow: 0 1.25em 1.8em rgba(8, 21, 65, 0.25);

}

.search {
    display: grid;
    grid-template-columns: 9fr 3fr;
    gap: 1.25em;
    margin-bottom: 45px;
}

.search button {
    font-size: 15px;
    background-color: var(--nav-color);
    color: #f0e5e5;
    padding: 10px;
    margin-left: 25px;
    border: none;
    border-radius: 15px;

    position: relative;
    background-color: var(--nav-color);

    -webkit-transition-duration: 0.4s;
    /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
}

.search input {
    font-size: 25px;
    padding: 0 0.62em;
    border: none;
    border-bottom: 2px solid #3d3e42;
    outline: none;
    color: #222a43;
    background-color: var(--container-color);
}

.container .img {
    display: block;
    width: 45%;
    min-width: 7.5em;
    margin: 18px auto 12px auto;
    box-shadow: 0 1.25em 1.8em rgba(8, 21, 65, 0.25);
}

.container h2 {
    color: #000000;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 20px;
}

.data {
    margin-bottom: 1em;
}

.container h4 {
    font-weight: 500;
    color: #222a43;
}

.container h3 {
    text-align: center;
    margin-top: 40px;
    font-size: 25px;
    color: #ff465a;
}


:root {
    --body-color: #eceff5;
    --nav-color: #4fb96f;
    --side-nav: #010718;
    --text-color: #FFF;
    --search-bar: #F2F2F2;
    --search-text: #aebcf7;
    --container-color: #e7e8ec;
}

body.dark {
    --body-color: #18191A;
    --nav-color: #242526;
    --side-nav: #242526;
    --text-color: #CCC;
    --search-bar: #242526;
    --container-color: #d4d6dd;
}

body {
    height: 100vh;
    background-color: var(--body-color);
}

nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 70px;
    width: 100%;
    background-color: var(--nav-color);
    z-index: 100;
}

body.dark nav {
    border: 1px solid #393838;

}

nav .nav-bar {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: var(--nav-color);
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

nav .nav-bar .sidebarOpen {
    color: var(--text-color);
    font-size: 25px;
    padding: 5px;
    cursor: pointer;
    display: none;
}

nav .nav-bar .logo a {
    font-size: 25px;
    font-weight: 500;
    color: var(--text-color);
    text-decoration: none;
}

.menu .logo-toggle {
    display: none;
}


.nav-bar .nav-links {
    display: flex;
    align-items: center;
    margin: 0 190px 0 50px;
}

.nav-bar .nav-links li {
    margin: 0 5px;
    list-style: none;
}

.nav-links li a {
    position: relative;
    font-size: 17px;
    font-weight: 400;
    color: var(--text-color);
    text-decoration: none;
    padding: 10px;
}

.nav-bar .darkLight {
    display: flex;
    align-items: center;
}

.darkLight .dark-light {
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
}

.dark-light i {
    position: absolute;
    color: var(--text-color);
    font-size: 22px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.dark-light i.sun {
    opacity: 0;
    pointer-events: none;
}

.dark-light.active i.sun {
    opacity: 1;
    pointer-events: auto;
}

.dark-light.active i.moon {
    opacity: 0;
    pointer-events: none;
}

button:after {
    content: "";
    background: var(--container-color);
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

button:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}
</style>

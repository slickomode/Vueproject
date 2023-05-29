<template>
    <div>
        <section class="section-one">
            <div class="container">
                <div class="search">
                    <input type="text" v-model="countryName" placeholder="Enter a country name here..." />
                    <button @click="search">Search</button>
                </div>
                <div id="result">
                    <img :src="countryData.flag" class="img" v-if="countryData.flag" />
                    <h2>{{ countryData.name }}</h2>
                    <div class="wrapper" v-if="countryData.capital">
                        <div class="data">
                            <h4>Capital:</h4>
                            <span>{{ countryData.capital }}</span>
                        </div>
                    </div>
                    <div class="wrapper" v-if="countryData.population">
                        <div class="data">
                            <h4>Population:</h4>
                            <span>{{ countryData.population }}</span>
                        </div>
                    </div>
                    <div v-if="errorMessage">
                        <h3>{{ errorMessage }}</h3>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countryName: '',
            countryData: {},
            errorMessage: '',
            filteredCountries: []
        };
    },
    methods: {
        search() {
            const finalURL = `https://restcountries.com/v3.1/name/${this.countryName}`;
            fetch(finalURL)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        this.countryData = {
                            flag: data[0].flags.svg,
                            name: data[0].name.common,
                            capital: data[0].capital[0],
                            population: data[0].population
                        };
                        this.errorMessage = '';
                    } else {
                        this.errorMessage = 'Please enter a valid country name.';
                        this.countryData = {};
                    }
                })
                .catch(() => {
                    if (this.countryName.length === 0) {
                        this.errorMessage = 'The input field cannot be empty.';
                    } else {
                        this.errorMessage = 'Error occurred while fetching data.';
                    }
                    this.countryData = {};
                });
        }
    }
};
</script>

<style scoped>
:root {
    --body-color: #eceff5;
    --nav-color: #4fb96f;
    --side-nav: #010718;
    --text-color: #fff;
    --search-bar: #f2f2f2;
    --container-color: #e7e8ec;
}

body.dark {
    --body-color: #18191a;
    --nav-color: #242526;
    --side-nav: #242526;
    --text-color: #ccc;
    --search-bar: #242526;
    --container-color: #d4d6dd;
}

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

.section-one {
    height: 100vh;
}
</style>

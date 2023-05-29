<template>
    <div class="country-grid-container">
        <div class="country-grid">
            <div class="country" v-for="country in sortedCountries" :key="country.name.common">
                <img :src="country.flags.svg" class="country-flag" />
                <h3 class="country-name">{{ country.name.common }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            countries: [], // Array to store the fetched countries
        };
    },

    computed: {
        sortedCountries() {
            // Sort the countries by name
            return this.countries.sort((a, b) =>
                a.name.common.localeCompare(b.name.common)
            );
        },
    },
    mounted() {
        const apiUrl = 'https://restcountries.com/v3.1/all'; // Replace with your API endpoint

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.countries = data;
            })
            .catch((error) => {
                console.error('Error fetching countries:', error);
            });
    },
};
</script>

<style scoped>
.country-grid-container {
    margin-top: 70px;
    height: auto;
    /* Adjust the height as needed */
    overflow-y: auto;

    margin-bottom: 20px;
}

.country-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.country {
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.country-flag {
    width: 100%;
    height: auto;
    margin-bottom: 5px;
}

.country-name {
    margin-top: 10px;
}

h3 {
    margin-top: 0;
}
</style>

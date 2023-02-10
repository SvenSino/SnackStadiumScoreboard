<template>
    <div class="columns">
        <div class="c1 teamScore">
            <p class="teamScoreLeft">{{ store.score1 }}</p>
        </div>
        <div class="c2 middle">
            <div>
                <p><span>{{ store.currentMinute }}'</span></p>
            </div>
            <div>
                <p>Q{{ store.currentPeriod }}</p>
            </div>
        </div>
        <div class="c3 teamScore">
            <p class="teamScoreRight">{{ store.score2 }}</p>
        </div>
    </div>

</template>a
<script setup>
import { dataStore } from '@/stores/data'
import { onMounted } from 'vue';
const store = dataStore()
const API_URLSB = "https://bwin.hs-edge.net/api/live/de/match-events-by-all/pv1/ma9549916/mf-no/om-current/ls0/lo1";
//current_period	"game-start" Q1

function getData() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {


            console.log(data[0])



        })
        .catch(error => {
            console.error("Error fetching live scores:", error);
        });
}

function getLiveScores() {
    fetch(API_URLSB)
        .then(response => response.json())
        .then(data => {
            // Extract the score data from the API response

            store.score1 = data[0].competition[0].season[0].round[0].match[0].match_result[0].match_result
            store.score2 = data[0].competition[0].season[0].round[0].match[0].match_result[1].match_result
            store.currentMinute = data[0].competition[0].season[0].round[0].match[0].current_minute

            if (data[0].competition[0].season[0].round[0].match[0].current_period === 'game-start') {
                store.currentPeriod = 1
            }

            if (data[0].competition[0].season[0].round[0].match[0].current_period === 'second-quarter-start') {
                store.currentPeriod = 2
            }

            if (data[0].competition[0].season[0].round[0].match[0].current_period === 'third-quarter-start') {
                store.currentPeriod = 3
            }

            if (data[0].competition[0].season[0].round[0].match[0].current_period === 'fourth-quarter-start') {
                store.currentPeriod = 4
            }
        })
        .catch(error => {
            console.error("Error fetching live scores:", error);
        });
}

onMounted(() => {
    setInterval(getLiveScores, 3000)
    getLiveScores();
}) 

</script>
<style>
@font-face {
    font-family: 'beba';
    src: url('src/assets/BebasNeue-Regular.ttf') format('truetype');
}

.columns {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
}

.c1 {
    display: flex;
    flex: 40%;
}

.c2 {
    display: flex;
    flex: 20%;
}

.c3 {
    display: flex;
    flex: 40%;
}

.teamScore {
    display: flex;
    align-items: flex-end;
    color: rgb(0, 0, 0);
    font-size: 10em;
    justify-content: center;
    margin-bottom: 40px;
}


.teamScoreLeft {
margin-left: 30px;


}

.teamScoreRight {
margin-right: 30px;
}



.middle {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 7em;
    font-family: beba;
    margin-top: 240px;
}

.middle div {

    margin-bottom: 20px;
}


</style>
<template>
  <div id="main2">
    <h1 v-if="!raceNow && !ready">help Tom to get his revenge!</h1>
    <div v-if="!raceNow && !ready" class="startDiv">
      <sui-button size="huge" animated @click.prevent="start">
        <sui-button-content visible>START</sui-button-content>
        <sui-button-content hidden>
          <sui-icon name="play" />
        </sui-button-content>
      </sui-button>
    </div>
    <br />
    <p
      v-if="!raceNow && !ready"
      style="text-align: center !important; font-weight: bold;"
    >GAME RULE'S</p>
    <div v-if="!raceNow && !ready" class="rule">
      <p>1. hit the fastest mouse = ++5 point</p>
      <p>2. hit another mouse = ++1 point</p>
      <p>3. hit Tom the cat = --10 point</p>
      <p>4. hit zonk mouse = got freeze 5s</p>
    </div>
    <h1 v-if="!raceNow && !ready">lets catch Jerry the "tikoes"</h1>
    <Countdown v-if="ready"></Countdown>
    <Race id="race" v-if="raceNow"></Race>
    <!-- <audio autoplay loop> -->
    <!-- <source src="../assets/Final Fantasy VII Chocobo Theme.mp3" type="audio/mp3" /> -->
    <!-- </audio> -->
  </div>
</template>

<script>
import Countdown from "@/components/Countdown";
import Race from "@/components/Race";
import db from "../config/firestore";
export default {
  name: "Main",
  components: {
    Countdown,
    Race
  },
  data() {
    return {
      ready: false,
      raceNow: false
    };
  },
  methods: {
    start() {
      this.ready = true;
      db.collection("rooms")
        .doc(this.$store.state.roomID)
        .update({ status: true })
        .then(() => {
          // this.started = true
          // this.check = true
          this.$store.commit("UPDATE_STATUS", true);
        })
        .catch(err => {
          this.$store.commit("UPDATE_STATUS", false);
        });
      setTimeout(this.race, 3500);
    },
    race() {
      this.ready = false;
      this.raceNow = true;
    }
  }
};
</script>

<style scoped>
.rule {
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid black;
  padding: 10px;
}
p {
  letter-spacing: 0.12em;
  font-size: 15px;
}
.rule p {
  margin: 0px;
  padding: 0px;
}
#main2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.startDiv {
  height: 46vh;
  width: 29.94%;
  background-image: url("https://media.giphy.com/media/amWGMfliqCnjq/giphy.gif");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 800px) {
  #main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .startDiv {
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 50%;
    background-image: url("https://media.giphy.com/media/amWGMfliqCnjq/giphy.gif");
  }
}
</style>

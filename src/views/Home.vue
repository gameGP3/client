<template>
  <div>
    <div id="homepage">
      <img
        src="../assets/giphy.gif"
        alt
        style="width:250px; height:200px; margin-top:50px"
        @click="backToHome"
      />
      <h1>Tikoes !</h1>
      <h3>the best of enemies</h3>
      <UsernameForm></UsernameForm>
    </div>
  </div>
</template>

<script>
import db from "../config/firestore";
import UsernameForm from "../components/UsernameForm";
import router from "../router";

export default {
  name: "Home",
  components: {
    UsernameForm
  },
  data() {
    return {
      name: "",
      user: "",
      roomID: "",
      score: 0
    };
  },
  methods: {
    show() {
      db.collection("rooms")
        .doc(this.$store.state.roomID)
        .onSnapshot(querySnapshot => {
          let data = querySnapshot.data();
          console.log(data, "isi data");
        });
    },
    data() {
      return {
        name: "",
        user: "",
        roomID: "",
        score: 0
      };
    },
    methods: {
      backToHome() {
        location.reload();
      },
      show() {
        db.collection("rooms")
          .doc(this.$store.state.roomID)
          .onSnapshot(querySnapshot => {
            let data = querySnapshot.data();
            console.log(data, "isi data");
          });
      },
      createRoom() {
        this.$store.dispatch("createRoom", this.name);
        // this.name = ''
      },
      joinRoom() {
        let payload = {
          id: this.roomID,
          user: this.name
        };
        this.$store.dispatch("joinRoom", payload);
      },
      updateScore() {
        let payload = {
          id: localStorage.getItem("roomID"),
          score: 5,
          username: this.name
        };
        console.log(payload);
        this.$store.dispatch("updateScore", payload);
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css?family=Caveat+Brush|Covered+By+Your+Grace|Gloria+Hallelujah|Holtwood+One+SC|Patrick+Hand+SC&display=swap");
/* font type mau di ganti kah ? */

#homepage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  height: 100vh;
  width: 100%;
  background-color: rgb(255, 255, 255);
}

h1 {
  font-family: "Caveat Brush", cursive;
  animation: 3s ease 0s infinite alternate none running logos;
  font-size: 70px;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 100px;
}
h3 {
  font-family: "Caveat Brush", cursive;
  animation: 3s ease 0s infinite alternate none running logos;
  font-size: 40px !important;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 100px;
}

@keyframes logos {
  0% {
    color: crimson;
  }
  25% {
    color: orangered;
  }

  50% {
    color: goldenrod;
  }

  75% {
    color: black;
  }

  100% {
    color: darkcyan;
  }
}
</style>

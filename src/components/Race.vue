<template>
  <div id="main" style="border:none;">
    <div id="dashboard">
      <sui-table unstackable class="dash">
        <sui-table-header class="dash-head">
          <!-- <sui-icon name="trophy icon" size="small" /> -->
          <strong class="cursor">SCORE</strong>
        </sui-table-header>
        <sui-table-body style="display: flex; justify-content: space-evenly;">
          <sui-table-row>
            <sui-table-cell>
              <h4 is="sui-header" image>
                <sui-image
                  src="https://semantic-ui.com/images/avatar/small/jenny.jpg"
                  shape="rounded"
                  size="mini"
                />
                <sui-header-content style="font-size:18px;">
                  {{user1}}
                  <sui-header-subheader style="font-size:18px;" placeholder="your score">{{score1}}</sui-header-subheader>
                </sui-header-content>
              </h4>
            </sui-table-cell>
            <sui-table-cell>
              <h4 is="sui-header" image>
                <sui-image
                  src="https://semantic-ui.com/images/avatar/small/steve.jpg"
                  shape="rounded"
                  size="mini"
                />
                <sui-header-content style="font-size:18px;">
                  {{user2}}
                  <sui-header-subheader style="font-size:18px;" placeholder="your score">{{score2}}</sui-header-subheader>
                </sui-header-content>
              </h4>
            </sui-table-cell>
            <sui-table-cell>
              <h4 is="sui-header" image>
                <sui-image
                  src="https://semantic-ui.com/images/avatar/small/elliot.jpg"
                  shape="rounded"
                  size="mini"
                />
                <sui-header-content style="font-size:18px;">
                  {{user3}}
                  <sui-header-subheader style="font-size:18px;" placeholder="your score">{{score3}}</sui-header-subheader>
                </sui-header-content>
              </h4>
            </sui-table-cell>
            <sui-table-cell>
              <h4 is="sui-header" image>
                <sui-image
                  src="https://semantic-ui.com/images/avatar/small/veronika.jpg"
                  shape="rounded"
                  size="mini"
                />
                <sui-header-content style="font-size:18px;">
                  {{user4}}
                  <sui-header-subheader style="font-size:18px;" placeholder="your score">{{score4}}</sui-header-subheader>
                </sui-header-content>
              </h4>
            </sui-table-cell>
          </sui-table-row>
        </sui-table-body>
      </sui-table>
    </div>
    <div id="race2" class="cursor-change" v-if="check">
      <!-- <button class="btn btn-success" id="myida" ref="myida" style="width: 100px; height:100px" v-on:click.prevent="addScore">Nyamuk</button> -->
      <input
        type="image"
        src="https://i.imgur.com/JnlxCId.png"
        style="width:100px; height: 100px"
        id="myidf"
        ref="myidf"
        v-on:click.prevent="addScore(1)"
      />
      <input
        type="image"
        src="https://i.imgur.com/JnlxCId.png"
        style="width:100px; height: 100px"
        id="myidh"
        ref="myidh"
        v-on:click.prevent="addScore(1)"
      />
      <input
        type="image"
        src="https://i.imgur.com/JnlxCId.png"
        style="width:100px; height: 100px"
        id="myidc"
        ref="myidc"
        v-on:click.prevent="addScore(1)"
      />
      <input
        type="image"
        src="https://i.imgur.com/JnlxCId.png"
        style="width:100px; height: 100px"
        id="myidd"
        ref="myidd"
        v-on:click.prevent="addScore(5)"
      />
      <input
        type="image"
        src="https://i.imgur.com/JnlxCId.png"
        style="width:100px; height: 100px"
        id="myide"
        ref="myide"
        v-on:click.prevent="addScore(5)"
      />
      <input
        type="image"
        src="https://i.imgur.com/8uSA4S3.png"
        style="width:100px; height: 100px"
        id="myida"
        ref="myida"
        v-on:click.prevent="addScore(-10)"
      />
      <input
        type="image"
        src="https://i.imgur.com/JnlxCId.png"
        style="width:100px; height: 100px"
        id="myidg"
        ref="myidg"
        v-on:click.prevent="addScore(1)"
      />
      <input
        type="image"
        src="https://i.imgur.com/8uSA4S3.png"
        style="width:100px; height: 100px"
        id="myidb"
        ref="myidb"
        v-on:click.prevent="addScore(-5)"
      />
      <input
        type="image"
        src="https://i.imgur.com/JnlxCId.png"
        style="width:100px; height: 100px"
        id="myidi"
        ref="myidi"
        v-on:click.prevent="pause()"
      />
      <input
        type="image"
        src="https://i.imgur.com/JnlxCId.png"
        style="width:100px; height: 100px"
        id="myidj"
        ref="myidj"
        v-on:click.prevent="pause()"
      />
      <a v-if="!started" v-on:click.prevent="getStarted">Get Started</a>
    </div>
    <div class="end" v-if="!check" @click="backToHome">
      <h1>GAME OVER !</h1>
      <sui-header-content style="font-size:18px;">{{userWinner}} is winner</sui-header-content>
      <sui-button value="Home">Home</sui-button>
    </div>
  </div>
</template>

<script>
import db from "../config/firestore";
import router from "../router";
import swal from "sweetalert2";

export default {
  name: "Race",
  data() {
    return {
      score: 0,
      started: false,
      user1: "",
      score1: 0,
      user2: "",
      score2: 0,
      user3: "",
      score3: 0,
      user4: "",
      score4: 0,
      check: true,
      userWinner: ""
    };
  },
  methods: {
    backToHome() {
      router.push("/");
    },
    getStarted() {
      if (this.check) {
        console.log("masuk sini");
        this.started = true;

        function RandomObjectMover(obj, container) {
          console.log(container);
          this.$object = obj;
          this.$container = container;
          this.pixels_per_second = 500;
          this.current_position = {
            x: 0,
            y: 0
          };
          this.is_running = false;
        }

        // Set the speed of movement in Pixels per Second.
        RandomObjectMover.prototype.setSpeed = function(pxPerSec) {
          this.pixels_per_second = pxPerSec;
        };

        RandomObjectMover.prototype._generateNewPosition = function() {
          // Get container dimensions minus div size
          var availableHeight = this.$container.innerHeight - 250;
          var availableWidth = this.$container.innerWidth - 1000;

          // Pick a random place in the space
          var y = Math.floor(Math.random() * availableHeight);
          var x = Math.floor(Math.random() * availableWidth);

          return { x: x, y: y };
        };

        RandomObjectMover.prototype._calcDelta = function(a, b) {
          var dx = a.x - b.x;
          var dy = a.y - b.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          return dist;
        };

        RandomObjectMover.prototype._moveOnce = function() {
          // Pick a new spot on the page
          var next = this._generateNewPosition();

          // How far do we have to move?
          var delta = this._calcDelta(this.current_position, next);

          // Speed of this transition, rounded to 2DP
          var speed =
            Math.round((delta / this.pixels_per_second) * 100) / 100 || 0.05;
          // console.log(this.current_position, next, delta, speed);

          this.$object.style.transition = "transform " + speed + "s linear";
          this.$object.style.transform =
            "translate3d(" + next.x + "px, " + next.y + "px, 0)";

          // Save this new position ready for the next call.
          this.current_position = next;
        };

        RandomObjectMover.prototype.start = function() {
          if (this.is_running) {
            return;
          }

          // Make sure our object has the right css set
          this.$object.willChange = "transform";
          this.$object.pointerEvents = "auto";

          this.boundEvent = this._moveOnce.bind(this);

          // Bind callback to keep things moving
          this.$object.addEventListener("transitionend", this.boundEvent);

          // Start it moving
          this._moveOnce();

          this.is_running = true;
        };

        RandomObjectMover.prototype.stop = function() {
          if (!this.is_running) {
            return;
          }

          this.$object.removeEventListener("transitionend", this.boundEvent);

          this.is_running = false;
        };

        // Init it
        var a = new RandomObjectMover(document.getElementById("myida"), window);
        var b = new RandomObjectMover(document.getElementById("myidb"), window);
        var c = new RandomObjectMover(document.getElementById("myidc"), window);
        var d = new RandomObjectMover(document.getElementById("myidd"), window);
        var e = new RandomObjectMover(document.getElementById("myide"), window);
        var f = new RandomObjectMover(document.getElementById("myidf"), window);
        var g = new RandomObjectMover(document.getElementById("myidg"), window);
        var h = new RandomObjectMover(document.getElementById("myidh"), window);
        var i = new RandomObjectMover(document.getElementById("myidi"), window);
        var j = new RandomObjectMover(document.getElementById("myidj"), window);
        var k = new RandomObjectMover(document.getElementById("myidk"), window);
        var l = new RandomObjectMover(document.getElementById("myidl"), window);
        a.setSpeed(1500);
        a.start();
        b.setSpeed(1500);
        b.start();
        c.setSpeed(200);
        c.start();
        d.setSpeed(1500);
        d.start();
        e.setSpeed(2000);
        e.start();
        f.start();
        g.start();
        h.start();
        i.start();
        j.start();
      } else {
        db.collection("rooms")
          .doc(this.$store.state.roomID)
          .update({ status: true })
          .then(() => {
            // this.started = true
            this.check = true;
          })
          .catch(err => {
            this.check = false;
            this.started = false;
          });
      }
    },
    addScore(input) {
      console.log(this.$store.state.name);
      let payload = {
        id: localStorage.getItem("roomID"),
        score: input,
        username: this.$store.state.name
      };
      console.log(payload);
      this.$store.dispatch("updateScore", payload);
    },
    pause() {
      let timerInterval;
      swal
        .fire({
          title: "Upppsssss Zonkk!",
          html: "Sorry Gaes you have to wait <b></b> milliseconds.",
          timer: 5000,
          timerProgressBar: true,
          allowOutsideClick: false,
          imageUrl:
            "https://media1.tenor.com/images/97deb53d23c58a7b3152bd41bb1919df/tenor.gif?itemid=15288298",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
          onBeforeOpen: () => {
            swal.showLoading();
            timerInterval = setInterval(() => {
              swal
                .getContent()
                .querySelector("b").textContent = swal.getTimerLeft();
            }, 100);
          },
          onClose: () => {
            clearInterval(timerInterval);
          }
        })
        .then(result => {
          if (
            /* Read more about handling dismissals below */
            result.dismiss === swal.DismissReason.timer
          ) {
            console.log("I was closed by the timer"); // eslint-disable-line
          }
        });
    }
  },
  created() {
    db.collection("rooms")
      .doc(this.$store.state.roomID)
      .onSnapshot(querySnapshot => {
        let temp = querySnapshot.data();
        console.log(temp);
        this.check = temp.status;
        this.status = temp.status;
        if (this.check && this.status) {
          console.log(this.check);
          console.log(this.status);
          this.getStarted();
          if (temp.member0 !== undefined) {
            this.user1 = temp.member0.username;
            this.score1 = temp.member0.score;
            this.score = temp.member0.score;
            this.userWinner = temp.member0.username;
          }
          if (temp.member1 !== undefined) {
            this.user2 = temp.member1.username;
            this.score2 = temp.member1.score;
            this.score = temp.member1.score;
            this.userWinner = temp.member1.username;
          }
          if (temp.member2 !== undefined) {
            this.user3 = temp.member2.username;
            this.score3 = temp.member2.score;
            this.score = temp.member2.score;
            this.userWinner = temp.member2.username;
          }
          if (temp.member3 !== undefined) {
            this.user4 = temp.member3.username;
            this.score4 = temp.member3.score;
            this.score = temp.member3.score;
            this.userWinner = temp.member3.username;
          }
        }
        console.log(this.score);
        if (this.score > 100) {
          console.log("masuk batas score");
          swal
            .fire({
              title:
                "WINNNNN !!! \n " +
                temp.member0.username +
                " the Real TEAKOESMINATOR ",
              // text: 'Modal with a custom image.',
              imageUrl:
                "https://media.giphy.com/media/3oKIPvvUVKbZ46YW5y/giphy.gif",
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: "Custom image",
              backdrop:
                'rgba(0,0,123,0.4) url("https://i.gifer.com/yC.gif") left top no-repeat'
            })
            .then(() => {
              this.backToHome();
            });
          // db.collection("rooms")
          //   .doc(this.$store.state.roomID)
          //   .update({status: false});
          db.collection("rooms")
            .doc(this.$store.state.roomID)
            .delete()
            .then(() => {
              console.log("room sucessfully deleted");
            })
            .catch(err => {
              console.log("room error deleted !!!");
            });
        }
      });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Caveat+Brush|Covered+By+Your+Grace|Gloria+Hallelujah|Holtwood+One+SC|Patrick+Hand+SC&display=swap");

#main {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.dashboard {
  display: fixed;
  top: 0;
}

* {
  font-family: "Patrick Hand SC";
  color: rgb(209, 157, 16);
  font-weight: bolder;
  width: auto;
}

#race2 {
  position: relative;
  background-image: url("../assets/background.webp");
  background-attachment: fixed;
  background-blend-mode: soft-light;
  background-size: cover;
  background-position-y: 80px;
  width: 100vw;
  height: 87vh;
  /* top: 20vh; */
  overflow: hidden;
}

#race2 input {
  cursor: url("data:image/png;base64,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"),
    auto !important;
}

#id {
  padding: 0;
  margin: 0;
}

#myidc {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#dashboad {
  border: none;
}

.dash {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  border: none;
}

.dash-head {
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  color: rgb(255, 208, 0);
  font-size: 18px;
  padding: 2px;
  border: none;
}

.nyamuk1 {
  border: none;
  width: 70px;
  height: 70px;
  /* background-image: url("../assets/muka.png"); */

  background-size: cover;
}

.nyamuk2 {
  border: none;
  width: 70px;
  height: 70px;

  background-size: cover;
}

.nyamuk3 {
  border: none;
  width: 70px;
  height: 70px;

  background-size: cover;
}

.nyamuk4 {
  border: none;
  width: 70px;
  height: 70px;

  background-size: cover;
  background-position-x: center;
}

.cursor {
  cursor: url("../assets/hammer.svg"), auto;
}
.cursor-change {
}
/* .end{
    margin-top: 200px;
  }

  @media only screen and (max-width: 600px) {
  .end{
    margin: 400px
  }

  } */
</style>

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
                  <sui-header-subheader style="font-size:18px;" placeholder="your score">{{score1}}
                  </sui-header-subheader>
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
                  <sui-header-subheader style="font-size:18px;" placeholder="your score">{{score2}}
                  </sui-header-subheader>
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
                  <sui-header-subheader style="font-size:18px;" placeholder="your score">{{score3}}
                  </sui-header-subheader>
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
                  <sui-header-subheader style="font-size:18px;" placeholder="your score">{{score4}}
                  </sui-header-subheader>
                </sui-header-content>
              </h4>
            </sui-table-cell>
          </sui-table-row>
        </sui-table-body>
      </sui-table>
    </div>
    <div id="race2" v-if="check">
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
          RandomObjectMover.prototype.setSpeed = function (pxPerSec) {
            this.pixels_per_second = pxPerSec;
          };

          RandomObjectMover.prototype._generateNewPosition = function () {
            // Get container dimensions minus div size
            var availableHeight = this.$container.innerHeight - 250;
            var availableWidth = this.$container.innerWidth - 1000;

            // Pick a random place in the space
            var y = Math.floor(Math.random() * availableHeight);
            var x = Math.floor(Math.random() * availableWidth);

            return {x: x, y: y};
          };

          RandomObjectMover.prototype._calcDelta = function (a, b) {
            var dx = a.x - b.x;
            var dy = a.y - b.y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            return dist;
          };

          RandomObjectMover.prototype._moveOnce = function () {
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

          RandomObjectMover.prototype.start = function () {
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

          RandomObjectMover.prototype.stop = function () {
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
            .update({status: true})
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
            swal.fire({
              title: "WINNNNN !!! \n " + temp.member0.username + " the Real TEAKOESMINATOR ",
              // text: 'Modal with a custom image.',
              imageUrl: 'https://media.giphy.com/media/3oKIPvvUVKbZ46YW5y/giphy.gif',
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: 'Custom image',
              backdrop: 'rgba(0,0,123,0.4) url("https://i.gifer.com/yC.gif") left top no-repeat'
            }).then(() => {
              this.backToHome();
            });
            // db.collection("rooms")
            //   .doc(this.$store.state.roomID)
            //   .update({status: false});
            db.collection("rooms")
              .doc(this.$store.state.roomID)
              .delete()
              .then(() => {
                console.log("room sucessfully deleted")
              })
              .catch(err => {
                console.log("room error deleted !!!")
              })
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
    cursor: url("../assets/hammer.svg"), auto !important;
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

  /* .end{
    margin-top: 200px;
  }

  @media only screen and (max-width: 600px) {
  .end{
    margin: 400px
  }

  } */
</style>

<template>
  <div style="border:none;">
    <div id="dashboard">
      <sui-table unstackable class="dash">
        <sui-table-header class="dash-head">
          <!-- <sui-icon name="trophy icon" size="small" /> -->
          <strong>SCORE</strong>
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

                  <sui-header-subheader
                    style="font-size:18px;"
                    placeholder="your score"
                  >{{score1}}</sui-header-subheader>

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

                  <sui-header-subheader
                    style="font-size:18px;"
                    placeholder="your score"
                  >{{score2}}</sui-header-subheader>
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

                  <sui-header-subheader
                    style="font-size:18px;"
                    placeholder="your score"
                  >{{score3}}</sui-header-subheader>
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

                  <sui-header-subheader
                    style="font-size:18px;"
                    placeholder="your score"
                  >{{score4}}</sui-header-subheader>
                </sui-header-content>
              </h4>
            </sui-table-cell>
          </sui-table-row>
        </sui-table-body>
      </sui-table>
    </div>

    <div id="race" v-if="check">
      <!-- <button class="btn btn-success" id="myida" ref="myida" style="width: 100px; height:100px" v-on:click.prevent="addScore">Nyamuk</button> -->
      <input
        v-on:click.prevent="addScore(1)"
        id="myida"
        type="image"
        src="https://purepng.com/public/uploads/large/purepng.com-cloudnaturecloudsmoke-9615246757368kjiz.png"
        style="width:100px"
      />

      <input type="image" src="https://purepng.com/public/uploads/large/purepng.com-cloudnaturecloudsmoke-9615246757368kjiz.png" style="width:100px; height: 100px" id="myidb" ref="myidb" v-on:click.prevent="addScore(5)">
      <input type="image" src="https://purepng.com/public/uploads/large/purepng.com-cloudnaturecloudsmoke-9615246757368kjiz.png" style="width:100px; height: 100px" id="myidc" ref="myidc" v-on:click.prevent="addScore(10)">
      <input type="image" src="https://purepng.com/public/uploads/large/purepng.com-cloudnaturecloudsmoke-9615246757368kjiz.png" style="width:100px; height: 100px" id="myidd" ref="myidd" v-on:click.prevent="addScore(12)">
      <input type="image" src="https://purepng.com/public/uploads/large/purepng.com-cloudnaturecloudsmoke-9615246757368kjiz.png" style="width:100px; height: 100px" id="myide" ref="myide" v-on:click.prevent="addScore(15)">
      <input type="image" src="https://purepng.com/public/uploads/large/purepng.com-cloudnaturecloudsmoke-9615246757368kjiz.png" style="width:100px; height: 100px" id="myidf" ref="myidf" v-on:click.prevent="addScore(1)">
      <input type="image" src="https://purepng.com/public/uploads/large/purepng.com-cloudnaturecloudsmoke-9615246757368kjiz.png" style="width:100px; height: 100px" id="myidg" ref="myidg" v-on:click.prevent="addScore(1)">
      <input type="image" src="https://purepng.com/public/uploads/large/purepng.com-cloudnaturecloudsmoke-9615246757368kjiz.png" style="width:100px; height: 100px" id="myidh" ref="myidh" v-on:click.prevent="addScore(1)">
      <input type="image" src="https://purepng.com/public/uploads/large/purepng.com-cloudnaturecloudsmoke-9615246757368kjiz.png" style="width:100px; height: 100px" id="myidi" ref="myidi" v-on:click.prevent="addScore(1)">
      <input type="image" src="https://purepng.com/public/uploads/large/purepng.com-cloudnaturecloudsmoke-9615246757368kjiz.png" style="width:100px; height: 100px" id="myidj" ref="myidj" v-on:click.prevent="addScore(1)">
      <a v-if="!started" v-on:click.prevent="getStarted">Get Started</a>
    </div>
    <div class="end" v-if="!check" @click="backToHome">
      <h1> GAME OVER !</h1>
      <sui-header-content style="font-size:18px;">
        {{userWinner}} is winner
      </sui-header-content>
    <sui-button
        value="Home"
      >Home</sui-button>
    </div>
  </div>
</template>

<script>
import db from '../config/firestore'
import router from '../router'
export default {
};
</script>

<style>

</style>

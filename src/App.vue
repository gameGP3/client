<template>
  <div id="app">
    <audio autoplay loop controls volume="0">
      <source src="./assets/sound/background-music-for-playing.mp3" type="audio/ogg">
    </audio>
    <router-view />
  </div>
</template>

<style scoped>
* {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

  audio{
    position: absolute;
  }
</style>

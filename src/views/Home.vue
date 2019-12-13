<template>
  <div>
    <div>

    </div>
  </div>
</template>

<script>
import db from '../config/firestore'
import UsernameForm from '../components/UsernameForm'

export default {
  name: 'Home',
  components: {
    UsernameForm
  },
  data(){
    return {
      name: '',
      user: '',
      roomID: '',
      score: 0
    }
  },
  methods:{
    
  }
}

</script>

<style>

</style>
<template>
  <div class="auth-div h-full flex flex-col justify-around items-center">
    <signIn />
    <signUp />
  </div>
  <div class="flex h-full justify-center items-center">
    <div class="core bg-[#fffafa] h-4/5 rounded shadow flex justify-center items-center">
      <chats @pfpInfoToApp="senderThree"/>
      <dms />
      <info :infoData="infoData"/>
    </div>
  </div>
  <router-view/>
</template>

<script>

import { ref } from '@vue/reactivity'
import chats from "./components/chats/chats.vue"
import dms from "./components/dms/dms.vue"
import info from "./components/info/info.vue"
import signIn from "./components/otherComps/signIn.vue"
import signUp from "./components/otherComps/signUp.vue"

export default {
  components: {
    chats,
    dms,
    info,
    signIn,
    signUp,
  },
  setup() {
    
    const infoData = ref()

    function senderThree(value) {
      infoData.value = value
    }

    return {senderThree, infoData}

   },
}
</script>

<style>

* {
  font-family: 'Nunito', sans-serif;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

*::-webkit-scrollbar {
  display: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

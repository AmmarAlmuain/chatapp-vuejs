<template>
    <div class="dms w-96 h-[98%] bg-[#eee] rounded -center-col">
        <dmsStart />
        <dmsCenter />
        <dmsEnd />
    </div>
</template>

<script>

import dmsStart from "./dmsStart.vue"
import dmsCenter from "./dmsCenter.vue"
import dmsEnd from "./dmsEnd.vue"

export default {
  components: {
    dmsStart,
    dmsCenter,
    dmsEnd,
  },
  setup() {
    
  },
}
</script>

<style>

</style>
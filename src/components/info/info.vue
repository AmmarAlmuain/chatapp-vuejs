<template>
    <div class="info w-56 h-[98%] ml-2 mr-2 rounded">
        <infoStart />
        <infoCenter :infoToInfoCenter="infoToInfoCenter"/>
        <infoEnd />
    </div>
</template>

<script>

import infoStart from "./infoStart.vue"
import infoCenter from "./infoCenter.vue"
import infoEnd from "./infoEnd.vue"
import { onUpdated, ref } from '@vue/runtime-core'

export default {
  components: {
    infoStart,
    infoCenter,
    infoEnd,
  },
  
  props : ["infoData"],

  setup(props) {
    
    const infoToInfoCenter = ref(null)

    onUpdated(() => {
      infoToInfoCenter.value = props.infoData
    })

    return { infoToInfoCenter }
  }
}
</script>

<style>

</style>
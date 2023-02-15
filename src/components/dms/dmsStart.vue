<template>
  <div class="dms-header bg-[snow] h-11 w-[96%] rounded shadow -center mb-2" v-if="curr_user">
    <div class="left-header -center w-2/5">
        <div class="lh-icons-div w-8 h-8 -center cursor-pointer">
            <i class="fa-solid fa-pen text-xs text-gray-400"></i>
        </div>
        <div class="lh-icons-div w-8 h-8 -center cursor-pointer">
            <i class="fa-solid fa-image text-xs text-gray-400"></i>
        </div>
        <div class="lh-icons-div w-8 h-8 -center cursor-pointer">
            <i class="fa-solid fa-trash-can text-xs text-gray-400"></i>
        </div>
        <div class="lh-icons-div w-8 h-8 -center cursor-pointer">
            <i class="fa-solid fa-circle text-xs text-gray-400" :class="curr_user[0].status"></i>
        </div>
    </div>
    <div class="right-header w-3/5 -center">
        <div class="rh-details">
            <img :src="curr_user[0].src" alt="rh-details-img" class="w-8 h-8 rounded-full">
        </div>
        <div class="rh-flex-col -center-col">
            <div class="scd-name flex justify-start items-center h-4 w-full">
                <p class="text-xs font-semibold capitalize text-gray-400] ml-2"> {{ curr_user[0].username }} </p>
            </div>
            <div class="scd-note flex justify-start items-center h-4 w-full">
                <p class="text-[10px] font-semibold text-gray-400 ml-2"> {{ curr_user[0].email }} </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import { ref } from '@vue/reactivity'
import { fetching } from '../Composables/fetching'

export default {
    setup() {

        const curr_user = ref()

        fetching("curr-user", curr_user)

        return { curr_user }

    }
}
</script>

<style>

</style>
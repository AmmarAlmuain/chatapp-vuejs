<template>
  <div class="ic-pfp-infos w-full pt-5 pb-5 bg-[#eee] mt-2 rounded -center-col" v-for="pfpD in pfpDetails" :key=pfpD>
    <img :src="pfpD.src" alt="ic-pfp-infos-img" class="w-20 h-20 rounded-full">
    <div class="name-div-h mt-2 pl-2 pr-2">
        <p class="font-bold"> {{ pfpD.name }} </p>
    </div>
    <div class="name-div-h mt-1 pl-2 pr-2">
        <p class="text-gray-400 text-xs"> {{ pfpD.note }} </p>
    </div>
  </div>
  <div class="all-ic-btns bg-[#eee] h-[88px] w-full mt-2 text-gray-400 flex flex-col justify-around items-center rounded" v-for="pfpD in pfpDetails" :key=pfpD>
    <div class="all-ic-btns-top w-full h-11 flex justify-around items-center">
        <div class="call-sq -center w-7 h-7 rounded shadow bg-[snow] cursor-pointer">
            <i class="fa-solid fa-phone text-xs"></i>
        </div>
        <div class="add-friend-sq -center w-7 h-7 rounded shadow bg-[snow] cursor-pointer">
            <i class="fa-solid fa-user-plus text-xs"></i>
        </div>
        <div class="status-sq -center w-7 h-7 rounded shadow bg-[snow] cursor-pointer">
            <i class="fa-solid fa-circle text-xs" :class="pfpD.status"></i>
        </div>
    </div>
    <div class="all-ic-btns-bot w-full h-11 flex justify-around items-center">
        <div class="bell-sq -center w-7 h-7 rounded shadow bg-[snow] cursor-pointer">
            <i class="fa-solid fa-bell text-xs"></i>
        </div>
        <div class="star-sq -center w-7 h-7 rounded shadow bg-[snow] cursor-pointer">
            <i class="fa-solid fa-star text-xs"></i>
        </div>
        <div class="friends-sq -center w-7 h-7 rounded shadow bg-[snow] cursor-pointer">
            <i class="fa-solid fa-user-group text-xs"></i>
        </div>
    </div>
  </div>
  <div class="pfp-ic-imgs w-full h-14 flex justify-around items-center rounded bg-[#eee] mt-2">
    <img src="https://doitbeforeme.com/wp-content/uploads/2022/12/pfp-anime.webp" alt="pfp-ic-imgs" class="w-10 h-10 rounded">
    <img src="https://doitbeforeme.com/wp-content/uploads/2022/12/Cute-anime-pfp.webp" alt="pfp-ic-imgs" class="w-10 h-10 rounded">
    <img src="https://doitbeforeme.com/wp-content/uploads/2022/12/Aesthetic-anime-pfp.webp" alt="pfp-ic-imgs" class="w-10 h-10 rounded">
    <div class="fake-much-imgs w-8 h-8 rounded bg-[snow] shadow -center cursor-pointer">
        <i class="fa-solid fa-arrows-left-right text-xs text-[#9ca3af]"></i> 
    </div>
  </div>
</template>

<script>

import { ref } from '@vue/reactivity'
import { fetching } from '../Composables/fetching.js'
import { computed, onUpdated, watch } from '@vue/runtime-core'

export default {
    
    props : ["infoToInfoCenter"],

    setup(props) {

        const pfpDetails = ref(null)
        const profileName = ref(null)

        onUpdated(() => {
            profileName.value = props.infoToInfoCenter
        })

        watch(profileName, () => {
            if (!profileName.value) {
                console.log("Can't fetch pfpDetails.")
            }
            else {
                fetching("chats" + "?q=0&name=" + profileName.value, pfpDetails)
            }  
        })

        return {profileName, pfpDetails}
    }

}
</script>

<style>

</style>
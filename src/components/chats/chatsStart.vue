<template>

    <div class="chats-more-btns bg-[#eee] h-11 w-full rounded flex justify-around items-center">
        <button class=" bg-[snow] text-blue-400 h-8 w-32 rounded shadow"> Message </button>
        <button class="bg-[snow] h-8 w-32 rounded shadow text-gray-400"> Archive </button>
    </div>

    <div class="active-chats h-28 w-full bg-[#eee] rounded mt-2 -center-col relative">
        <div class="active-chats-slider absolute w-full h-16 -center">
            <div class="fixed-for-slider w-full h-16 flex justify-between items-center relative">
                <div class="left-arrow w-8 h-8 bg-[snow] shadow -center rounded-full absolute -left-4">
                    <i class="fa-solid fa-angle-left text-gray-400"></i>
                </div>
                <div class="right-arrow w-8 h-8 bg-[snow] shadow -center rounded-full absolute -right-4">
                    <i class="fa-solid fa-angle-right text-gray-400"></i>
                </div>
            </div>
        </div>
        <div class="active-chats-top w-full h-6 flex justify-start items-center">
            <p class="uppercase text-xs ml-2 font-bold text-gray-400"> favorites </p>
        </div>
        <div class="active-chats-bottom w-full h-24 -center" v-if="favChats">
            <div class="fav-chats w-16 h-full -center" v-for="singleFav in favChats" :key=singleFav>
                <div class="fav-chats-pfp w-16 -center-col">
                    <img :src="singleFav.src" alt="fav-chats-pfp" class="w-12 h-12 rounded-full">
                    <p class="capitalize text-xs font-bold text-gray-700 mt-2">  {{ singleFav.name }}  </p>
                </div>
            </div>
        </div>  
    </div>

</template>

<script>

import {ref} from "vue"

export default {
    setup() {

        let favChats = ref()

        fetch('http://localhost:3000/favorites')
        .then((response) => response.json())
        .then((data) => {
            favChats.value = data
        });

        return {favChats}
    }
}
</script>

<style>

</style>
<template>
    <div class="allChat h-72 overflow-y-auto" v-if="allChats">
        <div class="single-chat bg-[#eee] h-16 w-full mt-2 rounded -center cursor-pointer" v-for="singleChat in allChats" :key=singleChat 
        @click="senderOne(singleChat.name)">
            <div class="single-chat-details w-full h-16 flex justify-center items-center">
            <div class="left-scd w-16 h-full -center">
                <div class="left-scd-img w-16 h-full -center">
                <img :src="singleChat.src" alt="left-scd-img" class=" rounded-full w-12 h-12">
                </div>
            </div>
            <div class="right-scd w-full h-full -center-col">
                <div class="scd-name flex justify-start items-center h-4 w-full">
                <p class="text-xs font-semibold capitalize text-gray-400] ml-2"> {{ singleChat.name }} </p>
                </div>
                <div class="scd-note flex justify-start items-center h-4 w-full">
                <p class="text-[10px] font-semibold capitalize text-gray-600 ml-2"> {{ singleChat.note }} </p>
                </div>
                <div class="scd-lastmsg flex justify-start items-center h-4 w-full">
                <p class="text-[10px] font-semibold capitalize text-gray-400 ml-2"> {{ singleChat.lastMsg[0] }} </p>
                </div>
            </div>
            <div class="-last-right-scd w-12 h-16 flex flex-col pt-2 pr-2 justify-start items-center">
                <p class="text-[10px] font-semibold capitalize text-gray-400"> Now </p>
                <i class="fa-solid fa-check text-[9px] font-semibold capitalize text-gray-400"></i>
            </div>
            </div>
        </div>
    </div>
</template>

<script>

import {ref} from "vue"
import { fetching } from '../Composables/fetching'

export default {
    emits: ["pfpInfoToChat"],
    setup(props, { emit }) {

        let allChats = ref()

        function senderOne(singleChatName) {
            emit("pfpInfoToChat", singleChatName)
        }

        fetching("chats", allChats)


        return {allChats, senderOne}
    }
}
</script>

<style>

</style>
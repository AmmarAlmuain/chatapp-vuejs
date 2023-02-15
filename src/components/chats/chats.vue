<template>
    <div class="chats w-72 h-[98%] ml-2 mr-2 rounded">
        <chatsStart />
        <chatsCenter @pfpInfoToChat="senderTwo"/>
        <chatsEnd />
    </div> 
</template>

<script>

import chatsStart from "./chatsStart.vue"
import chatsCenter from "./chatsCenter.vue"
import chatsEnd from "./chatsEnd.vue"

export default {
    components: {
        chatsStart,
        chatsCenter,
        chatsEnd,
    },

    setup(props, { emit }) {
        function senderTwo(value) {
            emit("pfpInfoToApp", value)
        }

        return { senderTwo}
    }
}
</script>

<style>

</style>
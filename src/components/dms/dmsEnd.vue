<template>
  <div class="messages-inputs bg-[snow] h-11 w-[96%] shadow rounded text-gray-400 flex justify-around items-center mt-2">
    <div class="outer-rel relative h-9 w-[98%] rounded flex justify-start items-center bg-[#eee]">
        <input type="text" class=" pl-2 w-[275px] h-9 rounded bg-[#eee] -center outline-none" placeholder="Hi there :)" value="How are you today? 🧐...">
        <div class="fixed-messages-inputs w-20 absolute right-0 -center">
            <div class="circle-stop-sq -center w-7 h-7 rounded shadow bg-[snow] mr-2 cursor-pointer">
                <i class="fa-solid fa-circle-stop text-xs"></i>
            </div>
            <div class="share-sq -center w-7 h-7 rounded shadow bg-[snow] cursor-pointer">
                <i class="fa-solid fa-share text-xs text-blue-400"></i>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    setup() {
    }
}
</script>

<style>

</style>
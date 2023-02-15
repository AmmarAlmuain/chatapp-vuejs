<template>
  <div class="sign-in-div w-80 h-44 mr-2 bg-[snow] shadow rounded flex flex-col justify-around items-center">
    <div class="outer-rel relative h-11 w-[94%] shadow rounded flex justify-center items-center bg-[snow]">
        <input type="text" class="w-[97.5%] h-9 rounded bg-[#eee] text-gray-400 -center outline-none pl-10 pr-1" placeholder="Enter your email here..." value="fake@email.com">
        <div class="login-icon-start absolute left-0 ml-2 -center w-7 h-7 rounded shadow bg-[snow]">
          <i class="fa-solid fa-at text-xs"></i>
        </div>
    </div>
    <div class="outer-rel relative h-11 w-[94%] shadow rounded flex justify-center items-center bg-[snow]">
        <input type="text" class="w-[97.5%] h-9 rounded bg-[#eee] text-gray-400 -center outline-none pl-10 pr-1" placeholder="Enter your password here..." value="********">
        <div class="login-icon-start absolute left-0 ml-2 -center w-7 h-7 rounded shadow bg-[snow]">
          <i class="fa-solid fa-eye text-xs"></i>
        </div>
    </div>
    <div class="acc-dec bg-[#eee] h-11 w-[94%] text-gray-400 flex justify-around items-center rounded">
        <div class="circle-check-sq -center w-20 h-8 rounded shadow bg-[snow] cursor-pointer">
            <i class="fa-solid fa-circle-check text-blue-400"></i>
        </div>
        <div class="circle-xmark-sq -center w-20 h-8 rounded shadow bg-[snow] cursor-pointer">
            <i class="fa-solid fa-circle-xmark"></i>
        </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
<template>
<span><a href="#contact"></a></span>
</template>

<script setup lang="ts">

</script>

<style scoped>

span{
  position: relative;
  display: inline-flex;
  width: 180px;
  height: 55px;
  margin: 0 15px;
  perspective: 1000px;
}
span a{
  font-size: 19px;
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform .25s;
  font-family: 'Montserrat', sans-serif;
  
}
span a:before,
span a:after{
  position: absolute;
  content: "COMENZAR";
  height: 55px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid white;
  box-sizing: border-box;
  border-radius: 5px;
}
span a:before{
  color: #000;
  background: #fff;
  transform: rotateY(0deg) translateZ(25px);
}
span a:after{
  color: #fff;
  transform: rotateX(90deg) translateZ(25px);
}
span a:hover{
  transform: translateZ(-25px) rotateX(-90deg);
}

</style>
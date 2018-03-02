<template lang='pug'>
  .ocean
    slot
</template>

<style lang='scss'>
.ocean {
  $start-gradient-color: hsl(198, 72%, 53%) 0%;
  $mid-gradient-color: hsl(203, 62%, 49%) 15%;
  $mid-end-gradient-color: hsl(213, 61%, 42%) 50%;
  $end-gradient-color: hsl(214, 76%, 28%) 100%;

  background-image: linear-gradient(
    to bottom,
    $start-gradient-color,
    $mid-gradient-color,
    $mid-end-gradient-color,
    $end-gradient-color
  );
  color: from-palette(white);
}
</style>

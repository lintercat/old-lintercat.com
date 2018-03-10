<template lang='pug'>
  .mission
    mission-header
    mission-content
</template>

<script>
import MissionHeader from '@/components/Mission-header'
import MissionContent from '@/components/Mission-content'

export default {
  components: {
    MissionHeader,
    MissionContent
  }
}
</script>

<style lang='scss' scoped>
.mission {
  overflow: hidden;

  @include breakpoint(small) {
    padding: mobile-vw(60px) 0;
  }

  @include breakpoint(large) {
    width: 960px;
    margin: 0 auto;
    padding-top: 90px;
    padding-bottom: 170px;
  }
}
</style>

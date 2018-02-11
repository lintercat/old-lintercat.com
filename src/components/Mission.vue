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
  padding: mobile-vw(42px) 0;
}
</style>

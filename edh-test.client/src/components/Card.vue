<template>
  <div class="component">

<img :src="card.image_uris?.large" alt="">
  </div>
</template>


<script>
import { Card } from "../models/Card.js";
export default {
  props: {
    card: {
      type: Card,
      required: true
    }
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>

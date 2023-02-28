<template>

</template>

<script>
import { onMounted } from "vue"
import { cardsService } from "../services/CardsService.js"

export default {
  setup() {
    async function getCards() {
      try {
          await cardsService.getCards()
        } catch (error) {
          console.error('[]',error)
          Pop.error(error)
        }
    }
    onMounted(() => {
      getCards()
    })
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>

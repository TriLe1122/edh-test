<template>
<!-- <div v-for="c in cards" :key="c.id">
  <Card :card="c"/>
</div> -->
</template>

<script>
import { onMounted } from "vue"
import { cardsService } from "../services/CardsService.js"
import Pop from "../utils/Pop.js"
import Card from "../components/Card.vue"
import { AppState } from "../AppState.js"
import { computed } from '@vue/reactivity';

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
    return {
      cards: computed(() => AppState.cards)
    }
  },
  components: {Card}
}
</script>

<style scoped lang="scss">

</style>

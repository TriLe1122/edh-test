import { scryFallAPI } from "./AxiosService.js"

class CardsService{

  async getCards() {
    const res = await scryFallAPI.get()
    console.log(res.data);
  }

}


export const cardsService = new CardsService()

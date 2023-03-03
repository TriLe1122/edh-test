export class Card {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.lang = data.lang
    this.released_at = data.released_at
    this.highres_image = data.highres_image
    this.scryfall_uri = data.scryfall_uri
    this.image_uris.large = data.image_uris?.large || ''
    this.mana_cost = data.mana_cost
    this.cmc = data.cmc
    this.type_line = data.type_line
    this.oracle_text = data.oracle_text
    this.power = data.power
    this.toughness = data.toughness
    this.colors = data.colors
    this.color_identity = data.color_identity
    this.keywords = data.keywords
    this.legalities.commander = data.legalities?.commander || ''
    this.set = data.set
    this.set_id = data.set_id
    this.set_name = data.seq

  }
}

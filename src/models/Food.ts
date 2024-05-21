class Food {
  title: string
  description: string
  image: string
  infos: string []
  id: number

  constructor (
    title: string,
    description: string,
    image: string,
    infos: string [],
    id: number,
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.title = title
    this.infos = infos
  }
}

export default Food




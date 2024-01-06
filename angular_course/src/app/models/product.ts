export interface Rating {
  rate: number
  count: number
}

export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  image: string
  category: string
  rating: Rating
}

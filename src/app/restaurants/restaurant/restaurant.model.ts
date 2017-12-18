export interface Restaurant {
  id: string,
  name: string,
  category: string,
  deliveryEstimate: number,
  rating: number,
  imagePath: string,
  hours?: string,
  about?: string
}

import axios from 'axios'
import { Product } from './models/product.model'

(async() => {

  async function getProducts(){
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products?limit=5&offset=1')
    return data
  }

  console.log('--'.repeat(20));
  const products = await getProducts()
  console.log(products.map(item => `${item.id} - ${item.title}`))
  console.log('--'.repeat(20));
})()



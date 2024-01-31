import { ProductMemoryService } from './services/product-memory.service'

const productService = new ProductMemoryService()

productService.create({
  title: 'Product 01',
  price: 100,
  description: 'lkasdjn a;solid jc;olaisjd ;foi ',
  categoryId: 12,
  images: []
})

console.log(productService.getAll())

const products = productService.getAll()

productService.update(products[0].id, {
  description: 'Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.'
})

console.log(productService.findOne(products[0].id))



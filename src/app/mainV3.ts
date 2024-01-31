import { ProducHttpService } from './services/product-http.service'

(async () => {
  try {
    const productService = new ProducHttpService()
    console.log('---'.repeat(5))
    const product = await productService.getAll()
    console.log(product.length)
    console.log('---'.repeat(5))
    const productId = product[0].id
    await productService.update(productId, {
      price: 10000,
      description: 'updates by varoxmetal',
      title: 'my product'
    })
    console.log(`Product ${productId} updated!`)
    console.log('---'.repeat(5))
    const productUpdated = await productService.findOne(productId)
    console.log(productUpdated);
    console.log('---'.repeat(5))
  }catch(err:any) {
    console.error(err.response.data);
  }

})()


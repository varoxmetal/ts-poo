import axios from 'axios';

(async() => {

  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, time);
    })
    return promise
  }

  function getProducts(){
    const promise = axios.get('https://api.escuelajs.co/api/v1/products?limit=1&offset=1')
    return promise
  }

  async function getProductsAsync(){
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products?limit=1&offset=1')
    return rta.data
  }



  console.log('--'.repeat(20));
  const rta = await delay(3000)
  console.log(rta);
  console.log('--'.repeat(20));
  const products = await getProducts()
  console.log(products.data);
  console.log('--'.repeat(20));
  const productsAsync = await getProductsAsync()
  console.log(productsAsync);
  console.log('--'.repeat(20));
})()



import axios from 'axios'
import { faker } from '@faker-js/faker'
import { Product } from '../models/product.model'
import { CreateProductoDto, UpdateProductoDto } from '../dtos/product.dto'
import { ProductService } from '../models/product.service.model'


export class ProducHttpService implements ProductService {

  private url = 'https://api.escuelajs.co/api/v1/products'

  async getAll() {
    const { data } = await axios.get<Product[]>(this.url)
    return data
  }

  async update (id: Product['id'], changes: UpdateProductoDto) {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes)
    return data
  }

  async create (dto: CreateProductoDto) {
    const { data } = await axios.post<Product>(this.url, dto)
    return data
  }

  async findOne(id: Product['id']) {
    const { data } = await axios.get<Product>(`${this.url}/${id}`)
    return data
  }
}

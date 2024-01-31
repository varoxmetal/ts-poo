import { CreateProductoDto, UpdateProductoDto } from '../dtos/product.dto'
import { Product } from './product.model'

export interface ProductService {
  getAll(): Product[] | Promise<Product[]>
  update(id: Product['id'], changes: UpdateProductoDto): Product | Promise<Product>
  create(dto: CreateProductoDto): Product | Promise<Product>
  findOne(id: Product['id']): Product | undefined | Promise<Product | undefined>
}

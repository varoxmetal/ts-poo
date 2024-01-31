import { Product } from '../models/product.model'
import { Category } from '../models/category.model'

export interface CreateProductoDto extends Omit<Product, 'id' | 'category' >{
  categoryId: Category['id']
}

export interface UpdateProductoDto extends Partial<CreateProductoDto>{}

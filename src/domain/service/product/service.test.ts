import { Product } from '../../model/product';
import { ProductService } from '.';
import { ProductRepository } from '../../repository/product';
import { ProductRepositoryMock } from '../../repository/product/mock';

describe('ProductService', () => {
  let productService: ProductService;
  let productRepository: ProductRepository;

  beforeEach(() => {
    productRepository = new ProductRepositoryMock();
    productService = new ProductService(productRepository);
  });

  describe('create', () => {
    it('should create a product', async () => {
      const product = new Product('1', 'Product 1');
      const createdProduct = await productService.create(product);
      expect(createdProduct).toEqual(product);
    });
  });
});

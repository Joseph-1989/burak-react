import {
  ProductCollection,
  ProductSize,
  ProductStatus,
} from "../enums/product.enum";

export interface Product {
  _id: string;
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: String;
  productPrice: Number;
  productLeftCount: Number;
  productSize: ProductSize;
  productVolume: number;
  productDesc?: String;
  productImages: string[];
  productViews: Number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductInquiry {
  order: string;
  page: number;
  limit?: number;
  productCollection?: ProductCollection;
  search?: string;
}

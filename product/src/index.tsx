import * as React from 'react';
import { useParams } from 'react-router-dom';
import type { PiletApi, PageComponentProps } from 'app-shell';
import Product from './Product';
import ProductDetail from './ProductDetail';

export function setup(app: PiletApi) {
  // Register the product page
  app.registerPage('/product', ({ piral }) => <Product />);

  // Register the product detail page with dynamic parameter
  app.registerPage('/pdp/:productId', () => {
    const { productId } = useParams<{ productId: string }>();
    return productId ? <ProductDetail productId={productId} /> : null;
  });
}

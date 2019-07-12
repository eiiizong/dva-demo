import React from 'react';
import { connect } from 'dva'
import ProductList from '../components/ProductList'

const Products = (props) => {
  console.log(props)
  const { dispatch, products } = props
  function handleDelete (id) {
    dispatch({
      // produts 对应 models/products.js 中 namespace 的值
      // delete 对应 models/products.js 中 reducer对象中函数名
      type: 'products/delete',
      payload: id
    })
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products}></ProductList>
    </div>
  );
}

export default connect(
  ({ products }) => ({
    products
  })
)(Products);

import React from 'react';
import PropTypes from 'prop-types'
import { Table, Popconfirm, Button } from 'antd'

const ProductList = ({ onDelete, products }) => {
  // 表格列的配置描述
  const columns = [{
    title: '名称',
    dataIndex: 'name'
  }, {
    title: '操作',
    render: (text, record, index) => {
      console.log(text, record, index)
      return (
        <Popconfirm
          title={`是否确定删除${text.name} ?`}
          cancelText="取消"
          okText="确定"
          onConfirm={() => {
            onDelete(record.id)
          }}
        >
          <Button>删除</Button>
        </Popconfirm>
      )
    }
  }]
  return (
    <Table dataSource={products} columns={columns} />
  );
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
};

export default ProductList;

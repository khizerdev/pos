import { Table } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux';
import {
    DeleteOutlined,
    PlusCircleOutlined,
    MinusCircleOutlined,
  } from "@ant-design/icons";

const Cart = () => {

    const { cartItems, loading } = useSelector((state) =>  state.reducer);


    const columns = [
        {
          title: "Name",
          dataIndex: "name",
        },
        {
          title: "Image",
          dataIndex: "image",
          render: (image, record) => (
            <img src={image} alt="" height="60" width="60" />
          ),
        },
        {
          title: "Price",
          dataIndex: "price",
        },
        {
          title: "Quantity",
        
        },
        {
            title: "Actions",
            dataIndex: "_id",
            render: (id, record) => (
              <DeleteOutlined/>
            ),
          },
      
      ];

  return (
    <>
        <Table  columns={columns} dataSource={cartItems} bordered/>;
    </>
  )
}

export default Cart
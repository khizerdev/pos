import { Table } from 'antd';
import React from 'react'
import { useSelector , useDispatch} from 'react-redux';

import {
    DeleteOutlined,
    PlusCircleOutlined,
    MinusCircleOutlined,
  } from "@ant-design/icons";


const Cart = () => {

    const dispatch = useDispatch();
    const { cartItems, loading } = useSelector((state) =>  state.reducer);

    const increaseQuantity = (record) => {
        dispatch({
          type: "updateCart",
          payload: { ...record, quantity: record.quantity + 1 },
        });
      };
    
      const decreaseQuantity = (record) => {
        if (record.quantity !== 1) {
          dispatch({
            type: "updateCart",
            payload: { ...record, quantity: record.quantity + -1 },
          });
        }
      };


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
          dataIndex: "_id",
          render: (id, record) => (
            <div>
            <PlusCircleOutlined
                className="mx-3"
                onClick={() => increaseQuantity(record)}
            />
            <b>{record.quantity}</b>
            <MinusCircleOutlined
                className="mx-3"
                onClick={() => decreaseQuantity(record)}
            />
            </div>
          ),
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
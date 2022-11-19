import { collection, getDocs, query, where } from 'firebase/firestore';
import { FormEventHandler, useState, useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';
import { Table, Button, Modal, Dropdown, Menu, Space } from 'antd';
import axios from 'axios';
import useFetch from 'react-fetch-hook';

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: '4',
        danger: true,
        label: 'a danger item',
      },
    ]}
  />
);

function Exchange() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoading, error, data } = useFetch("//url");
  console.log(data);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items = [
    { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
    { label: 'item 2', key: 'item-2' },
  ];

  const dataSource = [
    {
      id: '1',
      bookname: 'Go',
      ownername: 'Johnny Sins',
      request: ' ',
    },
  ];
  
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Book Name',
      dataIndex: 'bookname',
      key: 'bookname',
    },
    {
      title: 'Owner Name',
      dataIndex: 'ownername',
      key: 'ownername',
    },
    {
      title: 'Request',
      dataIndex: 'request',
      key: 'request',
      render: (test: any) =>(
        <Button type="primary" onClick={showModal}>Request</Button>
      ),
    },
  ];

	return (
    <>
      <Table dataSource={dataSource} columns={columns} />
      <Modal title="Request book exchange" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <Dropdown overlay={menu}>
            <a onClick={e => e.preventDefault()}>
              <Space>
                Hover me
              </Space>
            </a>
          </Dropdown>
        </div>
      </Modal>
    </>
	);
}

export default Exchange;

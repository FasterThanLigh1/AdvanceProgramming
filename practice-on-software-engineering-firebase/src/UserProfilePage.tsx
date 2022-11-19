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

function UserProfile() {

	return (
    <>
    </>
	);
}

export default UserProfile;

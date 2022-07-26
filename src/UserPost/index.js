import React, { useState, useEffect } from 'react'
import { Button, Card, Input, Space } from 'antd'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [id, setId] = useState()

  const fetchUserPost = () => {}

  const navigate = useNavigate()

  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center' }}>Fetch Post</h1>
      <Input
        placeholder='Enter User Id'
        type='number'
        onChange={(e) => setId(e.target.value)}
        value={id}
        style={{ width: '300px' }}
      />
      <br />
      <br />
      <Space size='small' style={{ margin: 10 }}>
        <Button type='primary' onClick={fetchUserPost}>
          Fetch User Post
        </Button>
        <Button type='primary' onClick={() => navigate('/createPost')}>
          Create User Post
        </Button>
      </Space>
      <br />
      <br />
    </div>
  )
}

export default Home

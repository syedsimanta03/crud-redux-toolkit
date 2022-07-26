import React, { useState, useEffect } from 'react'
import { Button, Card, Input, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, getPost } from '../redux/features/postSlice'
import { Alert } from 'antd'
import LoadingCard from './LoadingCard'

const Home = () => {
  const [id, setId] = useState()
  const dispatch = useDispatch()
  const { loading, post } = useSelector((state) => ({ ...state.app }))
  console.log(post)
  const fetchUserPost = () => {
    if (!id) {
      ;<Alert
        message='Error Text'
        description='Error Description Error Description Error Description Error Description Error Description Error Description'
        type='error'
        closable
      />
    } else {
      dispatch(getPost({ id }))
      setId('')
    }
  }

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
      {loading ? (
        <LoadingCard count={1} />
      ) : (
        <>
          {post.length > 0 && (
            <div className='site-card-border-less-wrapper'>
              <Card type='inner' title={post[0].title}>
                <p>User Id: {post[0].id}</p>
                <p>{post[0].body}</p>
              </Card>
              <Space
                size='middle'
                style={{
                  marginTop: 25,
                  marginRight: 50 + 'px',
                  float: 'right',
                }}
              >
                <Button
                  style={{ cursor: 'pointer' }}
                  type='primary'
                  danger
                  onClick={() => dispatch(deletePost({ id: post[0].id }))}
                >
                  Delete
                </Button>
                <Button style={{ cursor: 'pointer' }} type='primary'>
                  Delete
                </Button>
              </Space>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Home

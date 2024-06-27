import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { useSelector } from 'react-redux';

function AllPosts() {
    const userData = useSelector((state)=>(state.auth.userData))
    const [posts, setPosts] = useState([])
    useEffect(() => {
        // console.log(userData)
    appwriteService.getPosts(userData?.$id).then((posts) => {
        if (posts) {
            // console.log(posts)
            setPosts(posts.documents)
        }
    })},[userData])

  return (
    <div className='w-full min-h-96 py-8'>
        <Container>
            <div className='w-auto flex flex-wrap justify-evenly'>
                {posts.length==0?<div className='p-2 w-1/4 min-w-96'>No Posts Yet.</div>:posts.map((post) => (
                    <div key={post?.$id} className='p-2 w-1/4 min-w-96'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}   

export default AllPosts
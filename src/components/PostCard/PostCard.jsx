import React, { useEffect } from 'react'
import appwriteService from '../../appwrite/config'
import { Link, useNavigate } from 'react-router-dom'


// here featured image is actually the url of the image stored in the bucket ie database, so to access that image we made a method "getfilepreview in appwrite service "

const PostCard = ({$id,title,featuredImage,uploadedBy}) => {
  const navigate = useNavigate()
  


  return (
    <div className='bg-gray-100 rounded-xl p-4 cursor-pointer hover:bg-yellow-100 hover:scale-110 duration-300' onClick={() => { navigate(`/post/${$id}`); }}>
    <div className='max-w-full h-48 flex justify-center mb-4 overflow-hidden'>
      <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl transform transition-transform duration-300 hover:scale-110' />
    </div>
    <h2 className="text-xl font-bold">{title}</h2>
    <p>Author: {uploadedBy == null || uploadedBy === "anonymous" ? "Anonymous" : uploadedBy}</p>
  </div>
  
  )
}

export default PostCard
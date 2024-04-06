import React from 'react'
import { useRef, useState, useEffect } from 'react';

function AIImage() {

  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
     
      setUpdateSuccess(true);
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>
      <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type='file'
          ref={fileRef}
          hidden
          accept='image/*'
        />
        <img
          onClick={() => fileRef.current.click()}
          src={file ? URL.createObjectURL(file) : ''}
          alt='profile'
          className='rounded-full object-cover aspect-video cursor-pointer self-center mt-2'
        />
        <button>Submit</button>
        </form>

      </div>
    </>
  )
}

export default AIImage

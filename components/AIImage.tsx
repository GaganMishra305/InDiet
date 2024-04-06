import React from 'react'
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';

function AIImage() {

  const fileRef = useRef(null);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [formData, setFormData] = useState({});


  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      // console.log(e.target)
      const formdata = new FormData();
      formdata.append('image', file);
      const res = await axios.post('http://localhost:4000/recognize_food',formdata)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
     

  };
  return (
    <>
      <div>
      <form onSubmit={handleSubmit}  className='flex flex-col gap-4'>
        <input
          onChange={(e) => {console.log(e.target.files[0]);setFile(e.target.files[0])}}
          type='file'
          ref={fileRef}
          // hidden
          accept='image/*'
        />
        <img
          onClick={() => fileRef.current?.click()}
          src={file ? URL.createObjectURL(file) : ''}
          alt='profile'
          className='rounded-full object-cover aspect-video cursor-pointer self-center mt-2'
        />
        <button type='submit'>Submit</button>
        </form>

      </div>
    </>
  )
}

export default AIImage

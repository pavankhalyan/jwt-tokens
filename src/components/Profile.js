import React from 'react'
import { Link  } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import Username from './Username'
import { profileValidate } from '../helper/Validate'

export default function Register() {

    const formik = useFormik({
        initialValues : {
          firstname:'',
          lastname:'',
          email: 'pavanusha2004@gmail.com',
          mobile: '',
          address:''
        },
        validate: profileValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values);
        }
    })
  
  return (
    <div className='container mx-auto'>

        <Toaster position='top-center' reverseOrder={false}/>
        <div className='flex justify-center items-center h-screen'> 
        <div className='w-full max-w-md space-y-16 rounded-3xl shadow-lg bg-gray-100'>
            <div className='title flex flex-col items-center' >
                 <h4 className=' text-5xl font-bold'>
                    Profile          
                  </h4>
                 <span className='py-4 text-xl w-2/3 text-center text-gray-400'> you can update the details  </span>
            </div>            
            <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='textbox flex flex-col items-center gap-6' >
              <div className='name flex w-3/4 gap-10'>
              <input  {...formik.getFieldProps('firstname')} type='text' className='h-9 max-w-4xl w-3/4 shadow-lg '  placeholder='FirstName'/> 
              <input  {...formik.getFieldProps('Lastname')} type='text' className='h-9 max-w-4xl w-3/4 shadow-lg '  placeholder='lastName'/> 
              </div> 
              <div className='name flex w-3/4 gap-10'>
              <input  {...formik.getFieldProps('mobile')} type='text' className='h-9 max-w-4xl w-3/4 shadow-lg '  placeholder='mobile no.'/> 
              <input  {...formik.getFieldProps('email')} type='text' className='h-9 max-w-4xl w-3/4 shadow-lg '  placeholder='Email*'/> 
              </div> 
              <div className='name flex w-3/4 gap-10'>
              <input  {...formik.getFieldProps('address')} type='text' className='h-9 max-w-4xl w-3/4 shadow-lg '  placeholder='address'/>  
                 <button type='submit' className='bg-slate-500 w-3/4 rounded- text-white text-xl shadow-sm text-center h-10 hover:bg-slate-950'> Register </button>
              </div> 
            </div>                       
            <div className='text-center py-4'> 
            <span className='text-gray-400'> come back later? <button className= 'text-red-600 underline' to='/'> login now </button></span>           
            </div> 
            </form>
        </div>
        </div>
    </div>
  )
}
 
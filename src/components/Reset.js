import React from 'react'
import { Link  } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { resetPasswordValidate } from '../helper/Validate'

export default function Reset() {

    const formik = useFormik({
        initialValues : {
            Password:'pavan@123',
            confirm_pwd:'pavan@123'
        },
        validate: resetPasswordValidate,
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
                    Reset
                  </h4>
                 <span className='py-4 text-xl w-2/3 text-center text-gray-400'> Enter a new password </span>
            </div>            
            <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='textbox flex flex-col items-center gap-6' > 
                 <input  {...formik.getFieldProps('password')} type='text' className='h-9 max-w-4xl w-3/4 shadow-lg '  placeholder='New Password'/>
                 <input  {...formik.getFieldProps('confirm_pwd')} type='text' className='h-9 max-w-4xl w-3/4 shadow-lg '  placeholder='Reset Password'/> 
                 <button type='submit' className='bg-slate-500 w-3/4 rounded- text-white text-xl shadow-sm text-center h-10 hover:bg-slate-950 rounded-md'> Reset </button>
            </div>                        
            </form>
        </div>
        </div>
    </div>
  )
}
 
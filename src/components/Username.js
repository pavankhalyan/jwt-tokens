import React from 'react'
import { Link  } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { usernameValidate } from '../helper/Validate'

export default function Username() {

    const formik = useFormik({
        initialValues : {
            Username:''
        },
        validate: usernameValidate,
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
                    Hello again 
                  </h4>
                 <span className='py-4 text-xl w-2/3 text-center text-gray-400'>Explore more by connecting with us </span>
            </div>            
            <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='textbox flex flex-col items-center gap-6' > 
                 <input  {...formik.getFieldProps('username')} type='text' className='h-9 max-w-4xl w-3/4 shadow-lg '  placeholder='Username' /> 
                 <button type='submit' className='bg-slate-500 w-3/4 rounded- text-white text-xl shadow-sm text-center h-10 hover:bg-slate-950'> Sign In </button>
            </div>                       
            <div className='text-center py-4'> 
            <span className='text-gray-400'> Not a member?. <Link className= 'text-red-600 underline' to='/Register'> Register now  </Link></span>           
            </div> 
            </form>
        </div>
        </div>
    </div>
  )
}
 
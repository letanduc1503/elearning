import React from 'react'
import Button from '../../components/Button/Button'
import { message } from 'antd'
import { SUCCESS } from '../../utils/constant'
import { userServ } from '../../services/userServ'
import Input from '../../components/Input/Input'
import { useDispatch } from 'react-redux'
import { Form, Formik } from 'formik'
import { userLogin } from '../../toolkit/userSlice'
export default function SignUpPage() {
  const dispatch = useDispatch()
  return (
    <Formik
    firstName=''
     lastName=''
     email=''
     password=''
     confirmPassword=''
     initialValues={{
       firstName: "",
       lastName: "",
       email:"",
       password:"",
       confirmPassword:""
     }}
     onSubmit={async (values, actions) => {
       try {
         const result = await userServ.userLogin(values)
         if (result.status === SUCCESS) {
           dispatch(userLogin(result.data))
           window.location.href = "/"
           message.success("Đăng ký thành công")
         }
       } catch (err) {
         message.error(err?.response?.data)
       }
     }}
   >
    
     <Form style={{ backgroundImage: `url("./images/bg-authen.png")` }}
    className='p-5 md:p-20 bg-red-300 rounded-lg bg-center z-10'>
    <div className='text-center'>
      <h1 className='font-bold text-xl md:text-3xl'>Đăng Ký</h1>
      
    </div>
    <div className='mb-[30px]'>
      <label htmlFor="firstName" className='form-label'>
        First Name
      </label>
      <Input className="w-full md:w-[500px] lg:w-[800px]" name="firstName" type="text" placeholder="First Name" />
    </div>
    <div className='mb-[30px]'>
      <label htmlFor="lastName" className='form-label'>Last Name</label>
      <Input className="w-full md:w-[500px] lg:w-[800px]" name="lastName" type="text" placeholder='Last Name'>
        
      </Input>
    </div>
    <div className='mb-[30px]'>
      <label htmlFor="email" className='form-label'>Email</label>
      <Input className="w-full md:w-[500px] lg:w-[800px]" name="email" type="text" placeholder='Email'>
        
      </Input>
    </div>
    <div className='mb-[30px]'>
      <label htmlFor="password" className='form-label'>Password</label>
      <Input className="w-full md:w-[500px] lg:w-[800px]" name="password" type="text" placeholder='Password'>
        
      </Input>
    </div>
    <div className='mb-[30px]'>
      <label htmlFor="confim-password" className='form-label'>Confim Password</label>
      <Input className="w-full md:w-[500px] lg:w-[800px]" name="confirmpassword" type="text" placeholder='Confirmpassword'>
        
      </Input>
    </div>
    <Button type="submit" className="block bg-white mx-auto py-3 px-5 font-bold">Register</Button>
  </Form>
  </Formik>
  )
}

import { createSlice } from '@reduxjs/toolkit'
import { message } from 'antd';
import { SUCCESS } from '../utils/constant';
import { localUser } from '../utils/localUser';
import { userServ } from '../services/userServ';

const initialState = {
  userInfo: localUser.get(),

}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.userInfo = action.payload
      localUser.set(action.payload)
    },
    addUser: (state, action) => {
      state.userInfo = action.payload
      localUser.set(action.payload)
    },

  }
});

export const {addUser}=userSlice.actions
export const { userLogin } = userSlice.actions

export default userSlice.reducer



export const fetchApiUserRegister = (userInfo, onSuccess)=>{
  return async dispatch=>{
    try{
      const result = await userServ.userRegister(userInfo)
      if (result.status === SUCCESS){
        onSuccess()
        message.success("Đăng ký tài khoản thành công")
      }
      } catch(err){
        message.success("Đăng ký tài khoản thất bại")
      
    }
  }
}


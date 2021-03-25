import React from 'react';
export const initState = {
  user_id:localStorage.getItem('user_id') || '',
  username:localStorage.getItem('username') || '',
  token:localStorage.getItem('token') || '',
  company_name:localStorage.getItem('company_name') || '',
  name:localStorage.getItem('name') || '',
  mobile:localStorage.getItem('mobile') || '',
  job:localStorage.getItem('job') || '',
  pic:localStorage.getItem('pic') || '',
}
export function reducer(state, action){
  switch (action.type) {
    case "login":
      for (const key in action.payload) {
        if (Object.prototype.hasOwnProperty.call(action.payload, key)) {
          localStorage.setItem(key,action.payload[key])
        }
      }
      return {
        ...state,
        username:action.payload.username,
        user_id:action.payload.user_id,
        token:action.payload.token,
        company_name:action.payload.company_name,
        name:action.payload.name,
        mobile:action.payload.mobile,
        job:action.payload.job,
        pic:action.payload.pic
      }
    case "logout":
      localStorage.clear()
      return {
        ...state,
      }
    default:
      return {...state,username:'1'};
  }
}

export const Store = React.createContext({})
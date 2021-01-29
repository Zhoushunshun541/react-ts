import React from 'react';
export const initState = {
  user_id:'',
  username:'',
  token:''
}

export function reducer(state, action){
  console.log(state,action);
  switch (action) {
    case "login":
      return {...state,username:'states'}
    default:
      return {...state,username:'1'};
  }
}

export const Store = React.createContext({})
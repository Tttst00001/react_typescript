import React, {  useState } from "react"
import http from "utils/http"
export const Login = () => {
  const [user, setUser] = useState({
    user: "",
    password: ""
  })
  
  const login = async () => {
    let res = await http.get('users', user)
    console.log(res)
    
  }

  return (
    <div>
      <dl>
        <dt>用户名: <input type="text" onChange={(e) => setUser({
          ...user, 
          user: e.target.value
        })} /></dt>
        <dd>密码: <input type="password" onChange={(e) => setUser({
          ...user, 
          password: e.target.value
        })} /></dd>
      </dl>
      <p onClick={() => login()}>登录</p>
    </div>
  )
}
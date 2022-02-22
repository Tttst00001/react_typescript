import qs from 'qs'

const basicUrl = 'http://localhost:3002'
class Http<T>{
  constructor({url, method, data}: {url: string, method: string, data: T}){
    // console.log(`url: ${basicUrl}/${url} method: ${method} data: ${data}`);
    return new Promise(resolve => {
      fetch(`${basicUrl}/${url}`).then(res => {
        if (res.ok) {
          resolve(res.json())
        }
      })
    }) 
  }
  
  // get (url: string, param?: object){
  //   return new Promise((resolve, reject) => {
  //     fetch(`${this.basicUrl}/${url}?${qs.stringify(param)}`).then(res => {
  //       if (res.ok) {
  //         resolve(res.json())
  //       }
  //     })
  //   })
  // }

  // post (url: string, param?: object) {
  //   return new Promise((resolve, reject) => {
  //     fetch(`${this.basicUrl}/${url}`, {
  //       method: "POST",
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(param)
  //     }).then(res => {
  //       if (res.ok) {
  //         resolve(res.json())
  //       }
  //     })
  //   })
  // }
}

export default Http;
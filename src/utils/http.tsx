import qs from 'qs'
class Http{
  basicUrl = 'http://localhost:3002'
  get (url: string, param?: object){
    return new Promise((resolve, reject) => {
      fetch(`${this.basicUrl}/${url}?${qs.stringify(param)}`).then(res => {
        if (res.ok) {
          resolve(res.json())
        }
      })
    })
  }

  post (url: string, param?: object) {
    return new Promise((resolve, reject) => {
      fetch(`${this.basicUrl}/${url}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(param)
      }).then(res => {
        if (res.ok) {
          resolve(res.json())
        }
      })
    })
  }
}

export default new Http();
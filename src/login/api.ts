import Http from '../utils/http'
import { User } from 'common'

export async function login(param: User){
  return await new Http({
    url: 'login',
    method: 'GET',
    data: param
  })
}

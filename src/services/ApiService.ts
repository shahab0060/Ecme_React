import AxiosBase from './axios/AxiosBase'
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const ApiService = {
    fetchDataWithAxios<Response = unknown, Request = Record<string, unknown>>(
        param: AxiosRequestConfig<Request>,
    ) {
        return new Promise<Response>((resolve, reject) => {
            AxiosBase(param)
                .then((response: AxiosResponse<Response>) => {
                    resolve(response.data)
                })
                .catch((errors: AxiosError) => {
                    reject(errors)
                })  
        })
    },
    post(url:string , data:any){
        return AxiosBase.post(url,data);
    },
    put(url:string , data:any){
        return AxiosBase.put(url,data);
    },
    delete(url:string , data:any){
        return AxiosBase.delete(url,data);
    }
}

export default ApiService

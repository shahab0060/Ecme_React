
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetCustomerIpsList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerIp/list',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerIpsCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerIp/combo',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerIp<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/CustomerIp/${id}`,
        method: 'get',
    })
}

export async function apiCreateCustomerIp({
    ...params
}) {
    return ApiService.post("customerIp",params);
}

export async function apiUpdateCustomerIp({
    ...params
}) {
    return ApiService.put("customerIp",params);
}

export async function apiDeleteCustomerIp(id:number) {
    return ApiService.delete(`customerIp?id=${id}`,id);
}
export async function apiDeleteCustomerIps(ids:number[]) {
    return ApiService.delete(`customerIps`,ids);
}


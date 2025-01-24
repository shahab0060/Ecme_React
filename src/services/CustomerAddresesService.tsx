
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetCustomerAddresesList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerAddress/list',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerAddresesCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerAddress/combo',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerAddress<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/CustomerAddress/${id}`,
        method: 'get',
    })
}

export async function apiCreateCustomerAddress({
    ...params
}) {
    return ApiService.post("customerAddress",params);
}

export async function apiUpdateCustomerAddress({
    ...params
}) {
    return ApiService.put("customerAddress",params);
}

export async function apiDeleteCustomerAddress(id:number) {
    return ApiService.delete(`customerAddress?id=${id}`,id);
}
export async function apiDeleteCustomerAddreses(ids:number[]) {
    return ApiService.delete(`customerAddreses`,ids);
}


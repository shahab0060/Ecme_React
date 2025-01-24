
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetCustomerPhonesList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerPhone/list',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerPhonesCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerPhone/combo',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerPhone<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/CustomerPhone/${id}`,
        method: 'get',
    })
}

export async function apiCreateCustomerPhone({
    ...params
}) {
    return ApiService.post("customerPhone",params);
}

export async function apiUpdateCustomerPhone({
    ...params
}) {
    return ApiService.put("customerPhone",params);
}

export async function apiDeleteCustomerPhone(id:number) {
    return ApiService.delete(`customerPhone?id=${id}`,id);
}
export async function apiDeleteCustomerPhones(ids:number[]) {
    return ApiService.delete(`customerPhones`,ids);
}


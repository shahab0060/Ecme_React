
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetCustomersList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customer/list',
        method: 'get',
        params,
    })
}

export async function apiGetCustomersCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customer/combo',
        method: 'get',
        params,
    })
}

export async function apiGetCustomer<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/Customer/${id}`,
        method: 'get',
    })
}

export async function apiCreateCustomer({
    ...params
}) {
    return ApiService.post("customer",params);
}

export async function apiUpdateCustomer({
    ...params
}) {
    return ApiService.put("customer",params);
}

export async function apiDeleteCustomer(id:number) {
    return ApiService.delete(`customer?id=${id}`,id);
}
export async function apiDeleteCustomers(ids:number[]) {
    return ApiService.delete(`customers`,ids);
}


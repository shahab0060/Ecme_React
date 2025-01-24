
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetCustomerEmailsList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerEmail/list',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerEmailsCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerEmail/combo',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerEmail<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/CustomerEmail/${id}`,
        method: 'get',
    })
}

export async function apiCreateCustomerEmail({
    ...params
}) {
    return ApiService.post("customerEmail",params);
}

export async function apiUpdateCustomerEmail({
    ...params
}) {
    return ApiService.put("customerEmail",params);
}

export async function apiDeleteCustomerEmail(id:number) {
    return ApiService.delete(`customerEmail?id=${id}`,id);
}
export async function apiDeleteCustomerEmails(ids:number[]) {
    return ApiService.delete(`customerEmails`,ids);
}


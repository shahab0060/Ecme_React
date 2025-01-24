
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetCustomerTitlesList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerTitle/list',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerTitlesCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerTitle/combo',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerTitle<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/CustomerTitle/${id}`,
        method: 'get',
    })
}

export async function apiCreateCustomerTitle({
    ...params
}) {
    return ApiService.post("customerTitle",params);
}

export async function apiUpdateCustomerTitle({
    ...params
}) {
    return ApiService.put("customerTitle",params);
}

export async function apiDeleteCustomerTitle(id:number) {
    return ApiService.delete(`customerTitle?id=${id}`,id);
}
export async function apiDeleteCustomerTitles(ids:number[]) {
    return ApiService.delete(`customerTitles`,ids);
}



import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetCustomerFollowupsList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerFollowup/list',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerFollowupsCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerFollowup/combo',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerFollowup<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/CustomerFollowup/${id}`,
        method: 'get',
    })
}

export async function apiCreateCustomerFollowup({
    ...params
}) {
    return ApiService.post("customerFollowup",params);
}

export async function apiUpdateCustomerFollowup({
    ...params
}) {
    return ApiService.put("customerFollowup",params);
}

export async function apiDeleteCustomerFollowup(id:number) {
    return ApiService.delete(`customerFollowup?id=${id}`,id);
}
export async function apiDeleteCustomerFollowups(ids:number[]) {
    return ApiService.delete(`customerFollowups`,ids);
}



import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetCustomerFollowupTypesList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerFollowupType/list',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerFollowupTypesCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerFollowupType/combo',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerFollowupType<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/CustomerFollowupType/${id}`,
        method: 'get',
    })
}

export async function apiCreateCustomerFollowupType({
    ...params
}) {
    return ApiService.post("customerFollowupType",params);
}

export async function apiUpdateCustomerFollowupType({
    ...params
}) {
    return ApiService.put("customerFollowupType",params);
}

export async function apiDeleteCustomerFollowupType(id:number) {
    return ApiService.delete(`customerFollowupType?id=${id}`,id);
}
export async function apiDeleteCustomerFollowupTypes(ids:number[]) {
    return ApiService.delete(`customerFollowupTypes`,ids);
}


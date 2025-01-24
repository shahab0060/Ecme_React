
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetCustomerProfilesList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerProfile/list',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerProfilesCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerProfile/combo',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerProfile<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/CustomerProfile/${id}`,
        method: 'get',
    })
}

export async function apiCreateCustomerProfile({
    ...params
}) {
    return ApiService.post("customerProfile",params);
}

export async function apiUpdateCustomerProfile({
    ...params
}) {
    return ApiService.put("customerProfile",params);
}

export async function apiDeleteCustomerProfile(id:number) {
    return ApiService.delete(`customerProfile?id=${id}`,id);
}
export async function apiDeleteCustomerProfiles(ids:number[]) {
    return ApiService.delete(`customerProfiles`,ids);
}


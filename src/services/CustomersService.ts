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

export async function apiGetLocationsCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/location/combo',
        method: 'get',
        params,
    })
}

export async function apiGetActivityFieldsCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/activityfield/combo',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerTitlesCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customertitle/combo',
        method: 'get',
        params,
    })
}

export async function apiGetCustomer<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/customer/${id}`,
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

export async function apiGetCustomerLog<T, U extends Record<string, unknown>>({
    ...params
}: U) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/customer/log`,
        method: 'get',
        params,
    })
}

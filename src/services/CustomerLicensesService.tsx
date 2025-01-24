
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetCustomerLicensesList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerLicense/list',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerLicensesCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerLicense/combo',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerLicense<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/CustomerLicense/${id}`,
        method: 'get',
    })
}

export async function apiCreateCustomerLicense({
    ...params
}) {
    return ApiService.post("customerLicense",params);
}

export async function apiUpdateCustomerLicense({
    ...params
}) {
    return ApiService.put("customerLicense",params);
}

export async function apiDeleteCustomerLicense(id:number) {
    return ApiService.delete(`customerLicense?id=${id}`,id);
}
export async function apiDeleteCustomerLicenses(ids:number[]) {
    return ApiService.delete(`customerLicenses`,ids);
}


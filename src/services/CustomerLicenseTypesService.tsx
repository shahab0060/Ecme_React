
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetCustomerLicenseTypesList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerLicenseType/list',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerLicenseTypesCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerLicenseType/combo',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerLicenseType<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/CustomerLicenseType/${id}`,
        method: 'get',
    })
}

export async function apiCreateCustomerLicenseType({
    ...params
}) {
    return ApiService.post("customerLicenseType",params);
}

export async function apiUpdateCustomerLicenseType({
    ...params
}) {
    return ApiService.put("customerLicenseType",params);
}

export async function apiDeleteCustomerLicenseType(id:number) {
    return ApiService.delete(`customerLicenseType?id=${id}`,id);
}
export async function apiDeleteCustomerLicenseTypes(ids:number[]) {
    return ApiService.delete(`customerLicenseTypes`,ids);
}


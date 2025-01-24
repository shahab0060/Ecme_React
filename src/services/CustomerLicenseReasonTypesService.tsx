
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetCustomerLicenseReasonTypesList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerLicenseReasonType/list',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerLicenseReasonTypesCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerLicenseReasonType/combo',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerLicenseReasonType<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/CustomerLicenseReasonType/${id}`,
        method: 'get',
    })
}

export async function apiCreateCustomerLicenseReasonType({
    ...params
}) {
    return ApiService.post("customerLicenseReasonType",params);
}

export async function apiUpdateCustomerLicenseReasonType({
    ...params
}) {
    return ApiService.put("customerLicenseReasonType",params);
}

export async function apiDeleteCustomerLicenseReasonType(id:number) {
    return ApiService.delete(`customerLicenseReasonType?id=${id}`,id);
}
export async function apiDeleteCustomerLicenseReasonTypes(ids:number[]) {
    return ApiService.delete(`customerLicenseReasonTypes`,ids);
}


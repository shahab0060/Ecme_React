
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetProfileDataTypesList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/profileDataType/list',
        method: 'get',
        params,
    })
}

export async function apiGetProfileDataTypesCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/profileDataType/combo',
        method: 'get',
        params,
    })
}

export async function apiGetProfileDataType<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/ProfileDataType/${id}`,
        method: 'get',
    })
}

export async function apiCreateProfileDataType({
    ...params
}) {
    return ApiService.post("profileDataType",params);
}

export async function apiUpdateProfileDataType({
    ...params
}) {
    return ApiService.put("profileDataType",params);
}

export async function apiDeleteProfileDataType(id:number) {
    return ApiService.delete(`profileDataType?id=${id}`,id);
}
export async function apiDeleteProfileDataTypes(ids:number[]) {
    return ApiService.delete(`profileDataTypes`,ids);
}


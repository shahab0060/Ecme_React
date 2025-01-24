
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetActivityFieldsList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/activityField/list',
        method: 'get',
        params,
    })
}

export async function apiGetActivityFieldsCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/activityField/combo',
        method: 'get',
        params,
    })
}

export async function apiGetActivityField<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/ActivityField/${id}`,
        method: 'get',
    })
}

export async function apiCreateActivityField({
    ...params
}) {
    return ApiService.post("activityField",params);
}

export async function apiUpdateActivityField({
    ...params
}) {
    return ApiService.put("activityField",params);
}

export async function apiDeleteActivityField(id:number) {
    return ApiService.delete(`activityField?id=${id}`,id);
}
export async function apiDeleteActivityFields(ids:number[]) {
    return ApiService.delete(`activityFields`,ids);
}


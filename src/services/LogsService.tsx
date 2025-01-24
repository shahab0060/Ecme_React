
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetLogsList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/log/list',
        method: 'get',
        params,
    })
}

export async function apiGetLogsCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/log/combo',
        method: 'get',
        params,
    })
}

export async function apiGetLog<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/Log/${id}`,
        method: 'get',
    })
}

export async function apiCreateLog({
    ...params
}) {
    return ApiService.post("log",params);
}

export async function apiUpdateLog({
    ...params
}) {
    return ApiService.put("log",params);
}

export async function apiDeleteLog(id:number) {
    return ApiService.delete(`log?id=${id}`,id);
}
export async function apiDeleteLogs(ids:number[]) {
    return ApiService.delete(`logs`,ids);
}


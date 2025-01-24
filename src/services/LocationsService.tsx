
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetLocationsList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/location/list',
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

export async function apiGetLocation<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/Location/${id}`,
        method: 'get',
    })
}

export async function apiCreateLocation({
    ...params
}) {
    return ApiService.post("location",params);
}

export async function apiUpdateLocation({
    ...params
}) {
    return ApiService.put("location",params);
}

export async function apiDeleteLocation(id:number) {
    return ApiService.delete(`location?id=${id}`,id);
}
export async function apiDeleteLocations(ids:number[]) {
    return ApiService.delete(`locations`,ids);
}


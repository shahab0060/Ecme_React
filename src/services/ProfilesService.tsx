
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetProfilesList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/profile/list',
        method: 'get',
        params,
    })
}

export async function apiGetProfilesCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/profile/combo',
        method: 'get',
        params,
    })
}

export async function apiGetProfile<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/Profile/${id}`,
        method: 'get',
    })
}

export async function apiCreateProfile({
    ...params
}) {
    return ApiService.post("profile",params);
}

export async function apiUpdateProfile({
    ...params
}) {
    return ApiService.put("profile",params);
}

export async function apiDeleteProfile(id:number) {
    return ApiService.delete(`profile?id=${id}`,id);
}
export async function apiDeleteProfiles(ids:number[]) {
    return ApiService.delete(`profiles`,ids);
}


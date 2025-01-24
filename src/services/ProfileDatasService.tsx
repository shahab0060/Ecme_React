
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetProfileDatasList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/profileData/list',
        method: 'get',
        params,
    })
}

export async function apiGetProfileDatasCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/profileData/combo',
        method: 'get',
        params,
    })
}

export async function apiGetProfileData<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/ProfileData/${id}`,
        method: 'get',
    })
}

export async function apiCreateProfileData({
    ...params
}) {
    return ApiService.post("profileData",params);
}

export async function apiUpdateProfileData({
    ...params
}) {
    return ApiService.put("profileData",params);
}

export async function apiDeleteProfileData(id:number) {
    return ApiService.delete(`profileData?id=${id}`,id);
}
export async function apiDeleteProfileDatas(ids:number[]) {
    return ApiService.delete(`profileDatas`,ids);
}


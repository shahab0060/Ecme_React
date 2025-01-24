
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetUsersList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/user/list',
        method: 'get',
        params,
    })
}

export async function apiGetUsersCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/user/combo',
        method: 'get',
        params,
    })
}

export async function apiGetUser<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/User/${id}`,
        method: 'get',
    })
}

export async function apiCreateUser({
    ...params
}) {
    return ApiService.post("user",params);
}

export async function apiUpdateUser({
    ...params
}) {
    return ApiService.put("user",params);
}

export async function apiDeleteUser(id:number) {
    return ApiService.delete(`user?id=${id}`,id);
}
export async function apiDeleteUsers(ids:number[]) {
    return ApiService.delete(`users`,ids);
}


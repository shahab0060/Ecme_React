
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetCustomerUsersList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerUser/list',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerUsersCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/customerUser/combo',
        method: 'get',
        params,
    })
}

export async function apiGetCustomerUser<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/CustomerUser/${id}`,
        method: 'get',
    })
}

export async function apiCreateCustomerUser({
    ...params
}) {
    return ApiService.post("customerUser",params);
}

export async function apiUpdateCustomerUser({
    ...params
}) {
    return ApiService.put("customerUser",params);
}

export async function apiDeleteCustomerUser(id:number) {
    return ApiService.delete(`customerUser?id=${id}`,id);
}
export async function apiDeleteCustomerUsers(ids:number[]) {
    return ApiService.delete(`customerUsers`,ids);
}


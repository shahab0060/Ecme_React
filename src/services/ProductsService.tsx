
import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetProductsList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/product/list',
        method: 'get',
        params,
    })
}

export async function apiGetProductsCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/product/combo',
        method: 'get',
        params,
    })
}

export async function apiGetProduct<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/Product/${id}`,
        method: 'get',
    })
}

export async function apiCreateProduct({
    ...params
}) {
    return ApiService.post("product",params);
}

export async function apiUpdateProduct({
    ...params
}) {
    return ApiService.put("product",params);
}

export async function apiDeleteProduct(id:number) {
    return ApiService.delete(`product?id=${id}`,id);
}
export async function apiDeleteProducts(ids:number[]) {
    return ApiService.delete(`products`,ids);
}



import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetBrandsList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/brand/list',
        method: 'get',
        params,
    })
}

export async function apiGetBrandsCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/brand/combo',
        method: 'get',
        params,
    })
}

export async function apiGetBrand<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/Brand/${id}`,
        method: 'get',
    })
}

export async function apiCreateBrand({
    ...params
}) {
    return ApiService.post("brand",params);
}

export async function apiUpdateBrand({
    ...params
}) {
    return ApiService.put("brand",params);
}

export async function apiDeleteBrand(id:number) {
    return ApiService.delete(`brand?id=${id}`,id);
}
export async function apiDeleteBrands(ids:number[]) {
    return ApiService.delete(`brands`,ids);
}



import { number } from 'zod'
import ApiService from './ApiService'

export async function apiGetWorkerEventsList<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/workerEvent/list',
        method: 'get',
        params,
    })
}

export async function apiGetWorkerEventsCombo<T, U extends Record<string, unknown>>(
    params: U,
) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/workerEvent/combo',
        method: 'get',
        params,
    })
}

export async function apiGetWorkerEvent<T>(id:any) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/WorkerEvent/${id}`,
        method: 'get',
    })
}

export async function apiCreateWorkerEvent({
    ...params
}) {
    return ApiService.post("workerEvent",params);
}

export async function apiUpdateWorkerEvent({
    ...params
}) {
    return ApiService.put("workerEvent",params);
}

export async function apiDeleteWorkerEvent(id:number) {
    return ApiService.delete(`workerEvent?id=${id}`,id);
}
export async function apiDeleteWorkerEvents(ids:number[]) {
    return ApiService.delete(`workerEvents`,ids);
}


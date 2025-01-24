import type { ReactNode, CSSProperties } from 'react'

export interface CommonProps {
    id?: string
    className?: string
    children?: ReactNode
    style?: CSSProperties
}

// export type TableQueries = {
//     total?: number
//     pageIndex?: number
//     pageSize?: number
//     query?: string
//     sort?: {
//         order: 'asc' | 'desc' | ''
//         key: string | number
//     }
// }

export type ComboDto={
    title?:string,
    value?:string
}

export type TableQueries = {
    total?: number
    pageId?: number
    takeEntity?: number
    sortType? : string
    sort?:string
    search:string
}

export type TraslationFn = (
    key: string,
    fallback?: string | Record<string, string | number>,
) => string


import { apiGetCustomerLicenseTypesList } from '@/services/CustomerLicenseTypesService'
import useSWR from 'swr'
import { useCustomerLicenseTypeListStore } from '../store/customerLicenseTypeListStore'
import type { GetCustomerLicenseTypesListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useCustomerLicenseTypeList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedCustomerLicenseType,
        setSelectedCustomerLicenseType,
        setSelectAllCustomerLicenseType,
        setFilterData,
    } = useCustomerLicenseTypeListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['CustomerLicenseType/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetCustomerLicenseTypesList<GetCustomerLicenseTypesListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const customerLicenseTypeList = data?.customerLicenseTypes || []

    const customerLicenseTypeListTotal = data?.total || 0

    return {
        customerLicenseTypeList,
        customerLicenseTypeListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedCustomerLicenseType,
        setSelectedCustomerLicenseType,
        setSelectAllCustomerLicenseType,
        setFilterData,
    }
}


import { apiGetCustomerLicenseReasonTypesList } from '@/services/CustomerLicenseReasonTypesService'
import useSWR from 'swr'
import { useCustomerLicenseReasonTypeListStore } from '../store/customerLicenseReasonTypeListStore'
import type { GetCustomerLicenseReasonTypesListResponse } from '../types'
import type { TableQueries } from '@/@types/common'

export default function useCustomerLicenseReasonTypeList() {
    const {
        tableData,
        filterData,
        setTableData,
        selectedCustomerLicenseReasonType,
        setSelectedCustomerLicenseReasonType,
        setSelectAllCustomerLicenseReasonType,
        setFilterData,
    } = useCustomerLicenseReasonTypeListStore((state) => state)

    const { data, error, isLoading, mutate } = useSWR(
        ['CustomerLicenseReasonType/list', { ...tableData, ...filterData }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) =>
            apiGetCustomerLicenseReasonTypesList<GetCustomerLicenseReasonTypesListResponse, TableQueries>(params),
        {
            revalidateOnFocus: false,
        },
    )

    const customerLicenseReasonTypeList = data?.customerLicenseReasonTypes || []

    const customerLicenseReasonTypeListTotal = data?.total || 0

    return {
        customerLicenseReasonTypeList,
        customerLicenseReasonTypeListTotal,
        error,
        isLoading,
        tableData,
        filterData,
        mutate,
        setTableData,
        selectedCustomerLicenseReasonType,
        setSelectedCustomerLicenseReasonType,
        setSelectAllCustomerLicenseReasonType,
        setFilterData,
    }
}

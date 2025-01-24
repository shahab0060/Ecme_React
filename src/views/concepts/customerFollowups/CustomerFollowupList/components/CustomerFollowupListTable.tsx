
import { useMemo } from 'react'
import { useState } from 'react'
import Avatar from '@/components/ui/Avatar'
import Tag from '@/components/ui/Tag'
import Tooltip from '@/components/ui/Tooltip'
import DataTable from '@/components/shared/DataTable'
import useCustomerFollowupList from '../hooks/useCustomerFollowupList'
import { Link, useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import { TbPencil, TbEye, TbTrash } from 'react-icons/tb'
import type { OnSortParam, ColumnDef, Row } from '@/components/shared/DataTable'
import type { CustomerFollowup } from '../types'
import type { TableQueries } from '@/@types/common'
import { apiDeleteCustomerFollowup, apiGetCustomerFollowup, apiGetCustomerFollowupsList } from '@/services/CustomerFollowupsService'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'

const NameColumn = ({ row }: { row: CustomerFollowup }) => {
    return (
        <div className="flex items-center">
            <Link
                className={`hover:text-primary ml-2 rtl:mr-2 font-semibold text-gray-900 dark:text-gray-100`}
                to={`/concepts/customerFollowups/customerFollowup-details/${row.id}`}
            >
                {row.customerFollowupTypeId}
            </Link>
        </div>
    )
}

const ActionColumn = ({
    onEdit,
    onViewDetail,
    onDelete,
}: {
    onEdit: () => void
    onViewDetail: () => void
    onDelete: () => void
}) => {
    return (
        <div className="flex items-center gap-3">
            <Tooltip title="ویرایش کنید">
                <div
                    className={`text-xl cursor-pointer select-none font-semibold`}
                    role="button"
                    onClick={onEdit}
                >
                    <TbPencil />
                </div>
            </Tooltip>
            <Tooltip title="مشاهده کنید">
                <div
                    className={`text-xl cursor-pointer select-none font-semibold`}
                    role="button"
                    onClick={onViewDetail}
                >
                    <TbEye />
                </div>
            </Tooltip>
            <Tooltip title="حذف کنید">
                <div
                    className={`text-xl cursor-pointer select-none font-semibold`}
                    role="button"
                    onClick={onDelete}
                >
                    <TbTrash />
                </div>
            </Tooltip>
        </div>
    )
}

const CustomerFollowupListTable = () => {
    const navigate = useNavigate()

    const {
        customerFollowupList,
        customerFollowupListTotal,
        tableData,
        isLoading,
        setTableData,
        setSelectAllCustomerFollowup,
        setSelectedCustomerFollowup,
        selectedCustomerFollowup,
    } = useCustomerFollowupList()

    const handleEdit = (customerFollowup: CustomerFollowup) => {
        navigate(`/concepts/customerFollowups/customerFollowup-edit/${customerFollowup.id}`)
    }

    const handleViewDetails = (customerFollowup: CustomerFollowup) => {
        navigate(`/concepts/customerFollowups/customerFollowup-details/${customerFollowup.id}`)
    }
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleDelete = async (customerFollowup: CustomerFollowup) => {
        if (customerFollowup.id) {
            try {
                const response = await apiDeleteCustomerFollowup(customerFollowup.id);
                setIsSubmiting(false)

                if (response.status === 200) {
                    toast.push(
                        <Notification type="success">پیگیری مشتری حذف شد!</Notification>,
                        { placement: 'top-center' },
                    )
                    navigate('/concepts/customerFollowups/customerFollowup-list')
                    return;
                }
                if (response.status === 400) {
                    toast.push(
                        <Notification type="danger">${response.data}</Notification>,
                        { placement: 'top-center' },
                    )
                }
                return;
            }
            catch {

            }
        }
        toast.push(
            <Notification type="danger">مشکلی در انجام عملیات پیش آمد</Notification>,
            { placement: 'top-center' },
        )
    }

    const columns: ColumnDef<CustomerFollowup>[] = useMemo(
        () => [
            {
                header: 'نوع پیگیری',
                accessorKey: 'customerFollowupTypeId',
                cell: (props) => {
                    const row = props.row.original
                    return <NameColumn row={row} />
                },
            },
            
{
                header: 'مشتری',
                accessorKey: 'customerTitle',
            },

{
                header: 'کاربر',
                accessorKey: 'userTitle',
            },

            {
                header: 'نتیجه',
                accessorKey: 'result',
            },

{
                header: 'کاربر ارجاع شده',
                accessorKey: 'referredUserTitle',
            },
            {
                header: '',
                id: 'action',
                cell: (props) => (
                    <ActionColumn
                        onEdit={() => handleEdit(props.row.original)}
                        onViewDetail={() =>
                            handleViewDetails(props.row.original)
                        }
                        onDelete={() =>
                            handleDelete(props.row.original)
                        }
                    />
                ),
            },
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    )

    const handleSetTableData = (data: TableQueries) => {
        setTableData(data)
        if (selectedCustomerFollowup.length > 0) {
            setSelectAllCustomerFollowup([])
        }
    }

    const handlePaginationChange = (page: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageId = page
        handleSetTableData(newTableData)
    }

    const handleSelectChange = (value: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.takeEntity = Number(value)
        newTableData.pageId = 1
        handleSetTableData(newTableData)
    }

    const handleSort = (sort: OnSortParam) => {
        var key = sort.key;
        var order = sort.order;
        if (key == null || key == "" || key == '')
            key = '0';
        if (order == null || order == "")
            order = 'ascending';
        const newTableData = cloneDeep(tableData)
        newTableData.sort = key as string;
        newTableData.sortType = order;

        handleSetTableData(newTableData)
    }

    const handleRowSelect = (checked: boolean, row: CustomerFollowup) => {
        setSelectedCustomerFollowup(checked, row)
    }

    const handleAllRowSelect = (checked: boolean, rows: Row<CustomerFollowup>[]) => {
        if (checked) {
            const originalRows = rows.map((row) => row.original)
            setSelectAllCustomerFollowup(originalRows)
        } else {
            setSelectAllCustomerFollowup([])
        }
    }

    return (
        <DataTable
            selectable
            columns={columns}
            data={customerFollowupList}
            noData={!isLoading && customerFollowupList.length === 0}
            skeletonAvatarColumns={[0]}
            skeletonAvatarProps={{ width: 28, height: 28 }}
            loading={isLoading}
            pagingData={{
                total: customerFollowupListTotal,
                pageId: tableData.pageId as number,
                takeEntity: tableData.takeEntity as number,
            }}
            checkboxChecked={(row) =>
                selectedCustomerFollowup.some((selected) => selected.id === row.id)
            }
            onPaginationChange={handlePaginationChange}
            onSelectChange={handleSelectChange}
            onSort={handleSort}
            onCheckBoxChange={handleRowSelect}
            onIndeterminateCheckBoxChange={handleAllRowSelect}
        />
    )
}

export default CustomerFollowupListTable

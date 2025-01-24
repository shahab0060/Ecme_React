
import { useState } from 'react'
import Container from '@/components/shared/Container'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import { apiGetCustomerIp } from '@/services/CustomerIpsService'
import CustomerIpForm from '../CustomerIpForm'
import sleep from '@/utils/sleep'
import NoUserFound from '@/assets/svg/NoUserFound'
import { TbTrash, TbArrowNarrowLeft } from 'react-icons/tb'
import { useParams, useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import type { CustomerIpFormSchema } from '../CustomerIpForm'
import type { CustomerIp } from '../CustomerIpList/types'
import { apiUpdateCustomerIp } from '@/services/CustomerIpsService'

const CustomerIpEdit = () => {
    const { id } = useParams()

    const navigate = useNavigate()

    const { data, isLoading } = useSWR(
        [`/api/customerIp${id}`, { id: id as string }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) => apiGetCustomerIp<CustomerIp>(id),
        {
            revalidateOnFocus: false,
            revalidateIfStale: false,
        },
    )

    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false)
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleFormSubmit = async (values: CustomerIpFormSchema) => {
        setIsSubmiting(true)
        try {
            const response = apiUpdateCustomerIp(values);
            setIsSubmiting(false)

            if ((await response).status === 200) {
                toast.push(
                    <Notification type="success">آیپی مشتری ویرایش شد!</Notification>,
                    { placement: 'top-center' },
                )
                navigate('/concepts/customerIps/customerIp-list')
                return;
            }
            if ((await response).status === 400) {
                toast.push(
                    <Notification type="danger">${(await response).data}</Notification>,
                    { placement: 'top-center' },
                )
            }
        }
        catch (error) {
            console.log('catch is here');
            console.log(error);
            //console.log(error.response);
        }
        setIsSubmiting(false)
        toast.push(
            <Notification type="danger">مشکلی در انجام عملیات پیش آمد</Notification>,
            { placement: 'top-center' },
        )
    }

    const getDefaultValues = () => {
        if (data) {
            const {
                 id,
                 customerId,
iP,
            } = data

            return {
                 id,
                 customerId,
iP,
            }
        }

        return {}
    }

    const handleConfirmDelete = () => {
        setDeleteConfirmationOpen(true)
        toast.push(
            <Notification type="success">آیپی مشتری حذف شد!</Notification>,
            { placement: 'top-center' },
        )
        navigate('/concepts/customerIps/customerIp-list')
    }

    const handleDelete = () => {
        setDeleteConfirmationOpen(true)
    }

    const handleCancel = () => {
        setDeleteConfirmationOpen(false)
    }

    const handleBack = () => {
        history.back()
    }

    return (
        <>
            {!isLoading && !data && (
                <div className="h-full flex flex-col items-center justify-center">
                    <NoUserFound height={280} width={280} />
                    <h3 className="mt-8">آیپی مشتری پیدا نشد!</h3>
                </div>
            )}
            {!isLoading && data && (
                <>
                    <CustomerIpForm
                        defaultValues={getDefaultValues() as CustomerIpFormSchema}
                        newCustomerIp={false}
                        onFormSubmit={handleFormSubmit}
                    >
                        <Container>
                            <div className="flex items-center justify-between px-8">
                                <Button
                                    className="ltr:mr-3 rtl:ml-3"
                                    type="button"
                                    variant="plain"
                                    icon={<TbArrowNarrowLeft />}
                                    onClick={handleBack}
                                >
                                    برگشت
                                </Button>
                                <div className="flex items-center">
                                    <Button
                                        className="ltr:mr-3 rtl:ml-3"
                                        type="button"
                                        customColorClass={() =>
                                            'border-error ring-1 ring-error text-error hover:border-error hover:ring-error hover:text-error bg-transparent'
                                        }
                                        icon={<TbTrash />}
                                        onClick={handleDelete}
                                    >
                                        حذف کنید
                                    </Button>
                                    <Button
                                        variant="solid"
                                        type="submit"
                                        loading={isSubmiting}
                                    >
                                        ذخیره کنید
                                    </Button>
                                </div>
                            </div>
                        </Container>
                    </CustomerIpForm>
                    <ConfirmDialog
                        isOpen={deleteConfirmationOpen}
                        type="danger"
                        title="آیپی های مشتری را حذف کنید"
                        onClose={handleCancel}
                        onRequestClose={handleCancel}
                        onCancel={handleCancel}
                        onConfirm={handleConfirmDelete}
                    >
                        <p>
                            آیا مطمئنید که می خواهید این آیپی مشتری را حذف کنید؟ این
                            عمل را نمی توان واگرد کرد.{' '}
                        </p>
                    </ConfirmDialog>
                </>
            )}
        </>
    )
}

export default CustomerIpEdit

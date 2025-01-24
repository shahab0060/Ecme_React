
import { useState } from 'react'
import Container from '@/components/shared/Container'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import CustomerLicenseReasonTypeForm from '../CustomerLicenseReasonTypeForm'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import sleep from '@/utils/sleep'
import { TbTrash } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import type { CustomerLicenseReasonTypeFormSchema } from '../CustomerLicenseReasonTypeForm'
import axios, { AxiosResponse } from 'axios'
import { apiCreateCustomerLicenseReasonType } from '@/services/CustomerLicenseReasonTypesService'

const CustomerLicenseReasonTypeEdit = () => {
    const navigate = useNavigate()

    const [discardConfirmationOpen, setDiscardConfirmationOpen] =
        useState(false)
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleFormSubmit = async (values: CustomerLicenseReasonTypeFormSchema) => {
        setIsSubmiting(true)
        try {
            const response = apiCreateCustomerLicenseReasonType(values);
            setIsSubmiting(false)

            if ((await response).status === 200) {
                toast.push(
                    <Notification type="success">نوع دلیل مجوز کاربر ایجاد شد!</Notification>,
                    { placement: 'top-center' },
                )
                navigate('/concepts/customerLicenseReasonTypes/customerLicenseReasonType-list')
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
        }
        setIsSubmiting(false)
        toast.push(
            <Notification type="danger">مشکلی در انجام عملیات پیش آمد</Notification>,
            { placement: 'top-center' },
        )
    }

    const handleConfirmDiscard = () => {
        setDiscardConfirmationOpen(true)
        toast.push(
            <Notification type="success">نوع دلیل مجوز کاربر کنار گذاشته شد!</Notification>,
            { placement: 'top-center' },
        )
        navigate('/concepts/customerLicenseReasonTypes/customerLicenseReasonType-list')
    }

    const handleDiscard = () => {
        setDiscardConfirmationOpen(true)
    }

    const handleCancel = () => {
        setDiscardConfirmationOpen(false)
    }

    return (
        <>
            <CustomerLicenseReasonTypeForm
                newCustomerLicenseReasonType
               
                defaultValues={{
                    id:0,
                    name: '',
                }}
                onFormSubmit={handleFormSubmit}
            >
                <Container>
                    <div className="flex items-center justify-between px-8">
                        <span></span>
                        <div className="flex items-center">
                            <Button
                                className="ltr:mr-3 rtl:ml-3"
                                type="button"
                                customColorClass={() =>
                                    'border-error ring-1 ring-error text-error hover:border-error hover:ring-error hover:text-error bg-transparent'
                                }
                                icon={<TbTrash />}
                                onClick={handleDiscard}
                            >
                                دور انداختن
                            </Button>
                            <Button
                                variant="solid"
                                type="submit"
                                loading={isSubmiting}
                            >
                                ایجاد کنید
                            </Button>
                        </div>
                    </div>
                </Container>
            </CustomerLicenseReasonTypeForm>
            <ConfirmDialog
                isOpen={discardConfirmationOpen}
                type="danger"
                title="تغییرات را کنار بگذارید"
                onClose={handleCancel}
                onRequestClose={handleCancel}
                onCancel={handleCancel}
                onConfirm={handleConfirmDiscard}
            >
                <p>
                    آیا مطمئنید که می خواهید این را کنار بگذارید؟ این اقدام نمی تواند
                    لغو شود.{' '}
                </p>
            </ConfirmDialog>
        </>
    )
}

export default CustomerLicenseReasonTypeEdit

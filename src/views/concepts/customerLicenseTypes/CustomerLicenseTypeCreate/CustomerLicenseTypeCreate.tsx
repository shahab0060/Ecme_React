
import { useState } from 'react'
import Container from '@/components/shared/Container'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import CustomerLicenseTypeForm from '../CustomerLicenseTypeForm'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import sleep from '@/utils/sleep'
import { TbTrash } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import type { CustomerLicenseTypeFormSchema } from '../CustomerLicenseTypeForm'
import axios, { AxiosResponse } from 'axios'
import { apiCreateCustomerLicenseType } from '@/services/CustomerLicenseTypesService'

const CustomerLicenseTypeEdit = () => {
    const navigate = useNavigate()

    const [discardConfirmationOpen, setDiscardConfirmationOpen] =
        useState(false)
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleFormSubmit = async (values: CustomerLicenseTypeFormSchema) => {
        setIsSubmiting(true)
        try {
            const response = apiCreateCustomerLicenseType(values);
            setIsSubmiting(false)

            if ((await response).status === 200) {
                toast.push(
                    <Notification type="success">نوع مجوز کاربر ایجاد شد!</Notification>,
                    { placement: 'top-center' },
                )
                navigate('/concepts/customerLicenseTypes/customerLicenseType-list')
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
            <Notification type="success">نوع مجوز کاربر کنار گذاشته شد!</Notification>,
            { placement: 'top-center' },
        )
        navigate('/concepts/customerLicenseTypes/customerLicenseType-list')
    }

    const handleDiscard = () => {
        setDiscardConfirmationOpen(true)
    }

    const handleCancel = () => {
        setDiscardConfirmationOpen(false)
    }

    return (
        <>
            <CustomerLicenseTypeForm
                newCustomerLicenseType
               
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
            </CustomerLicenseTypeForm>
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

export default CustomerLicenseTypeEdit

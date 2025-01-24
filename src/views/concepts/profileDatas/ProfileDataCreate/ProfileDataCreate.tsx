
import { useState } from 'react'
import Container from '@/components/shared/Container'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import ProfileDataForm from '../ProfileDataForm'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import sleep from '@/utils/sleep'
import { TbTrash } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import type { ProfileDataFormSchema } from '../ProfileDataForm'
import axios, { AxiosResponse } from 'axios'
import { apiCreateProfileData } from '@/services/ProfileDatasService'

const ProfileDataEdit = () => {
    const navigate = useNavigate()

    const [discardConfirmationOpen, setDiscardConfirmationOpen] =
        useState(false)
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleFormSubmit = async (values: ProfileDataFormSchema) => {
        setIsSubmiting(true)
        try {
            const response = apiCreateProfileData(values);
            setIsSubmiting(false)

            if ((await response).status === 200) {
                toast.push(
                    <Notification type="success">اطلاعات پروفایل ایجاد شد!</Notification>,
                    { placement: 'top-center' },
                )
                navigate('/concepts/profileDatas/profileData-list')
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
            <Notification type="success">اطلاعات پروفایل کنار گذاشته شد!</Notification>,
            { placement: 'top-center' },
        )
        navigate('/concepts/profileDatas/profileData-list')
    }

    const handleDiscard = () => {
        setDiscardConfirmationOpen(true)
    }

    const handleCancel = () => {
        setDiscardConfirmationOpen(false)
    }

    return (
        <>
            <ProfileDataForm
                newProfileData
               
                defaultValues={{
                    id:0,
                    parentId: 0,
profileDataTypeId: 0,
profileId: 0,
name: '',
fetchCode: '',
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
            </ProfileDataForm>
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

export default ProfileDataEdit

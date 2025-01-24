
import { useState } from 'react'
import Container from '@/components/shared/Container'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import { apiGetProfileData } from '@/services/ProfileDatasService'
import ProfileDataForm from '../ProfileDataForm'
import sleep from '@/utils/sleep'
import NoUserFound from '@/assets/svg/NoUserFound'
import { TbTrash, TbArrowNarrowLeft } from 'react-icons/tb'
import { useParams, useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import type { ProfileDataFormSchema } from '../ProfileDataForm'
import type { ProfileData } from '../ProfileDataList/types'
import { apiUpdateProfileData } from '@/services/ProfileDatasService'

const ProfileDataEdit = () => {
    const { id } = useParams()

    const navigate = useNavigate()

    const { data, isLoading } = useSWR(
        [`/api/profileData${id}`, { id: id as string }],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, params]) => apiGetProfileData<ProfileData>(id),
        {
            revalidateOnFocus: false,
            revalidateIfStale: false,
        },
    )

    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false)
    const [isSubmiting, setIsSubmiting] = useState(false)

    const handleFormSubmit = async (values: ProfileDataFormSchema) => {
        setIsSubmiting(true)
        try {
            const response = apiUpdateProfileData(values);
            setIsSubmiting(false)

            if ((await response).status === 200) {
                toast.push(
                    <Notification type="success">اطلاعات پروفایل ویرایش شد!</Notification>,
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
                 parentId,
profileDataTypeId,
profileId,
name,
fetchCode,
            } = data

            return {
                 id,
                 parentId,
profileDataTypeId,
profileId,
name,
fetchCode,
            }
        }

        return {}
    }

    const handleConfirmDelete = () => {
        setDeleteConfirmationOpen(true)
        toast.push(
            <Notification type="success">اطلاعات پروفایل حذف شد!</Notification>,
            { placement: 'top-center' },
        )
        navigate('/concepts/profileDatas/profileData-list')
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
                    <h3 className="mt-8">اطلاعات پروفایل پیدا نشد!</h3>
                </div>
            )}
            {!isLoading && data && (
                <>
                    <ProfileDataForm
                        defaultValues={getDefaultValues() as ProfileDataFormSchema}
                        newProfileData={false}
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
                    </ProfileDataForm>
                    <ConfirmDialog
                        isOpen={deleteConfirmationOpen}
                        type="danger"
                        title="اطلاعات پروفایل ها را حذف کنید"
                        onClose={handleCancel}
                        onRequestClose={handleCancel}
                        onCancel={handleCancel}
                        onConfirm={handleConfirmDelete}
                    >
                        <p>
                            آیا مطمئنید که می خواهید این اطلاعات پروفایل را حذف کنید؟ این
                            عمل را نمی توان واگرد کرد.{' '}
                        </p>
                    </ConfirmDialog>
                </>
            )}
        </>
    )
}

export default ProfileDataEdit

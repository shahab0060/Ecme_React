
import { useState } from 'react'
import StickyFooter from '@/components/shared/StickyFooter'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import Avatar from '@/components/ui/Avatar'
import Tooltip from '@/components/ui/Tooltip'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import RichTextEditor from '@/components/shared/RichTextEditor'
import ConfirmDialog from '@/components/shared/ConfirmDialog'
import useBrandList from '../hooks/useBrandList'
import { TbChecks } from 'react-icons/tb'

const BrandListSelected = () => {
    const {
        selectedBrand,
        brandList,
        mutate,
        brandListTotal,
        setSelectAllBrand,
    } = useBrandList()

    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false)

    const handleDelete = () => {
        setDeleteConfirmationOpen(true)
    }

    const handleCancel = () => {
        setDeleteConfirmationOpen(false)
    }

    const handleConfirmDelete = () => {
        const newBrandList = brandList.filter((brand) => {
            return !selectedBrand.some(
                (selected) => selected.id === brand.id,
            )
        })
        setSelectAllBrand([])
        mutate(
            {
                brands: newBrandList,
                total: brandListTotal - selectedBrand.length,
            },
            false,
        )
        setDeleteConfirmationOpen(false)
    }

    return (
        <>
            {selectedBrand.length > 0 && (
                <StickyFooter
                    className=" flex items-center justify-between py-4 bg-white dark:bg-gray-800"
                    stickyClass="-mx-4 sm:-mx-8 border-t border-gray-200 dark:border-gray-700 px-8"
                    defaultClass="container mx-auto px-8 rounded-xl border border-gray-200 dark:border-gray-600 mt-4"
                >
                    <div className="container mx-auto">
                        <div className="flex items-center justify-between">
                            <span>
                                {selectedBrand.length > 0 && (
                                    <span className="flex items-center gap-2">
                                        <span className="text-lg text-primary">
                                            <TbChecks />
                                        </span>
                                        <span className="font-semibold flex items-center gap-1">
                                            <span className="heading-text">
                                                {selectedBrand.length}{' '}
                                                برند ها
                                            </span>
                                            <span>انتخاب شده</span>
                                        </span>
                                    </span>
                                )}
                            </span>

                            <div className="flex items-center">
                                <Button
                                    size="sm"
                                    className="ltr:mr-3 rtl:ml-3"
                                    type="button"
                                    customColorClass={() =>
                                        'border-error ring-1 ring-error text-error hover:border-error hover:ring-error hover:text-error'
                                    }
                                    onClick={handleDelete}
                                >
                                    حذف کنید
                                </Button>
                                
                            </div>
                        </div>
                    </div>
                </StickyFooter>
            )}
            <ConfirmDialog
                isOpen={deleteConfirmationOpen}
                type="danger"
                title="برند ها را حذف کنید"
                onClose={handleCancel}
                onRequestClose={handleCancel}
                onCancel={handleCancel}
                onConfirm={handleConfirmDelete}
            >
                <p>
                    {' '}
                    آیا مطمئنید که می خواهید این برند ها را حذف کنید؟ این اقدام
                    قابل لغو نیست.{' '}
                </p>
            </ConfirmDialog>
           
        </>
    )
}

export default BrandListSelected


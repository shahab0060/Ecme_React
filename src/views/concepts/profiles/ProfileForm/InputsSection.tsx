
import { useMemo } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Select, { Option as DefaultOption } from '@/components/ui/Select'
import Avatar from '@/components/ui/Avatar'
import { FormItem } from '@/components/ui/Form'
import NumericInput from '@/components/shared/NumericInput'
import { countryList } from '@/constants/countries.constant'
import { Controller } from 'react-hook-form'
import { components } from 'react-select'
import type { FormSectionBaseProps } from './types'
import type { ControlProps, OptionProps } from 'react-select'
import CreatableSelect from 'react-select/creatable'

import { apiGetBrandsCombo } from '@/services/BrandsService'

import { apiGetProductsCombo } from '@/services/ProductsService'
import type { ComboDto } from '@/@types/common'

type InputsSectionProps = FormSectionBaseProps
var params;

const brands = await apiGetBrandsCombo<ComboDto[], any>(params);

const products = await apiGetProductsCombo<ComboDto[], any>(params);
const InputsSection = ({ control, errors }: InputsSectionProps) => {
    return (
        <Card>
            <h4 className="mb-6">نمای کلی</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <div style={{ display: 'none' }}>
                    <FormItem
                    >
                        <Controller
                            name="id"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type="hidden"
                                    autoComplete="off"
                                    placeholder="آیدی"
                                    {...field}
                                />
                            )}
                        />
                    </FormItem>
                </div>
                    
 <FormItem
                    label="نام"
                    invalid={Boolean(errors.name)}
                    errorMessage={errors.name?.message}
                >
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="نام"
                                {...field}
                            />
                        )}
                    />
                </FormItem>

 <FormItem
                    label="برنچ"
                    invalid={Boolean(errors.branch)}
                    errorMessage={errors.branch?.message}
                >
                    <Controller
                        name="branch"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="برنچ"
                                {...field}
                            />
                        )}
                    />
                </FormItem>

                <FormItem
                    label="برند"
                    invalid={Boolean(errors.brandId)}
                    errorMessage={errors.brandId?.message}
                    className="w-full"
                >
                    <Controller
                        name="brandId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                placeholder="برند"
                                componentAs={CreatableSelect}
                                options={brands.map((title) => ({
                                    value: title.value, label: title.title,
                                }))}

                                onChange={(option) => { option != null && option.value != undefined ? field.onChange(option.value.toString()) : 0; }}
                            />
                        )}
                    />
                </FormItem>

 <FormItem
                    label="نام بانک اطلاعاتی"
                    invalid={Boolean(errors.dbName)}
                    errorMessage={errors.dbName?.message}
                >
                    <Controller
                        name="dbName"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="نام بانک اطلاعاتی"
                                {...field}
                            />
                        )}
                    />
                </FormItem>

                <FormItem
                    label="محصول"
                    invalid={Boolean(errors.productId)}
                    errorMessage={errors.productId?.message}
                    className="w-full"
                >
                    <Controller
                        name="productId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                placeholder="محصول"
                                componentAs={CreatableSelect}
                                options={products.map((title) => ({
                                    value: title.value, label: title.title,
                                }))}

                                onChange={(option) => { option != null && option.value != undefined ? field.onChange(option.value.toString()) : 0; }}
                            />
                        )}
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default InputsSection


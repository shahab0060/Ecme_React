import Card from '@/components/ui/Card'
import Select from '@/components/ui/Select'
import { Controller } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable'
import type { FormSectionBaseProps } from './types'
import { apiGetLocationsCombo } from '@/services/CustomersService'
import type { ComboDto } from '@/@types/common'

type TagsSectionProps = FormSectionBaseProps

var params;
const locations = await apiGetLocationsCombo<ComboDto[], any>(params);
console.log(locations);
console.log('locations loaded');
const TagsSection = ({ control }: TagsSectionProps) => {
    return (
        <Card>
            <h4 className="mb-2">برچسب های مشتری</h4>
            <div className="mt-6">
                <Controller
                    name="tags"
                    control={control}
                    render={({ field }) => (
                        <Select
                            isMulti
                            isClearable
                            placeholder="اضافه کردن برچسب برای مشتری ..."
                            componentAs={CreatableSelect}
                            options={locations.map((location) => ({
                                value: location.value, label: location.title,
                            }))}

                            onChange={(option) => field.onChange(option)}
                        />
                    )}
                />
            </div>
        </Card>
    )
}

export default TagsSection

```jsx
import Input from '@/components/ui/Input'

const Sizes = () => {
    return (
        <div>
            <div className="mb-4">
                <Input size="sm" placeholder="ورودی کوچک" />
            </div>
            <div className="mb-4">
                <Input placeholder="Input md" />
            </div>
            <div className="mb-4">
                <Input size="lg" placeholder="Input lg" />
            </div>
        </div>
    )
}

export default Sizes
```

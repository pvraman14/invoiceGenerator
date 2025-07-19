import { useState } from "react";

const CustomInput = () => {
    const [value, setValue] = useState<string>('');
    return (
        <input
            type="text"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            style={{
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
            }}
        />
    )
}

export default CustomInput;
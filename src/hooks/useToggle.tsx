import { useState } from "react";

function useToggle() {
    const [value, setValue] = useState(false);

    const toggle = () => {
        setValue(prev => !prev)
    }

    return [value, toggle] as const;
}

export default useToggle;
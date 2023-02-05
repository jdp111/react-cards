import React, {useState} from 'react';


function useFlip(initial) {
    const [state, setState] = useState(initial)
    const toggleState = () => (setState(!state))
    return [state, toggleState]
}

export default useFlip
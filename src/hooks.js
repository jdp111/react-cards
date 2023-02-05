import axios from 'axios';
import React, {useState} from 'react';
import {v4} from 'uuid'


function useFlip(initial) {
    const [state, setState] = useState(initial)
    const toggleState = () => (setState(!state))
    return [state, toggleState]
}


function useAxios(url) {
    const [cards, setCards] = useState([]);

    async function addCard(name = "") {
        const response = await axios.get(
            url + name 
        )
        setCards(cards => [...cards, { ...response.data, id: v4() }])
    }

    return [cards, addCard]
}



export default useFlip 
export  {useAxios}
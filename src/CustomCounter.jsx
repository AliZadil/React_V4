import React, {useState, useCallback} from "react";

const useCounter = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(count => count + 1)
    }, [])

    const decrement = useCallback(() => {
        setCount(count => count - 1)
    }, [])

    const reset = useCallback(() => {
        setCount(0)
    },[])
    
    return { count, increment, decrement, reset}

}

export default function CustomCounter() {

    const { count, increment, decrement, reset} = useCounter(0)

    return (
        <div>
            <h3>Counter</h3>
            <button onClick={increment}>+</button> 
            <br />
            {count}
            <br />
            <button onClick={decrement}>-</button>
            <br />
            <button onClick={reset}>Reset</button>
        </div>
    )
}
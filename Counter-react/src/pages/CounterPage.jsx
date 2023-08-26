import { Message } from "../components/Message.jsx"
import { Button } from "../components/Button.jsx"
import { useState } from "react";

export const CounterPage = () => {
    // HOOK (state)
    const [count, setCount] = useState(0); // arg = 0, which intialized count, value  as 0

    // useState() return two things, variable and function, when function call it'll change the variable;
    // INTERNAL ARCH. OF useState()
    /*
    const useState = () =>{
        let count = 0;
        setCount = (arg) => {
            count = arg;
        }
    }
    */

    // M-1 Which do not change in state but in data only, which donot perform re-rendering
    // let count = 0;
    // const setCount = (val) =>{
    //     if(val === '+') count++;
    //     else count--;
    //     console.log("count is " , count);
    // }

    // M-2, we change in state & inject data into state, so whenever state changes by changing data, then it will re-render
    const updateCount = (val) => {
        if (val === '+') setCount(count + 1); // state change
        // setCount is async
        else setCount(count - 1);
        console.log("count is ", count);
    }
    return (<div className="container">
        <div className="row mt-5">
            <Message className="alert " msg="Message is " />
            <Message value={count} className="alert alert-success" msg="Counter Value is " />
        </div>

        <div className="mt-5 row justify-content-center">
            <Button className="btn btn-success me-5 col-3 fs-2" val='+' fn={updateCount} />
            <Button className="btn btn-danger col-3 fs-2 " val='-' fn={updateCount} />
        </div>
    </div>)
}
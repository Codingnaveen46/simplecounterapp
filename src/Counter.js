import React,{useState} from "react";

const Counter = () =>{
    const [count ,setCount] = useState(0);

    return(
    
            <div style={{ textAlign: 'center', marginTop: '50px' }}><h1>Simple Counter</h1><h2>{count}</h2><button onClick={() => setCount(count + 1)}>Increment Button</button><button onClick={() => setCount(count - 1)} style={{ margin: '10px' }}>Decrement</button>
                    
            </div>

    )
}
export default Counter;


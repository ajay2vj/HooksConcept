
import React, { useState, useCallback } from "react";
import Nav from "../component/Nav";


function Callback() {

  const [count, setCount] = useState(0)
  
  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const decrement = useCallback(() => {
    setCount(count - 1)
  }, [count])

  
  return (
    <>
      
	  <div>
			<div className="container">
				<div className="row">
					<div className="col-md-4"></div>
					<div className="col-md-4 mt-5">
						<Nav/>
					</div>
					<div className="col-md-4"></div>
					<div className="col-md-4"></div>
					<div className="col-md-4 mt-5">
						<div className="mb-2">Count: {count}</div>
						<div className="d-grid gap-2 d-md-block">
							<button type="button" className="btn btn-primary" onClick={increment}>Increment</button>
							<button type="button" className="btn btn-primary" onClick={decrement}>Decrement</button>
						</div>
					</div>
				</div>
			</div>
      
    </div>
    </>
  )
}
export default Callback;
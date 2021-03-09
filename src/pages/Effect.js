import React, { useState, useEffect } from "react";
import Nav from "../component/Nav";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const [item] = data.results;
    setData(item);
    setLoading(false);
  }, []);

  return { data, loading };
};

export default () => {
  const { data, loading } = useFetch("https://api.randomuser.me/");

  return (
    <div>
			<div className="container">
				<div className="row">
					<div className="col-md-4"></div>
					<div className="col-md-4 mt-5">
						<Nav/>
					</div>
					<div className="col-md-4"></div>
					<div className="col-md-4">

					</div>
					<div className="col-md-4">
						{loading ? <div>...loading</div> : <div>{data.name.first}</div>}
					</div>
				</div>
			</div>
      
    </div>
  );
};
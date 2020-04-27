import React from "react";
import LoaderSpinner from "./LoaderSpinner";

function WithLoading(Component) {
  return  ({ loading, ...props })=> {
     if (!loading) return (<Component {...props} />);
     else 
     return <LoaderSpinner/>;
  }
}
export default WithLoading;

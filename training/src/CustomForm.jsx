import React from "react";

const CustomForm = (props) => {
    console.log("props", props);
    const { firstName,lastName,location }= props;
    return(
        <div>
       <p>This is the custom component that we just created ${firstName} ${lastName} ${location} </p>
       <p>This is the custom component that we just created</p>
       </div>
       );
};

export default CustomForm;
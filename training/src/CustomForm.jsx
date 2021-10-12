import React from "react";
import propfrom from 'prop-types';

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

CustomForm.prototype={
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

export default CustomForm;
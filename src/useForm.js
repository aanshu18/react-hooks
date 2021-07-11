//custom hook

import {useState} from 'react';


import React from 'react'

export const useForm = (initialValues) => {

    const [values,setValues] = useState(initialValues);




    return [values, 
            e => {
             setValues({
                ...values,
                [e.target.name]:e.target.value
             });
            } 
        ];
};

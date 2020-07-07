import React from "react";
import _ from "lodash/fp";
import { useForm } from "react-hook-form";

import '../Less/app.less';

interface IFormInput {
    creditCardNumber: string;
    cvc: string;
    expiryDate: number;
}

export default function Form({ name }) {
    const { register, handleSubmit, watch, errors } = useForm<IFormInput>();

    const onSubmit = (data: IFormInput) => {
        alert(JSON.stringify(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Credit Card Submission Form</h1>
            <h3>Welcome {name}</h3>
            <label>Credit Card Number</label>
            <input
                name="creditCardNumber"
                ref={register({
                    required: true,
                    maxLength: 16,
                    minLength: 16,
                    pattern: /^[0-9]+$/i
                })}
            />
            {_.get("creditCardNumber.type", errors) === "required" && (
                <p>Credit card number is required</p>
            )}
            {_.get("creditCardNumber.type", errors) === "maxLength" && (
                <p>Credit card number cannot exceed 16 characters</p>
            )}
            {_.get("creditCardNumber.type", errors) === "minLength" && (
                <p>Credit card number cannot exceed 16 characters</p>
            )}
            {_.get("creditCardNumber.type", errors) === "pattern" && (
                <p>Digits only</p>
            )}
            
            <label>CVC</label>
            <input name="cvc" ref={register({ pattern: /^[0-9]+$/i, required: true, maxLength: 3, minLength:3 })} />
            {_.get("cvc.type", errors) === "pattern" && (
                <p>Digits only</p>
            )}
            {_.get("cvc.type", errors) === "required" && (
                <p>CVC is required</p>
            )}
            {_.get("cvc.type", errors) === "maxLength" && (
                <p>CVC should be 3 digital characters</p>
            )}
            {_.get("cvc.type", errors) === "minLength" && (
                <p>CVC should be 3 digital characters</p>
            )}
            
            <label>Expiry Date</label>
            <input name="expiryDate" type="number" ref={register({ pattern: /^[0-9]+$/i, required: true, minLength:4, maxLength: 4 })} />
            {_.get("expiryDate.type", errors) === "pattern" && (
                <p>Digits only</p>
            )}
            {_.get("expiryDate.type", errors) === "required" && (
                <p>Expiry Date is required</p>
            )}
              {_.get("expiryDate.type", errors) === "maxLength" && (
                <p>Expiry Date should be 4 digits same as in your credit card</p>
            )}
            {_.get("expiryDate.type", errors) === "minLength" && (
                <p>Expiry Date should be 4 digits same as in your credit card</p>
            )}
            <input type="submit" />
        </form>
    );
}

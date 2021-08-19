import React, { useState, useEffect, useRef } from "react";
import { checkedInputLength, checkedSelectValue, checkedPhoneNumber, checkedFullName } from "../../../shared/utility";
import ArrowIcon from "../../../assets/images/Shape.svg";
import classes from "./Form.css";
import { CarsData } from "../../../DummyData/CarsData";

const Form = (props) => {
     const [selectedCar, setSelectedCar] = useState([]);

     const carMake = useRef(0);
     const carModel = useRef(0);
     const fullName = useRef(null);
     const phoneNumber = useRef(null);

     const [errorCarMake, setErrorCarMake] = useState(false);
     const [errorCarModel, setErrorCarModel] = useState(false);
     const [errorPhone, setErrorPhone] = useState(false);
     const [errorFullName, setErrorFullName] = useState(false);
     const [errorAllRequired, setErrorAllRequired] = useState(false);

     const blurCarMakeHandler = (event) => {
          event.preventDefault();
          setErrorCarMake(checkedSelectValue(event.target.value));
     };

     const changeCarMakeHandler = (event) => {
          event.preventDefault();
          setErrorCarMake(checkedInputLength(carMake.current.value));
          let carFilter = CarsData.filter((car) => {
               return car.name === carMake.current.value;
          });
          setSelectedCar(carFilter);
     };

     const blurCarModelHandler = (event) => {
          event.preventDefault();
          setErrorCarModel(checkedSelectValue(carModel.current.value));
     };

     const changeCarModelHandler = (event) => {
          event.preventDefault();
          setErrorCarModel(checkedInputLength(carModel.current.value));
     };

     const changeNameHandler = (event) => {
          event.preventDefault();
          setErrorFullName(checkedFullName(fullName.current.value));
     };

     const changePhoneHandler = (event) => {
          event.preventDefault();
          setErrorPhone(checkedPhoneNumber(phoneNumber.current.value));
     };

     const submitHandler = (event) => {
          event.preventDefault();

          let dataSubmit = {
               carMake: event.target[0].value,
               carModel: event.target[1].value,
               fullName: event.target[2].value,
               phonenumber: event.target[3].value,
          };

          let carMakeHasError = checkedSelectValue(event.target[0].value);
          let carModelHasError = checkedSelectValue(event.target[1].value);
          let fullNameHasError = checkedFullName(event.target[2].value);
          let phoneNumberHasError = checkedPhoneNumber(event.target[3].value);

          setErrorCarMake(carMakeHasError);
          setErrorCarModel(carModelHasError);
          setErrorFullName(fullNameHasError);
          setErrorPhone(phoneNumberHasError);

          if (!carMakeHasError && !carModelHasError && !fullNameHasError && !phoneNumberHasError) {
               carMake.current.value = 0;
               carModel.current.value = 0;
               fullName.current.value = null;
               phoneNumber.current.value = null;
               setSelectedCar([]);
               console.log("submit: ", dataSubmit);
          }
     };

     useEffect(() => {
          if (errorCarMake && errorCarModel && errorPhone && errorFullName) {
               setErrorAllRequired(true);
          } else {
               setErrorAllRequired(false);
          }
     }, [errorCarMake, errorCarModel, errorPhone, errorFullName]);

     return (
          <React.Fragment>
               <form onSubmit={submitHandler} className={classes.InquiryForm} noValidate>
                    {errorAllRequired ? <div className={classes.InquiryFormAllRequiredErrorMessage}>* All fields are required to be filled</div> : null}
                    <h1 className={classes.InquiryTitle}>Enter your car details</h1>

                    <div className={classes.InquiryFormRow}>
                         <label className={classes.InquiryFormLabel}>Car Make</label>
                         <select
                              ref={carMake}
                              className={`${classes.InquiryFormSelect} ${errorCarMake ? classes.InquiryFormSelectError : ""} ${errorAllRequired ? classes.InquiryFormSelectErrorAllRequired : ""}`}
                              id="carMake"
                              defaultValue="0"
                              onChange={changeCarMakeHandler}
                              onBlur={blurCarMakeHandler}
                         >
                              <option disabled value="0">
                                   Select Brand
                              </option>
                              <option>Car1</option>
                              <option>Car2</option>
                              <option>Car3</option>
                              <option>Car4</option>
                         </select>
                         {errorCarMake && !errorAllRequired ? <div className={classes.InquiryFormInputErrorMessage}>Please select a car brand</div> : null}
                    </div>
                    <div className={classes.InquiryFormRow}>
                         <label className={classes.InquiryFormLabel}>Car Model</label>
                         <select
                              ref={carModel}
                              className={`${classes.InquiryFormSelect} ${errorCarModel ? classes.InquiryFormSelectError : ""} ${errorAllRequired ? classes.InquiryFormSelectErrorAllRequired : ""}`}
                              id="carModel"
                              disabled={selectedCar.length === 0 ? true : false}
                              defaultValue="0"
                              onChange={changeCarModelHandler}
                              onBlur={blurCarModelHandler}
                         >
                              <option disabled value="0">
                                   Select Model
                              </option>
                              {selectedCar.length > 0
                                   ? selectedCar.map((car) => {
                                          return car.model.map((model) => {
                                               return <option key={model}>{model}</option>;
                                          });
                                     })
                                   : null}
                         </select>
                         {errorCarModel && !errorAllRequired ? <div className={classes.InquiryFormInputErrorMessage}>Please select a car model</div> : null}
                    </div>
                    <h1 className={classes.InquiryContactTitle}>Enter your Contact Info</h1>
                    <div className={classes.InquiryFormRow}>
                         <label className={classes.InquiryFormLabel}>Your Full Name</label>
                         <input
                              ref={fullName}
                              className={`${classes.InquiryFormInput} ${errorFullName ? classes.InquiryFormInputError : ""} ${errorAllRequired ? classes.InquiryFormInputErrorAllRequired : ""}`}
                              type="text"
                              id="fullName"
                              onChange={changeNameHandler}
                              onBlur={changeNameHandler}
                              placeholder="Enter your full name"
                              autoComplete="off"
                         />
                         {errorFullName && !errorAllRequired ? <div className={classes.InquiryFormInputErrorMessage}>Enter a valid Full Name</div> : null}
                    </div>
                    <div className={classes.InquiryFormRow}>
                         <label className={classes.InquiryFormLabel}>Your Phone Number</label>
                         <input
                              ref={phoneNumber}
                              className={`${classes.InquiryFormInput} ${errorPhone ? classes.InquiryFormInputError : ""} ${errorAllRequired ? classes.InquiryFormInputErrorAllRequired : ""}`}
                              type="number"
                              id="phone"
                              onChange={changePhoneHandler}
                              onBlur={changePhoneHandler}
                              placeholder="EX: +972 897 564 34"
                              autoComplete="off"
                         />
                         {errorPhone && !errorAllRequired ? <div className={classes.InquiryFormInputErrorMessage}>Enter a valid Phone Number</div> : null}
                    </div>

                    <div className={classes.InquiryFormButtonContainer}>
                         <button className={classes.InquiryFormButton} type="submit">
                              <span>Send Your Inquiry</span>
                              <img src={ArrowIcon} alt="arrow" />
                         </button>
                    </div>
               </form>
          </React.Fragment>
     );
};

export default Form;

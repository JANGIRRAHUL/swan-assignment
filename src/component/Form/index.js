import { Component } from "react";
import { stringify } from "uuid";

import {
  InputContainer,
  FormElement,
  HeadingElement,
  InputElement,
  LabelElement,
  SelectElement,
  OptionElement,
  BtnElement,
  ErrElement,
  AddressElement,
} from "../../styled-component";
import SuccessfullySubmit from "../SuccessFully";

let currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();
var formattedNumber = ("0" + currentDay).slice(-2);
currentDate = `${currentYear}-${currentMonth}-${formattedNumber}`;

const firstNumber = Math.floor(Math.random() * 100);
const secondNumber = Math.floor(Math.random() * 100);
const result = firstNumber + secondNumber;

class FormSubmit extends Component {
  state = {
    name: "",
    nameErr: false,
    email: "",
    emailErr: false,
    number: "",
    numberErr: false,
    date: currentDate,
    dateErr: false,
    time: "",
    timeErr: false,
    select: "",
    selectErr: false,
    isSubmit: false,
    captcha: 0,
    captchaErr: false,
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onBlurName = () => {
    const { name } = this.state;
    if (name.length <= 0) {
      this.setState({ nameErr: true });
    } else {
      this.setState({ nameErr: false });
    }
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onBlurEmail = () => {
    const { email } = this.state;
    if (email.length <= 0) {
      this.setState({ emailErr: true });
    } else {
      this.setState({ emailErr: false });
    }
  };

  onChangeNumber = (event) => {
    this.setState({ number: event.target.value });
  };

  onBlurNumber = () => {
    const { number } = this.state;
    if (number.length <= 0 || number.length <= 9 || number.length >= 11) {
      this.setState({ numberErr: true });
    } else {
      this.setState({ numberErr: false });
    }
  };

  onChangeDate = (event) => {
    this.setState({ date: event.target.value });
  };

  onBlurDate = () => {
    const { date } = this.state;
    if (date.length <= 0) {
      this.setState({ dateErr: true });
    } else {
      this.setState({ dateErr: false });
    }
  };

  onChangeTime = (event) => {
    this.setState({ time: event.target.value });
  };

  onBlurTime = () => {
    const { time } = this.state;
    if (time.length <= 0) {
      this.setState({ timeErr: true });
    } else {
      this.setState({ timeErr: false });
    }
  };

  onChangeSelect = (event) => {
    this.setState({ select: event.target.value });
  };

  onBlurSelect = () => {
    const { select } = this.state;
    if (select.length <= 0) {
      this.setState({ selectErr: true });
    } else {
      this.setState({ selectErr: false });
    }
  };

  validateFormData = () => {
    const { name, email, number, date, time, select } = this.state;
    if (name.length === 0) {
      this.setState({ nameErr: true });
    }
    if (email.length === 0) {
      this.setState({ emailErr: true });
    }
    if (number.length === 0) {
      this.setState({ numberErr: true });
    }
    if (date.length === 0) {
      this.setState({ dateErr: true });
    }
    if (time.length === 0) {
      this.setState({ timeErr: true });
    }
    if (select.length === 0) {
      this.setState({ selectErr: true });
    }
  };

  onChangeCaptcha = (e) => {
    this.setState({ captcha: e.target.value });
  };

  onSuccessfulSubmit = () => {
    const { name, email, number, date, time, select, captcha } = this.state;

    if (
      name.length !== 0 &&
      email.length !== 0 &&
      number.length !== 0 &&
      date.length !== 0 &&
      time.length !== 0 &&
      select.length !== 0 &&
      parseInt(captcha) === result
    ) {
      this.setState({ isSubmit: true });
      localStorage.setItem("data", JSON.stringify(this.state));
    } else {
      this.setState({ isSubmit: false });
      this.setState({ captchaErr: true });
    }
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    this.validateFormData();
    this.onSuccessfulSubmit();
  };
  render() {
    const {
      nameErr,
      name,
      email,
      emailErr,
      number,
      numberErr,
      date,
      dateErr,
      time,
      timeErr,
      select,
      selectErr,
      isSubmit,
      captchaErr,
    } = this.state;

    return (
      <>
        <div className="container">
          {isSubmit === false ? (
            <FormElement onSubmit={this.onSubmitForm}>
              <HeadingElement>Book Appointment</HeadingElement>
              <InputContainer style={{ position: "relative" }}>
                <div className="inputContainer">
                  <InputElement
                    // required
                    type="text"
                    placeholder="Enter Full Name"
                    value={name}
                    onBlur={this.onBlurName}
                    onChange={this.onChangeName}
                  />
                  {nameErr && <ErrElement>Required*</ErrElement>}
                </div>
                <div className="inputContainer">
                  <InputElement
                    // required
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onBlur={this.onBlurEmail}
                    onChange={this.onChangeEmail}
                  />
                  {emailErr && <ErrElement>Required*</ErrElement>}
                </div>
                <div className="inputContainer">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <p>+91</p>
                    <InputElement
                      // required
                      type="number"
                      placeholder="Enter Phone Number"
                      value={number}
                      onBlur={this.onBlurNumber}
                      onChange={this.onChangeNumber}
                    />
                  </div>
                  {numberErr && (
                    <ErrElement>
                      Required* and number length shoud be 10
                    </ErrElement>
                  )}
                </div>
                <div>
                  <p style={{ color: "#000000" }}>Address</p>
                  <div className="addressContainer">
                    <AddressElement
                      // required
                      type="text"
                      placeholder="Enter Area"
                    />
                    <AddressElement
                      // required
                      type="text"
                      placeholder="Enter City"
                    />
                    <div className="address-2">
                      <AddressElement
                        style={{ maxWidth: "100%" }}
                        // required
                        type="text"
                        placeholder="Enter State"
                      />
                      <AddressElement
                        style={{ maxWidth: 115 }}
                        // required
                        type="number"
                        placeholder="Enter Postal Code"
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  <LabelElement htmlFor="date">
                    Select Appointment Date
                  </LabelElement>
                  <div className="inputContainer">
                    <InputElement
                      // required
                      id="date"
                      min={currentDate}
                      value={date}
                      type="date"
                      placeholder="Enter Phone Number"
                      onBlur={this.onBlurDate}
                      onChange={this.onChangeDate}
                    />
                    {dateErr && <ErrElement>Required*</ErrElement>}
                  </div>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  <LabelElement htmlFor="time">
                    Select Appointment Time
                  </LabelElement>
                  <div className="inputContainer">
                    <InputElement
                      // required
                      type="time"
                      placeholder="Enter Phone Number"
                      id="time"
                      value={time}
                      onBlur={this.onBlurTime}
                      onChange={this.onChangeTime}
                    />
                    {timeErr && <ErrElement>Required*</ErrElement>}
                  </div>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  <LabelElement htmlFor="time">Select Services</LabelElement>
                  <div className="inputContainer">
                    <SelectElement
                      value={select}
                      onBlur={this.onBlurSelect}
                      onChange={this.onChangeSelect}
                    >
                      <OptionElement value="none" selected>
                        --- Select Services ---
                      </OptionElement>
                      <OptionElement value="confinement">
                        Confinement
                      </OptionElement>
                      <OptionElement value="treatments">
                        treatments
                      </OptionElement>
                      <OptionElement value="procedures">
                        procedures
                      </OptionElement>
                      <OptionElement value="tests">tests</OptionElement>
                      <OptionElement value="examinations">
                        examinations
                      </OptionElement>
                    </SelectElement>
                    {selectErr && (
                      <ErrElement style={{ top: 40 }}>Required*</ErrElement>
                    )}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10, position: "relative" }}>
                  <p style={{ display: "flex" }}>
                    {firstNumber} <span>+</span> {secondNumber} <span>=</span>
                  </p>
                  <InputElement
                    type="number"
                    onChange={this.onChangeCaptcha}
                    required
                  ></InputElement>
                  {captchaErr && <ErrElement>Please fill correctly</ErrElement>}
                </div>
              </InputContainer>
              <BtnElement type="submit">Book Appointment</BtnElement>
            </FormElement>
          ) : (
            <SuccessfullySubmit />
          )}
        </div>
      </>
    );
  }
}

export default FormSubmit;

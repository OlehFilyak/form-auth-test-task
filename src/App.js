import React, { useState } from 'react';
import SignUpSvg from './svg/SignUpSvg.svg';
import css from './App.module.css';

function App() {
  const [state, setState] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    confirmPolitic: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeCheckbox = (e) => {
    const { name, checked } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('name: ' + state.email);
    console.log('surname: ' + state.password);
    console.log('email: ' + state.email);
    console.log('password: ' + state.password);
    console.log('confirmPassword: ' + state.confirmPassword);
    console.log('confirmPolitic: ' + state.confirmPolitic);
  };

  return (
    <div className="App">
      <div className={css.PageContainer}>
        <div className={css.FormContainer}>
          <h1 className={css.SignUpMainCaption}>
            <span>Phone</span>book
          </h1>
          <p className={css.SignUpCaptionParagraph}>Create an account</p>

          <form
            name="login_form"
            autoComplete="on"
            className={css.LoginForm}
            onSubmit={handleSubmitForm}
          >
            <label>
              <input
                name="name"
                className={`${css.Name} ${css.FormField}`}
                value={state.name}
                placeholder="Enter your name"
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                name="surname"
                value={state.surname}
                className={`${css.Surname} ${css.FormField}`}
                placeholder="Enter your surname"
                onChange={handleChange}
              />
            </label>

            <p className={css.SubscriptionForm}>Enter your name and surname</p>

            <label>
              <input
                type="email"
                name="email"
                value={state.email}
                className={`${css.Email} ${css.FormField}`}
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </label>
            <p className={css.SubscriptionForm}>Enter your email address</p>
            <label>
              <input
                type="password"
                name="password"
                value={state.password}
                className={`${css.Password} ${css.FormField}`}
                placeholder="Password"
                onChange={handleChange}
              />
            </label>
            <label>
              <input
                type="password"
                name="confirmPassword"
                checked={state.confirmPassword}
                className={`${css.ConfirmPassword} ${css.FormField}`}
                placeholder="Confirm password"
                onChange={handleChange}
              />
            </label>
            {state.confirmPassword !== state.password &&
            state.confirmPassword !== '' ? (
              <p className={`${css.SubscriptionForm} ${css.WarningMessage}`}>
                Passwords don't match. Please enter the correct values
              </p>
            ) : (
              <p className={css.SubscriptionForm}>
                Use a combination of 8 or more letters, numbers and symbols
              </p>
            )}

            <div className={css.PoliticsContainer}>
              <label>
                <input
                  type="checkbox"
                  name="confirmPolitic"
                  value={Boolean(state.confirmPolitic)}
                  className={css.confirmPolitic}
                  onChange={handleChangeCheckbox}
                />
              </label>

              <p className={css.infoAboutPolitic}>
                I am satisfied with the processing of personal data{' '}
              </p>
            </div>

            <div className={css.BtnsContainer}>
              <a href="/" className={`${css.LogIn} link`}>
                Get into the account
              </a>
              <button
                type="submit"
                className={
                  state.confirmPolitic === true
                    ? `${css.RegistrationBtnSubmit}`
                    : `${css.RegistrationBtnSubmit} ${css.Disabled}`
                }
                disabled={
                  state.confirmPolitic === false ||
                  state.password !== state.confirmPassword
                }
              >
                Registration
              </button>
            </div>
          </form>
        </div>

        <div className={css.ImgContainer}>
          <img src={SignUpSvg} alt="signup" width="350" height="350"></img>
          <p>Your personal information remains private and protected</p>
        </div>
      </div>
    </div>
  );
}

export default App;

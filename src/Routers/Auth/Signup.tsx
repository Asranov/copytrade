import React from 'react'
import "./Signup.css"

function Signup() {
  return (
    <>
      <form id="signup-form" action="/user/sign-in/signup" method="post">
        <input type="hidden" name="_csrf" value="uUZc-IJHAHnrW10IWslSPX6VZw3BPT-Zdpt3ZfvjX_LhAy7P1jA5M5E6KEALnH9TKNNUYIl-XsA9_A4Rs9UHkA==" />
        <div className="signup mt-5">
          <div className="row justify-content-center">
            <div className="col-sm-8">
              <div className="card mb-2">
                <div className="card-body">
                  <h1 className="text-muted text-center">
                    Зарегистрироваться
                  </h1>

                  <div className="alert alert-danger" ><p>Исправьте следующие ошибки:</p><ul></ul></div>
                  <div className="row">

                    <div className="col-md-12">
                      <div className="form-group field-signupform-username required">
                        <label>Имя пользователя</label>
                        <input type="text" id="signupform-username" className="form-control is-valid" name="SignupForm[username]" aria-required="true" aria-invalid="false" />

                        <div className="invalid-feedback"></div>
                      </div>
                    </div>


                    <div className="col-md-6 col-sm-6 col-12">

                      <div className="form-group field-account required">

                        <input type="text" id="account" className="form-control" name="SignupForm[email]" placeholder="Email" aria-required="true" />

                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-3 col-6">
                      <i id="waiting-clock" className="p-1 d-none far fa-clock" ></i>
                      <button type="button" id="send-code" className="btn btn-success" ><i className="fas fa-envelope"></i></button>
                      <div className="row">
                        <div className="col-8">
                          <div className="form-group field-code">

                            <input type="number" id="code" className="form-control  d-none" name="SignupForm[code]" placeholder="Code" />

                            <div className="invalid-feedback"></div>
                          </div>                                    </div>
                        <div className="col-4">
                          <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" id="check" className="btn btn-success   d-none" ><i className="fas fa-share"></i></button>                                        </div>
                        </div>
                      </div>
                    </div>


                    <div className="col-md-6">
                      <div className="form-group field-signupform-password required">
                        <label >Пароль</label>
                        <input type="password" id="signupform-password" className="form-control is-valid" name="SignupForm[password]" aria-required="true" aria-invalid="false" />

                        <div className="invalid-feedback"></div>
                      </div>                            </div>
                    <div className="col-md-6">
                      <div className="form-group field-signupform-password_confirm required">
                        <label >Confirm Password</label>
                        <input type="password" id="signupform-password_confirm" className="form-control" name="SignupForm[password_confirm]" aria-required="true" />

                        <div className="invalid-feedback"></div>
                      </div>                            </div>

                  </div>

                  <div className="row col-12">
                    Перед регистрацией ознакомьтесь с публичной офертой <a className="pl-1" href="https://strg.copytrade.pro/source/1/bWCJcs_7lRyAGLFLBCupWiZOsQ6qphRX.php" target="_blank">Публичная - оферта</a>                        </div>

                  <div className="row col-12">
                    <label>
                      <input type="checkbox" id="offer-check" name="check" value="1" /> Я подтверждаю, что ознакомился с публичной офертой и согласен со всеми пунктами</label>                        </div>


                  <div className="form-group">
                    <button type="submit" id="signup-button" className="btn btn-primary btn-lg btn-block" name="signup-button" >Зарегистрироваться</button>
                  </div>

                  <div className="form-group">
                    <a href="/user/sign-in/login">Вход</a>                        </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Signup
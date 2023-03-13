import React from 'react'
import "./Auth.css"


export default function Signin() {
  return (
    <>
      <form id='login-form' action="/user/sign-in/login" method='post'>
        <input type="hidden" name="_csrf" value="2HwTBcj2wCIeXKuf7SRApvSXbo13TJQhyV2r3xw-n0yuMUxLsJeuF2hs-PaGQSTEhuQryDEN9k-hLt2wVFjnPw==" />
        <div className="site-login mt-5">
          <div className="row justify-content-center">
            <div className="col-sm-4">
              <div className="card mb-2">
                <div className="card-body">
                  <h1 className="text-muted text-center">Вход</h1>
                  <div className="alert alert-danger"><p>Исправьте следующие ошибки:</p><ul></ul></div>
                  <div className="form-group field-loginform-identity required">
                    <label >Логин или e-mail</label>
                    <input type="text" id="loginform-identity" className="form-control is-valid" name="LoginForm[identity]" aria-required="true" aria-invalid="false" />

                    <div className="invalid-feedback"></div>
                  </div>
                  <div className="form-group field-loginform-password required">
                    <label >Пароль</label>
                    <input type="password" id="loginform-password" className="form-control is-valid" name="LoginForm[password]" aria-required="true" aria-invalid="false" />

                    <div className="invalid-feedback"></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="form-group field-loginform-rememberme">
                      <div className="custom-control custom-checkbox">
                        <input type="hidden" name="LoginForm[rememberMe]" value="0" />
                        <input type="checkbox" id="loginform-rememberme" className="custom-control-input" name="LoginForm[rememberMe]" value="1" />
                        <label className="custom-control-label" >Remember Me</label>
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                    <a className="text-sm" href="/user/sign-in/request-password-reset">Забыли свой пароль?</a>
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg btn-block" name="login-button">Вход</button>                    </div>
                  <div className="form-group">
                    <a href="/user/sign-in/signup" >Нужен аккаунт? Зарегистрируйтесь</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </form>
    </>
  )
}
import React, { Component, Fragment } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

class Contact extends Component {

  constructor(props) {
    super(props);
       this.state = {
          isShowMsg: false,
          isSending: false,
       }
  }

  onSubmit = (values,  { resetForm }) => {
    const {  isShowMsg, isSending } = this.state;
    this.setState({
      isSending: true
    })
    
    let enviar = { username: values.name, email:values.email, message: values.message};
    var raw = JSON.stringify(enviar);
    fetch('https://api-cadastro-cliente.000webhostapp.com/message', {
          method: 'POST',
          body: raw,
        })
        .then((response)=>{return response.text()})
        .then((data)=>{
          //console.log(data);
          //console.log(data.mensagem);
          let resp = JSON.parse(data);
          if(resp.status === "success"){
            this.setState({ isSending: false, isShowMsg: true })
            resetForm();
          }

        });
    
    
  }

	render() {

  const {  isSending, isShowMsg } = this.state;

	return(
    <section className="site-section" id="contact">
    <div className="container"> 
        <div className="site-section__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="7" viewBox="0 0 73.94 14.19">
            <polyline points="2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83" style={{ strokeDashoffset: "2e-05", strokeDasharray: "none" }} ></polyline>
          </svg>
        </div>          
        <h1 className="site-heading"> Contato </h1>
        <Formik className="site-form" initialValues={{ name: '', email: '', message: ''}}
          validate={values => {
            let errors = {};
            if(!values.name) {
              errors.name = 'O Nome é obrigatório';
            }
            
            if(!values.email) {
              errors.email = 'O Email é obrigatório';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = 'Endereço de email inválido';
            }

            if(!values.message) {
              errors.message = 'A Mensagem é obrigatória';
            }
            return errors; 
          }}          
          validationSchema={Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            message: Yup.string().required()
          })}
          onSubmit={this.onSubmit}
          render={({ handleChange, handleBlur, values, errors, handleSubmit, touched }) => (
           <Fragment>
            <form className="site-form" onSubmit={ handleSubmit }>
              {
                isShowMsg && <div className="alert alert-success">Mensagem enviada com sucesso!</div>  
              }
                  
              <div className="row">
                <div className="col-6"> 
                  <div className="site-form__form-group"> 
                     <label htmlFor="input-name" className="site-form__label"> Nome </label>
                     <input type="text" name="name"  onBlur={handleBlur} onChange={ handleChange } className={`site-form__input ${  errors.name && touched.name ? 'site-form__input-error' : '' }`} id="input-name" value={ values.name } />
                      { 
                        errors.name && touched.name &&  
                        <div className="site-form__error"> { errors.name } </div>
                      } 
                  </div> 
                </div>
                <div className="col-6"> 
                  <div className="site-form__form-group"> 
                     <label htmlFor="input-email" className="site-form__label"> Email </label>
                     <input type="email" name="email" onChange={ handleChange } className={`site-form__input ${  errors.email && touched.email ? 'site-form__input-error' : '' }`}  id="input-email" value={ values.email }/>
                      { 
                        errors.email && touched.email &&  
                        <div className="site-form__error"> { errors.email } </div>
                      } 
                  </div> 
                </div>
              </div>  
            <div className="row"> 
              <div className="col-12">
                <div className="site-form__form-group"> 
                   <label htmlFor="input-message" className="site-form__label"> Mensagem </label>
                   <textarea type="text" name="message" onChange={ handleChange } className={`site-form__textarea ${  errors.message && touched.message ? 'site-form__input-error' : '' }`} rows="8" id="input-message" value={ values.message } />
                      { 
                        errors.message && touched.message &&  
                        <div className="site-form__error"> { errors.message } </div>
                      }
                </div>                
              </div>
            </div>              
            <div className="site-form__action"> 
              <button  type="submit" className="btn btn-primary btn-lg btn-radius" disabled={ isSending }>                {
                isSending ? <span className="loading-icon"> </span> : 'Enviar'
              }  
              </button>
            </div>            
            </form>
          </Fragment>     
          )}
        />        

     </div> 
    </section>
			)
	}

}

export default Contact;
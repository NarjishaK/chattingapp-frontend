import React, { useState } from 'react'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'
import Step1 from './step1'
import Step2 from "./step2"
import Step3 from './step3'
import Step4 from "./step4"

const LoginContent3 = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
      setStep((prevStep) => prevStep + 1);
    };
  return (
    <div className="main-content login-panel login-panel-3">
    <div className="container">
        <div className="d-flex justify-content-end">
            <div className="login-body">
                <div className="top d-flex justify-content-between align-items-center">
                    <div className="logo">
                    {/* <img src={ "assets/images/logo-black.png"} alt="Logo"/> */}
                    <b style={{color:"green"}}>CHATTER APP</b>

                    </div>
                    <Link to="/"><i className="fa-duotone fa-house-chimney"></i></Link>
                </div>
                {step === 1 && <Step1 nextStep={nextStep} />}
                {step === 2 && <Step2 nextStep={nextStep} />}
                {step === 3 && <Step3 nextStep={nextStep} />}
                {step === 4 && <Step4 />}
            </div>
        </div>
    </div>
    <Footer/>
</div>
  )
}

export default LoginContent3
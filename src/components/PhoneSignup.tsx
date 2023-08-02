import {useState} from 'react'
import {Form,Button,Alert} from 'react-bootstrap'
import PhoneInput  from "react-phone-number-input"
import { useUserContext } from '../context/userAuthContext'
import {useNavigate} from "react-router-dom"


const PhoneSignup = () => {
   const [error,setError] = useState<string>('')
   const [number,setNumber] = useState<any>('')
   const [otp,setOtp] = useState<string>('')
   const {setupRecaptcha} = useUserContext();
   const [flag,setFlag] = useState<boolean>(false);
   const [confirm,setConfirm] = useState<any>('');
   const navigate = useNavigate()

   const handleSubmit = async(e:any) => {
    setError('');
    e.preventDefault()
    if(number === ""||number === undefined){
        setError("please enter a valid number!")
        return
    }
    try {
        const response  = await setupRecaptcha(number);
        console.log(response)
        setConfirm(response)
        setFlag(true);
    } catch (error:any) {
        setError(error.message)
    }


   }
  const submitOtp = async (e:any) => {
    e.preventDefault()
    if(otp === "" || otp === undefined )
    {
        setError("Please enter a valid otp");
        return
    }
    try {
        const resp=await confirm.confirm(otp);
        console.log(resp);
        // navigate("/home");
    } catch (err:any) {
        setError(err.message)
    }

  }
  return (
    <div className="p-4 box">
        <h2 className="mb-3">Firebase Phone Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {
            !flag ? (
                <Form className="" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                  <PhoneInput defaultCountry='BD' value={number} onChange={setNumber} placeholder="Enter a phone number"/>
                </Form.Group>
                <div id='recaptcha-container' style={{
                    display: !flag? 'block' : 'none'
                }}>
      
                </div>
      
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit">
                    Send Otp
                  </Button>
                </div>
              </Form>
            ):(
                <Form className="mt-5" onSubmit={submitOtp}>
          <Form.Group className="mb-3" controlId="formBasicPhoneotop">
            <Form.Control  type='text' placeholder='enter otp' onChange={(e:any)=>setOtp(e.target.value)}/>
          </Form.Group>
         
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Verify Otp
            </Button>
          </div>
        </Form>
            )
        }
       
        
    </div>
  )
}

export default PhoneSignup
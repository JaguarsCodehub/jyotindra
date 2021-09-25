import React,{useRef,useState} from 'react';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    FormMessage
} from './SigninElements';
import emailjs from 'emailjs-com';

const Result = () => {
    return(
        <p style={{padding: 20,color: '#000', background: '#87FFCA',fontSize: 16, marginTop: 20}}>Your Message has been sent succesfully ! I will contact you soon.</p>
    )
}


const ConnectMe = () => {

    const [result,showResult] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_fumzx3a', 'template_c6ye51j', form.current, 'user_16BDsIISZHSnl74lgGaJr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };


    return (
        <>
         <Container>
             <FormWrap>
                 <Icon to='/'>Jyotindra KT</Icon>
                 <FormContent>
                     <Form ref={form} onSubmit={sendEmail}>
                         <FormH1>Let's Build Exciting Products !</FormH1>
                         {/* <FormLabel htmlFor= 'for'>Name</FormLabel> */}
                         {/* <FormInput type='text' name="name" required /> */}
                         <FormLabel htmlFor='for'>Email</FormLabel>
                         <FormInput type='email' name="email" placeholder="Email" required />
                         <FormLabel htmlFor='for'>What's the Subject ?</FormLabel>
                         <FormInput type='text' name="subject" placeholder="Subject" required />
                         <FormLabel htmlFor='for'>Type Your Message here !</FormLabel>
                         <FormMessage type='text' name="message" placeholder="Message" required />
                         <FormButton type='submit' >Send</FormButton>

                        <div className="row">
                            {result ? <Result/> : null}
                        </div>
                     </Form>
                 </FormContent>
             </FormWrap>
         </Container>
        </>
    )
}

export default ConnectMe;

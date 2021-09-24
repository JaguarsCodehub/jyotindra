import React from 'react';
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


const ConnectMe = () => {
    return (
        <>
         <Container>
             <FormWrap>
                 <Icon to='/'>Jyotindra KT</Icon>
                 <FormContent>
                     <Form action="#">
                         <FormH1>Let's Build Exciting Products !</FormH1>
                         <FormLabel htmlFor= 'for'>Name</FormLabel>
                         <FormInput type='text' required />
                         <FormLabel htmlFor='for'>Email</FormLabel>
                         <FormInput type='email'required />
                         <FormLabel htmlFor='for'>Type Your Message here !</FormLabel>
                         <FormMessage type='text'required />
                         <FormButton type='submit'>Send</FormButton>
                     </Form>
                 </FormContent>
             </FormWrap>
         </Container>
        </>
    )
}

export default ConnectMe;

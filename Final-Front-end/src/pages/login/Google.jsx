import React, {useState} from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '774130593672-28ta69qb3sukr3ib2v2u8rcq20qv2gh5.apps.googleusercontent.com';

const GoogleButton = ({signUserIn}) => {
 
    const responseGoogle = (res) => {
        //console.log(res.profileObj.name, res.profileObj.email);
        signUserIn(res.profileObj.email);
    }

    const responseFail = (err) => {
        console.error(err);
    }

    return(
        <>
            <GoogleLogin
                clientId={clientId}
                buttonText="Google"
                onSuccess={responseGoogle}
                onFailure={responseFail}
            />
        </>
    );
}

// const Container = styled.div`
//     display: flex;
//     flex-flow: column wrap;
// `

export default GoogleButton;


import React, { useState ,useContext } from "react";
import SignInForm from "./SignInForm";
import { Alert, Snackbar } from "@mui/material";
import { signInApi } from "../../app-shell/src/api-helper/frontend/util.js";
import { Redirect } from "react-router-dom";
//import SharedContext from "../../../container/src/context/Shared";
const SignInUser = () =>{
        //const sharedContext = useContext(SharedContext);
        //const navigate = useNavigate();
        const [message, setMessage] = useState(null);
        const [showMessage, setShowMessage] = useState(null);
        const[open, setOpen] = useState(false);
        const [redirect, setRedirect] = useState(false);
        const getFormdata = (data) =>{
            signInApi(data).then((value) =>{
                console.log(value.error);
                if(value.result){
                    localStorage.setItem('accessToken', JSON.stringify(value.result.accessToken));
                    
                    setShowMessage(false)
                    setOpen(true)
                    setMessage("Logged in Successfully")
                    setRedirect(true);
                }
                if(value.error){
                    setShowMessage(true)
                    setOpen(true)
                    setMessage("Error while logging in")
                }
                //window.dispatchEvent(new CustomEvent('userLoggedIn', { detail: value.result.accessToken }));
            })
            .then(() => console.log("success"))
            .catch((err) =>console.log(err));

        };
        if (redirect) {
            console.log("done");
            return <Redirect to="/dashboard" />;
          }
        return <div>
                {
                !showMessage && (
                    <Snackbar open={open} anchorOrigin={{vertical:"top", horizontal:"center"}}
                    autoHideDuration={2000} 
                    onClose={()=> {
                        setOpen(false);
                    }}>
                        <Alert severity="success">{ message }</Alert>
                    </Snackbar>
                )}
                {
                showMessage && (
                    <Snackbar open={open} anchorOrigin={{vertical:"top", horizontal:"center"}}
                    autoHideDuration={2000} 
                    onClose={()=> {
                        setOpen(false);
                    }}>
                        <Alert severity="error">{ message }</Alert>
                    </Snackbar>
                )}
                <SignInForm onSubmit={getFormdata}/>
            </div>
}

export default SignInUser;
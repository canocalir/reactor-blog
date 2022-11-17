import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Heading from "../../components/Heading/Heading";
import FooterMain from "../../containers/FooterMain/FooterMain";
import NavbarMain from "../../containers/NavbarMain/NavbarMain";
import { login } from "../../features/user/userSlice";

import { LoginFormContainer } from "./styled";

import { useNavigate } from "react-router-dom";
import auth from "../../utils/firebase";

const Login = () => {
  const [credientals, setCredientals] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const loginHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, credientals?.email, credientals?.password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
          })
        );
        navigate('/')
      })
      .catch((err) => {
        alert(err);
      });
  };

  console.log(credientals)

  return (
    <>
      <NavbarMain />
      <Heading headingText={"Sign In"} />
      <LoginFormContainer>
        <form onSubmit={loginHandler} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              onChange={(e) =>
                setCredientals({
                  ...credientals,
                  [e.target.name]: e.target.value,
                })
              }
              id="email1"
              type="email"
              placeholder="name@email.com"
              required={true}
              name="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              onChange={(e) =>
                setCredientals({
                  ...credientals,
                  [e.target.name]: e.target.value,
                })
              }
              id="password1"
              type="password"
              required={true}
              name="password"
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </LoginFormContainer>
      <FooterMain />
    </>
  );
};

export default Login;

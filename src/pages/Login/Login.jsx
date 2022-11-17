import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Heading from "../../components/Heading/Heading";
import FooterMain from "../../containers/FooterMain/FooterMain";
import NavbarMain from "../../containers/NavbarMain/NavbarMain";
import { login } from "../../features/user/userSlice";

import { LoginFormContainer } from "./styled";

import { auth } from "../../utils/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = getAuth();

  const loginHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };

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
              onChange={(e) => setEmail(e.target.value)}
              id="email1"
              type="email"
              placeholder="name@email.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              onChange={(e) => setPassword(e.target.value)}
              id="password1"
              type="password"
              required={true}
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

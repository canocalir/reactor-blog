import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import FooterMain from "../../containers/FooterMain/FooterMain";
import NavbarMain from "../../containers/NavbarMain/NavbarMain";
import { login } from "../../features/user/userSlice";
import auth from "../../utils/firebase";
import { RegisterFormContainer } from "./styled";

const Register = () => {
  const [credientals, setCredientals] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const registerHandler = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, credientals?.email, credientals?.password)
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
  }
  console.log(credientals)
  return (
    <>
      <NavbarMain />
      <Heading headingText={"Sign Up"} />
      <RegisterFormContainer>
        <form onSubmit={registerHandler} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              onChange={(e) =>
                setCredientals({
                  ...credientals,
                  [e.target.name]: e.target.value,
                })
              }
              id="email2"
              type="email"
              placeholder="name@email.com"
              required={true}
              shadow={true}
              name="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput
              id="password2"
              type="password"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput
              onChange={(e) =>
                setCredientals({
                  ...credientals,
                  [e.target.name]: e.target.value,
                })
              }
              id="repeat-password"
              type="password"
              required={true}
              shadow={true}
              name="password"
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree">
              I agree with the{" "}
              <a
                href="/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
            </Label>
          </div>
          <Button type="submit">Register new account</Button>
        </form>
      </RegisterFormContainer>
      <FooterMain />
    </>
  );
};

export default Register;

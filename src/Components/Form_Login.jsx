import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PostAuthService } from "../service/Clienti.service";

const Form_Login = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FormLogin: ", formLogin);

    const data = await PostAuthService("http://localhost:3001/auth/login", formLogin);
    console.log("token ", data.accessToken);
    if (formLogin.password === "1234") {
      setTimeout(() => {
        navigate("/menu");
      }, 20000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit} className="py-5 form_login">
      <h2 className="text-center pt-5 mb-4">Login</h2>
      <Form.Group className="w-50" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={formLogin.email} onChange={handleChange} required />
      </Form.Group>

      <Form.Group controlId="formPassword" className="mt-3 w-50">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={formLogin.password} onChange={handleChange} required />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-4">
        Login
      </Button>

      <div className="social-login mt-3">
        <p className="text-center">Oppure effettua il login con</p>
        <div className="social-buttons">
          <Button variant="outline-primary" className="social-btn me-5">
            <FaFacebookF /> Facebook
          </Button>
          <Button variant="outline-danger" className="social-btn">
            <FaGoogle /> Google
          </Button>
        </div>
      </div>

      <div className="signup-link mt-3 text-center">
        <p>
          Non sei registrato? <a href="/registrazione">registrati ora</a>
        </p>
      </div>
    </Form>
  );
};

export default Form_Login;

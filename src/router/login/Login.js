import React, { useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let newUser = { username, password };

    if (username === "iii-1208" && password === "iii-1208") {
      localStorage.setItem("user", JSON.stringify(newUser));
      toast.success("Log In");
      navigate("/admin/create-product");
    } else {
      toast.error("Parolning foydalanuvchi nomi noto'g'ri");
    }
  };

  return (
    <div className="container login">
      <form className="login__wrapper" onSubmit={handleLogin}>
        <div className="login__wrapper-btns">
          <a href="#" className="login__wrapper-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              class="css-1cqfdwu"
            >
              <g fill="none">
                <path
                  fill="#1877F2"
                  d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12z"
                ></path>
                <path
                  fill="#FFF"
                  d="M16.671 15.469 17.203 12h-3.328V9.75c0-.949.465-1.875 1.956-1.875h1.513V4.922s-1.373-.234-2.686-.234c-2.741 0-4.533 1.66-4.533 4.668V12H7.078v3.469h3.047v8.385a12.13 12.13 0 0 0 3.75 0V15.47h2.796z"
                ></path>
              </g>
            </svg>
            <p>Продолжить через Facebook</p>
          </a>
          <a href="#" className="login__wrapper-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              class="css-1cqfdwu"
            >
              <g fill="none">
                <path
                  fill="#4285F4"
                  d="M23.978 12.281c0-.813-.068-1.63-.211-2.43H12.25v4.606h6.595a5.531 5.531 0 0 1-2.44 3.635v2.99h3.933c2.31-2.084 3.639-5.161 3.639-8.8z"
                ></path>
                <path
                  fill="#34A853"
                  d="M12.251 23.97c3.293 0 6.07-1.06 8.093-2.889l-3.934-2.989c-1.095.73-2.508 1.143-4.154 1.143-3.185 0-5.886-2.105-6.855-4.936h-4.06v3.081c2.073 4.04 6.294 6.59 10.91 6.59z"
                ></path>
                <path
                  fill="#FBBC04"
                  d="M5.397 14.299a7.029 7.029 0 0 1 0-4.58V6.637H1.34a11.758 11.758 0 0 0 0 10.743l4.057-3.08z"
                ></path>
                <path
                  fill="#EA4335"
                  d="M12.251 4.778a6.71 6.71 0 0 1 4.684 1.793l3.485-3.415A11.868 11.868 0 0 0 12.251.044c-4.616 0-8.837 2.55-10.91 6.593L5.397 9.72c.964-2.835 3.67-4.941 6.854-4.941z"
                ></path>
              </g>
            </svg>
            <p>Продолжить через Google</p>
          </a>
        </div>
        <p className="login__text">или</p>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          required
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="inp"
        />
        <p className="btn__link">Забыли пароль?</p>
        <button className="login__btn">Войти</button>
        <p className="login__subtext">
          При входе вы соглашаетесь с нашими
          <span className="fwb"> Условия использования</span>
        </p>
      </form>
    </div>
  );
}

export default Login;

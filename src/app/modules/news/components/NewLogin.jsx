import { useEffect, useState } from "react";

const NewLogin = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleBlur = (e) => {
      validateFields(e.target.value, e.target.name);
  };

  const validateFields = (value, field) => {
      let newErrors = { ...errors };

      switch (field) {
          case "email":
              if (!value) {
                newErrors.email = "Email is required";
              } else if (!/\S+@\S+\.\S+/.test(value)) {
                newErrors.email = "Email is invalid";
              } else {
                delete newErrors.email;
              }
              break;
          case "username":
              if (!value) {
                newErrors.username = "Username is required";
              } else if (value.length < 5) {
                newErrors.username = "Username must be at least 5 characters long";
              } else {
                delete newErrors.username;
              }
              break;
          case "password":
              if (!value) {
                newErrors.password = "Password is required";
              } else if (value.length < 5) {
                newErrors.password = "Password must be at least 5 characters long";
              } else {
                delete newErrors.password;
              }
              break;
          default:
              break;
      }

      setErrors(newErrors);
  };

  useEffect(()=>{
      validateFields(email, "email");
      validateFields(username, "username");
      validateFields(password, "password");
  }, [email, username, password])

  return (
      <form>
          <div>
              <input type="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} onBlur={handleBlur}/>
              {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
              <input type="text" name="username" value={username} onChange={(e) => {setUsername(e.target.value)}} onBlur={handleBlur}/>
              {errors.username && <p>{errors.username}</p>}
          </div>
          <div>
              <input type="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} onBlur={handleBlur}/>
          </div>
      </form>
  )}

  export default NewLogin
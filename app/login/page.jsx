'use client'

import Image from "next/image";
import { useState } from "react";
import loginimage from "../../public/login-img.svg"
// import logo from "../../public/logo.svg"
import styles from "./page.module.css";
import { useRouter } from "next/navigation";


export default function SignUp() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform signup logic here (e.g., send data to API endpoint)
        console.log(formData);
        router.push('/home/card-details');
    
        //Needs to integrate with once backend API has been configured 

        // try {
        //   const response = await fetch('/api/signup', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        //   });
    
        //   const result = await response.json();
        //   console.log(result);
        //   if (response.ok) {
        //     alert('Signup successful!');
        //   } else {
        //     alert('Signup failed!');
        //   }
        // } catch (error) {
        //   console.error('Error:', error);
        //   alert('An error occurred!');
        // }
    };

    const navigateToSignUp = () => {
        router.push('/signup')
    }

    return (
        <div className={styles.loginCard}>
            <div className={styles.loginForm}>
                <h2 className={styles.loginTitle}>Welcome Back</h2>                
                <form onSubmit={handleSubmit}>
                    <div className={styles.formField}>
                        <label className={styles.inputLabel} for="email">Email</label>
                        <input className={styles.inputField} type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className={styles.formField}>
                        <label className={styles.inputLabel} for="password">Password</label>
                        <input className={styles.inputField} type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <button className={styles.signupBtn} type="submit">Sign Up</button>
                    <h4 className={styles.loginDesc}>New User? <span style={{color: '#367DD9'}} onClick={navigateToSignUp}>Sign Up</span></h4>                
                </form>
            </div>
            <div className={styles.loginImage}>
                <Image
                    aria-hidden
                    src={loginimage}
                    alt="login images"
                    width={300}
                    height={300}
                />
                <h1 style={{color: '#fff', marginTop: '40px',marginLeft: '85px', textTransform: 'uppercase'}}>Face Pay</h1>
            </div>
        </div>
    )
}
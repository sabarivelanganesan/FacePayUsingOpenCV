'use client'

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import loginimage from "../../public/login-img.svg"
// import logo from "../../public/logo.svg"
import styles from "./page.module.css";


export default function SignUp() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        username: '',
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
        navigateToLogin();
    
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

    const navigateToLogin = () => {
        router.push('/login')
    }

    return (
        <div className={styles.loginCard}>
            <div className={styles.loginForm}>
                <h2 className={styles.loginTitle}>Get Started</h2>
                <h4 className={styles.loginDesc}>Already have an account? <span onClick={navigateToLogin} style={{color: '#367DD9'}}>Sign In</span></h4>                
                
                <form onSubmit={handleSubmit}>
                    <div className={styles.formField}>
                        <label className={styles.inputLabel} for="username">Name</label>
                        <input className={styles.inputField} type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className={styles.formField}>
                        <label className={styles.inputLabel} for="email">Email</label>
                        <input className={styles.inputField} type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className={styles.formField}>
                        <label className={styles.inputLabel} for="password">Password</label>
                        <input className={styles.inputField} type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <button className={styles.signupBtn} type="submit">Sign Up</button>
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
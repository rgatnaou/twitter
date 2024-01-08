import React from "react";
import "./Homepage.css";
import homeImage from "../../assets/img/homepage.jpeg";

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="home-top">
                <div className="home_left">
                    <img
                        className="home_img"
                        src={homeImage}
                        alt="img_homepage"
                    />
                </div>
                <div className="home_right">
                    <img
                        className="home_logo"
                        src="/twitter.ico"
                        alt="logo"
                    />
                    <h1 className="home-right-title">Happening now</h1>
                    <h2 className="home-right-subtitle">Welcome to Twitter</h2>
                    <div className="home-right-btn">
                        <button className="btn-primary">Sign up with Google</button>
                        <button className="btn-primary">Sign up with Apple</button>
                        <button className="btn-secondary">Sign up with phone or email</button>
                        <p className="policies">
                            By signing up, you agree to the<a href="#"/> Terms of Service<a href="#"/>and and{" "} 
                            <a href="#"/> Privacy Policy, including{" "}
                            <a href="#"/> Cookie Use</p>
                            
                        <button className="home-right-btn-login">Login</button>
                        <button className="home-right-btn-signup">Signup</button>
                    </div>
                    <div className="home-right-btn">
                        <h3>Already have an account?</h3>
                        <button className="btn-secondary">Sign in</button>
                    </div>
                </div>
            </div>
            <footer>
                <a href="#">About</a>
                <a href="#">Help Center</a>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Ads info</a>
                <a href="#">Blog</a>
                <a href="#">Status</a>
                <a href="#">Careers</a>
                <a href="#">Brand Resources</a>
                <a href="#">Advertising</a>
                <a href="#">Marketing</a>
                <a href="#">Twitter for Business</a>
                <a href="#">Developers</a>
                <a href="#">Directory</a>
                <a href="#">Settings</a>
                <a href="#">© 2021 Twitter, Inc.</a>
            </footer>
        </div>

    )
    }
export default Homepage;
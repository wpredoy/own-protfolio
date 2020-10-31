import React from 'react';
import './Contact.css'
import emailjs from "emailjs-com";

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs
          .sendForm("gmail_motiur", "template_z0cyyuk", e.target, "user_XVjd0pY0NuyP91bLUubRY")
          .then(
            (result) => {
              alert("Your Massage Sent Successfully");
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    return (
        <div className='colorStyle'>
            <div className='container'>
                <div className='formStyle'>
                    <form onSubmit={sendEmail}>
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" name='name' class="form-control"placeholder="Enter your name" required/>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" name='email' class="form-control" placeholder="Enter your email" required/>
                        </div>
                        <div class="form-group">
                            <label>Message</label>
                            <textarea name="message" className="form-control"  cols="30" rows="10" placeholder=" Your Message"></textarea>
                        </div>
                        <button type="submit" value='send' className="buttonStyle">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
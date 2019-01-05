import React from 'react';
import TextField from '@material-ui/core/TextField';
import '../css/contact.css';

const Contact = () => (
    <div id="contact">
        <div className="header">
            <h1>Contact <span className="title-sec">me!</span></h1>
        </div>
        <div className="contact__container">
            <form className="forms">
                <TextField
                    id="name"
                    label="Name"
                    placeholder="Name"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                /> <br />
                <TextField
                    id="company"
                    label="Company"
                    placeholder="Company"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                />  <br />
                <TextField
                    id="email"
                    label="e-mail"
                    placeholder="e-mail"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                />  <br />
                <TextField
                    id="message"
                    variant="outlined"
                    label="Text message"
                    placeholder="Text message"
                    fullWidth
                    multiline
                    rows="4"
                    margin="normal"
                />
            </form>
        </div>
    </div>
)
export default Contact;
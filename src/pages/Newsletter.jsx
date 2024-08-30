import React from 'react';
import Swal from 'sweetalert2';

const Newsletter = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "ba5b6bf0-b3b6-4d69-98d5-4165e562a5aa");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully",
                icon: "success"
            });
        }
    };
    return (
        <div className="newsletter">
            <div className="container" >
                <div className="section-header">
                    <h2>Subscribe Our Newsletter</h2>
                </div>
                <form className="News-form" onSubmit={onSubmit}>
                    <input className="form-control" name="email" type="email" placeholder="Email here" required />
                    <button className="btn" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};
export default Newsletter
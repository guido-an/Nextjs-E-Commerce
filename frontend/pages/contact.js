import React, { Component } from "react";
import axios from "axios";
import Layout from "../components/Layout";

// class Contact extends Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;
//     console.log(message)
//     axios({
//       method: "POST",
//       url: "http://localhost:5000/send",
//       data: {
//         name: name,
//         email: email,
//         messsage: message
//       }
//     }).then(response => {
//       if (response.data.msg === "success") {
//         alert("Message Sent.");
//         this.resetForm();
//       } else if (response.data.msg === "fail") {
//         alert("Message failed to send.");
//       }
//     });
//   };

//   resetForm() {
//     document.getElementById("contact-form").reset();
//   }

//   render() {
//     return (
//       <div>
//         <form id="contact-form" onSubmit={this.handleSubmit}>
//           <div>
//             <input type="text" id="name" />
//           </div>
//           <div>
//             <input type="email" id="email" />
//           </div>
//           <div>
//             {/* <textarea id="message" /> */}
//             <input type="text" id="message" />
//           </div>
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

class Contact extends Component {
  state = {
    messageSent: ""
  };

  handleSubmit = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: {
        name: name,
        email: email,
        message: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        this.setState({
          messageSent: "message sent succesfully!"
        });
        setTimeout(() => {
          this.setState({ messageSent: "" });
        }, 3000);
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    return (
      <Layout>
        <div className="container contact-section text-center">
          <h1>Start Selling Now</h1>
          <form>
            <div>
              <input type="text" id="name" placeholder="Company Name" />
            </div>
            <div>
              <input type="text" id="name" placeholder="Reference Person" />
            </div>
            <div>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" id="phone" placeholder="Phone" />
            </div>
            <div>
              <textarea id="message" placeholder="Additional Info"  />
              
            </div>
            <button className="btn btn-success" onClick={this.handleSubmit}>Contact Me Back</button>
            <p>{this.state.messageSent}</p>
          </form>
        </div>
        <style jsx>{`
          h1{
            margin-top: 80px
          }
          .contact-section input{
            width: 550px;
            border-top: none;
            border-left: none;
            margin: 20px;
           
          }
          .contact-section textarea{
            width: 550px;
            border-top: none;
            border-left: none;
            border-color:  #eee;
            height: 200px;
          }
          .btn{
            margin-top: 40px;
            margin-bottom: 120px
          }
          
          `}</style>
      </Layout>
    );
  }
}

export default Contact;

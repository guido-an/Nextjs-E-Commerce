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
    }

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
        })
        setTimeout(() => {
            this.setState({messageSent: ""});
          }, 3000)
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
            <h1>get in touch</h1>
          <form>
            <div>
              <input type="text" id="name" />
            </div>
            <div>
              <input type="email" id="email" />
            </div>
            <div>
              {/* <textarea id="message" /> */}
              <input type="text" id="message" />
            </div>
            <button onClick={this.handleSubmit}>Send</button>
            <p>{this.state.messageSent}</p>
          </form>
        </Layout>
      );
    }
  }

export default Contact;

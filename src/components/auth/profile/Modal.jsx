// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";

// import { createBlog } from "../../../redux/blog/blog-actions";

// function Example(props) {
//   const initialValues = {
//     title: "",
//     content: "",
//   };

//   const [values, setValues] = useState(initialValues);

//   const [show, setShow] = useState(false);

//   const handleChange = (event) => {
//     const { value, name } = event.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     props.createBlog(values);
//     handleClose();
//   };

//   const handleClose = () => setShow(false);

//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch static backdrop modal
//       </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="exampleInputTitle">Title</label>
//               <input
//                 name="title"
//                 type="text"
//                 className="form-control"
//                 value={values.title}
//                 id="title"
//                 placeholder="Title"
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="exampleInputPassword1">Content</label>
//               <textarea
//                 name="content"
//                 type="text"
//                 id="form8"
//                 value={values.content}
//                 className="md-textarea form-control"
//                 rows="4"
//                 placeholder="Content"
//                 onChange={handleChange}
//               ></textarea>
//             </div>

//             <button type="submit" className="btn btn-primary">
//               Post
//             </button>
//           </form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createBlog: (blog) => dispatch(createBlog(blog)),
//   };
// };

// export default connect(null, mapDispatchToProps)(withRouter(Example));

// // export default Example;



// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";

// import { createBlog } from "../../redux/blog/blog-actions";

// function Createblog(props) {
//   const initialValues = {
//     title: "",
//     content: "",
//   };

//   const [values, setValues] = useState(initialValues);

//   const [show, setShow] = useState(false);

//   const handleChange = (event) => {
//     const { value, name } = event.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     props.createBlog(values);
//     handleClose();
//   };

//   const handleClose = () => setShow(false);

//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch static backdrop modal
//       </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="exampleInputTitle">Title</label>
//               <input
//                 name="title"
//                 type="text"
//                 className="form-control"
//                 value={values.title}
//                 id="title"
//                 placeholder="Title"
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="exampleInputPassword1">Content</label>
//               <textarea
//                 name="content"
//                 type="text"
//                 id="form8"
//                 value={values.content}
//                 className="md-textarea form-control"
//                 rows="4"
//                 placeholder="Content"
//                 onChange={handleChange}
//               ></textarea>
//             </div>

//             <button type="submit" className="btn btn-primary">
//               Post
//             </button>
//           </form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createBlog: (blog) => dispatch(createBlog(blog)),
//   };
// };

// export default connect(null, mapDispatchToProps)(withRouter(Createblog));

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { uploadImage } from "../../redux/image/image-actions";
import { createBlog } from "../../redux/blog/blog-actions";

function Createblog(props) {
  const initialValues = {
    title: "",
    content: "",
  };

  const [values, setValues] = useState(initialValues);

  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleImage = (event) => {
    if (event.target.files[0]) {
      const image = event.target.files[0];
      props.uploadImage(image);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.createBlog(values);
    handleClose();
  };

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const style = {
    marginLeft: "2rem",
  };
  return (
    <div className="row">
      <Button variant="primary" style={style} onClick={handleShow}>
        Create Blog
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="bod"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputTitle">Title</label>
              <input
                name="title"
                type="text"
                className="form-control"
                // value={values.title}
                id="title"
                placeholder="Title"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Content</label>
              <textarea
                name="content"
                type="text"
                id="form8"
                className="md-textarea form-control"
                rows="4"
                placeholder="Content"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <progress value={props.progress} max="100" />
              <input type="file" onChange={handleImage} />

              <img
                src={props.url || "http://via.placeholder.com/400x200"}
                width="300"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    url: state.image.url,
    progress: state.image.progress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBlog: (blog) => dispatch(createBlog(blog)),
    uploadImage: (image) => dispatch(uploadImage(image)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Createblog));

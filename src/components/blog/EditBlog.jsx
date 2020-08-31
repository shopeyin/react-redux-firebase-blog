import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { editBlog } from "../../redux/blog/blog-actions";

function EditBlog(props) {
  const initialValues = {
    title: `${props.item.title}`,
    content: `${props.item.content}`,
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

  const handleSubmit = (event) => {
    event.preventDefault();

    props.editBlog(values, props.item.id);

    handleClose();
  };

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const style = {
    cursor: "pointer",
  };

  return (
    <>
      <div variant="primary" style={style} onClick={handleShow}>
        &#8665;
      </div>

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
                value={values.title}
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
                value={values.content}
                className="md-textarea form-control"
                rows="4"
                placeholder="Content"
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    editBlog: (blog, id) => dispatch(editBlog(blog, id)),
  };
};

export default connect(null, mapDispatchToProps)(EditBlog);

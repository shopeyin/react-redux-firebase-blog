export const createBlog = (blog) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const imageUrl = getState().image.url;
    firestore
      .collection("blogs")
      .add({
        ...blog,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        imageUrl: imageUrl,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_BLOG", blog: blog });
      })
      .catch((error) => {
        dispatch({ type: "CREATE_BLOG_ERROR", error: error });
      });
  };
};

export const editBlog = (blog, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("blogs")
      .doc(id)
      .update({
        ...blog,
      })
      .then(() => {
        dispatch({
          type: "EDIT_BLOG",
          blog: blog,
        });
      })
      .catch((error) => {
        dispatch({
          type: "EDIT_PROJECT_ERROR",
          error: error,
        });
      });
  };
};

export const deleteBlog = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("blogs")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({
          type: "DELETE_BLOG",
          id: id,
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_BLOG_ERROR",
          error: error,
        });
      });
  };
};

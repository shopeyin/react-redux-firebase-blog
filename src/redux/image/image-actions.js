export const uploadImage = (image) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firebase = getFirebase();
      const storage = firebase.storage();
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
  
          dispatch({ type: "UPLOADING", progress: progress });
  
          console.log(progress);
        },
        (error) => {
          //err func
          dispatch({ type: "UPLOADING_FAIL", error: error });
          console.log(error);
        },
        () => {
          //complete func
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              // this.setState({ url: url });
              console.log(url);
              dispatch({ type: "UPLOADING_SUCCESS", url: url });
            });
        }
      );
    };
  };
  
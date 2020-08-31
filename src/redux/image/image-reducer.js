const initialState = {
    url: "",
    progress: 0,
    error: null,
  };
  
  const imageReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPLOADING":
        console.log("uploading", action.progress);
        return {
          ...state,
          progress: action.progress,
        };
      case "UPLOADING_FAIL":
        console.log("failed", action.error);
        return {
          ...state,
          error: action.error,
        };
      case "UPLOADING_SUCCESS":
        console.log("successful", action.url);
        return {
          ...state,
          url: action.url,
        };
  
      default:
        return state;
    }
  };
  
  export default imageReducer;
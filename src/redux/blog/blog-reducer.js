const initialState = {
  blogs: [
    { id: 1, title: "things", content: "chinua achebe" },
    { id: 2, title: "goos", content: "achebe" },
    { id: 3, title: "fors", content: "ebe" },
  ],
};
const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_BLOG":
      console.log("created blog", action.blog);
      return state;
    case "CREATE_BLOG_ERROR":
      console.log("created blog", action.error);
      return state;
    case "EDIT_BLOG":
      console.log("UPDATED", action.blog);
      return state;
    case "EDIT_BLOG_ERROR":
      console.log("not updated", action.error);
      return state;
    case "DELETE_BLOG":
      console.log("deleted", action.id);
      return state;
    case "DELETE_BLOG_ERROR":
      console.log("not deleted", action.error);
      return state;
    default:
      return state;
  }
};

export default blogReducer;

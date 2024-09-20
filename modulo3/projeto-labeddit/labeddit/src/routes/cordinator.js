export const goToLogin = (navigate) => {
  navigate("/login");
};
export const goToSiginUp = (navigate) => {
  navigate("/cadastro");
};
export const goToFeed = (navigate) => {
  navigate("/");
};
export const goToPost = (navigate, id) => {
  navigate(`/post/${id}`);
};

export const logout = () => {
  localStorage.clear('token');
  window.location.href = '/';
};

export default logout;


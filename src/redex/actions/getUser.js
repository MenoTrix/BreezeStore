export function getUserFromStorage() {
  let username = localStorage.getItem("username");
  let token = localStorage.getItem("token");
  let is_staff = localStorage.getItem("is_staff");
  return {
    type: "LoadUSER",
    payload: { username: username, token: token, is_staff: is_staff },
  };
}

export function setUserLocaally(username, token, is_staff) {
  localStorage.setItem("username", username);
  localStorage.setItem("token", token);
  localStorage.setItem("is_staff", is_staff);
  return {
    type: "STOREDUSER",
    payload: { username: username, token: token, is_staff: is_staff },
  };
}

export function logout() {
  localStorage.clear();

  return {
    type: "STOREDUSER",
    payload: { username: null, token: null, is_staff: null },
  };
}

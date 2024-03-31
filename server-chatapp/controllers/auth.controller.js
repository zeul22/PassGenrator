export const loginUser = (req, res) => {
  console.log("Login User");
};
export const logoutUser = (req, res) => {
  console.log("Logout User");
};
export const signup = (req, res) => {
  //   console.log("Signup User");
  try {
    const { username, email, password, gender } = req.body;
    
  } catch (error) {
    console.log("Signup Failed!!");
  }
};
                    
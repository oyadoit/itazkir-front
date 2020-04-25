export const signupConfig = {
    email: {
      isRequired: "Email field is required!",
      isEmail: "Enter a valid email"
    },
    password: {
      isRequired: "Password field is required!",
      isMinLength: {
        message: "Password must be 8 character long",
        length: 8
      }
    },
    firstName: {
      isRequired: "Enter your firstname",
    },
    lastName: {
      isRequired: "Enter your lastname",
    }

};


export const  loginConfig = {
  email: {
    isRequired: "Email field is required!",
    isEmail: "Enter a valid email"
  },
  password: {
    isRequired: "Password field is required!",
    isMinLength: {
      message: "Password must be 8 character long",
      length: 8
    }
  }
}
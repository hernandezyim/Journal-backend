import newError from "../helpers/newError.js";

const error = {
  unauthorized: () =>
    newError({
      status: 401,
      message: "Email and/or password incorrect",
    }),
  notFound: () => newError({ status: 404, message: "Not found" }),
  conflict: () => newError({ status: 409, message: "Email already exists" }),
  serverError: () =>
    newError({ status: 500, message: "Internal Server error" }),
  badRequest: () => newError({ status: 400, message: "Something went wrong" }),
};
export default error;

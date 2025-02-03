const { z } = require("zod");

//create object schema

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 character" })
    .max(255, { message: "Name must not be more than 255 character" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "invalid email address" })
    .min(3, { message: "Email must be atleast 3 character" })
    .max(255, { message: "Email must not be more than 255 character" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "phone must be atleast 10 character" })
    .max(20, { message: "phone must not be more than 20 character" }),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(7, { message: "password must be atleast 7 character" })
    .max(1024, { message: "password must not be more than 1024 character" }),
});


module.exports=signupSchema;
import React, { useState } from "react";
import {
  StyledText,
  StyledInputField,
  Stack,
  StyledButton,
} from "../components/index";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Form = () => {
  const [showPass, setShowPass] = useState(false);
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const data = (data) => {
    toast.success(data.email + " Registered");
  };

  return (
    <form
      onSubmit={handleSubmit(data)}
      style={{
        width: "60%",
        boxShadow: " 0px 10px 40px 0px #00000029",
        maxWidth: "1047px",
        paddingBlock: "80px",
        paddingInline: "10px",
        minWidth: "320px",
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        gap="20px"
        justifyContent="center"
        maxwidth="824px"
      >
        {/* Form Inputs */}
        <StyledText fontSize="48px" fontWeight="700">
          login
        </StyledText>
        <StyledInputField
          label="login ID"
          direction="column"
          placeholder="Enter Login ID"
          width="100%"
          {...register("email", {
            required: "email is required to login",
            pattern: { value: emailRegex, message: "email is not valid" },
          })}
          outline={errors?.email ? "2px solid red" : null}
          helperText={errors?.email ? errors.email.message : null}
        />

        {/* Password Field */}
        <div style={{ position: "relative", width: "100%" }}>
          <StyledInputField
            label="Password"
            direction="column"
            placeholder="Enter Password"
            type={showPass ? "text" : "password"}
            {...register("password", {
              required: true,
            })}
            outline={errors?.password ? "2px solid red" : null}
          />
          <div
            style={{
              position: "absolute",
              right: "10px",
              bottom: "8px",
              cursor: "pointer",
            }}
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? (
              <AiFillEye color="#737B86" />
            ) : (
              <AiFillEyeInvisible color="#737B86" />
            )}
          </div>
        </div>
        {/* Form Checks */}
        <Stack direction="row" justifyContent="space-between">
          <div>
            <StyledInputField
              label="Remember Me"
              labelcolor="#737B86"
              direction="row-reverse"
              type="checkbox"
              width="max-content"
            />
            <Stack gap="5px">
              <StyledInputField
                label="Agree to"
                labelcolor="#737B86"
                direction="row-reverse"
                type="checkbox"
                width="max-content"
                {...register("terms", {
                  required: true,
                })}
                outline={errors?.terms ? "0.5px solid red" : null}
              />
              <StyledText color="#F78719" textDecoration="underline">
                Terms & Conditions
              </StyledText>
            </Stack>
          </div>
          <StyledText color="#F78719" textDecoration="none">
            Change Password
          </StyledText>
        </Stack>
        {/* Form Submit */}
        <StyledButton type="submit">login</StyledButton>
        <StyledText>
          Don’t have an account?{" "}
          <StyledText
            color="#F78719"
            fontWeight="700"
            textDecoration="underline"
          >
            {" "}
            Register Here
          </StyledText>
        </StyledText>
      </Stack>
    </form>
  );
};

export default Form;

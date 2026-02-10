import axios from "axios";
import type { PropsToButtonNewMeeting } from "../types";
import { useState } from "react";

const ButtonNewMeeting = (props: PropsToButtonNewMeeting) => {
  const { newMeeting, formRef } = props;
  const [isValid, setIsValid] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isValidAndPutNewMeeting = () => {
    const inputs = formRef.current?.querySelectorAll("input, select");
    if (inputs) {
      for (const element of inputs) {
        const input = element as HTMLInputElement;

        if (!input.value) {
          input.focus();
          setIsSuccess(false);
          setIsValid(true);
          return;
        }
      }
    }
    setIsValid(false);
    putNewMeeting();
    setIsSuccess(true);
    if (inputs) {
      for (const element of inputs) {
        const input = element as HTMLInputElement;

        input.value = "";
      }
    }
  };

  const putNewMeeting = async () => {
    try {
      const { data } = await axios.put(
        "http://localhost:3001/app/teamsDev/newMeeting",
        newMeeting,
      );

      console.log(`success: ${data}`);

      return;
    } catch (error) {
      console.log(error);
      setIsValid(true);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          isValidAndPutNewMeeting();
        }}
        className="btn-new-meeting btn btn-primary w-auto align-self-start"
      >
        + New Meeting
      </button>
      {isValid && (
        <div className="alert alert-danger rounded-3 text-start mt-3">
          {" "}
          Ho! I got null, I expected a string 😟{" "}
        </div>
      )}
      {isSuccess && (
        <div className="alert alert-success rounded-3 text-start mt-3">
          {" "}
          <strong>Yay!</strong> The data arrived safely! 🚀
        </div>
      )}
    </div>
  );
};

export default ButtonNewMeeting;

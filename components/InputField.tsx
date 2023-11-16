// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicInputField,
  DefaultInputFieldProps
} from "./plasmic/color_tool/PlasmicInputField";
import { HTMLElementRefOf } from "@plasmicapp/react-web";


export interface InputFieldProps extends DefaultInputFieldProps {}

function InputField_(props: InputFieldProps, ref: HTMLElementRefOf<"div">) {

  return <PlasmicInputField root={{ ref }} {...props} />;
}

const InputField = React.forwardRef(InputField_);
export default InputField;
// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicHueField,
  DefaultHueFieldProps
} from "./plasmic/color_tool/PlasmicHueField";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { ColorsContext } from "./Theme";
import chroma from "chroma-js";

export interface HueFieldProps extends DefaultHueFieldProps {}

function HueField_(props: HueFieldProps, ref: HTMLElementRefOf<"div">) {
  const config = React.useContext(ColorsContext)
  const [color, setColor] = React.useState(config.baseValue);


  return <PlasmicHueField input={{
    props:{
      value: chroma(color).hsl()[0].toFixed(2),
      onChange:(e) => {
        setColor(chroma.hsl(Number(e.target.value), 1, 0.5).hex());
      }
    }
  }}
    huePicker={{
    props:{
      color: color,
      onChange: (e) => {
        setColor(e.hex);
      }
    }
  }} root={{ ref }} {...props} />;

}


const HueField = React.forwardRef(HueField_);
export default HueField;

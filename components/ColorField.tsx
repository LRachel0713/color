// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicColorField,
  DefaultColorFieldProps,
} from "./plasmic/color_tool/PlasmicColorField";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { ColorsContext,ConfigUpdateContext } from "./Theme";

export interface ColorFieldProps extends DefaultColorFieldProps {}

function ColorField_(props: ColorFieldProps, ref: HTMLElementRefOf<"div">) {
  const config = React.useContext(ColorsContext);
  const updateConfig = React.useContext(ConfigUpdateContext);
  const [showPanel, setShowPanel] = React.useState(false);
  const [color, setColor] = React.useState(config.baseValue);
  const [inputValue, setInputValue] = React.useState(color);

  React.useEffect(() => {
    updateConfig({...config,  baseValue: color });
  }, [color]);
  return (
    <PlasmicColorField
      showPanel={showPanel}
      input={{
        value:inputValue,
        onChange: (e) => {
          setInputValue(e.target.value.toUpperCase());
          if (e.target.value.length === 7 && /^#[0-9A-Fa-f]{6}$/.test(e.target.value)) setColor(e.target.value);
        }
      }}
      picker={{
        props: {
          color: color,
          onChange: (e) => {
            setColor(e.hex.toUpperCase());
            setInputValue(e.hex.toUpperCase());
          }
          
        },
      }}
      display={{
        onClick: () => {
          setShowPanel(true)
        },
        style:{
          backgroundColor: color
        }
      }}
      cover={{
        onClick: () => {
          setShowPanel(false);
        }
      }}
    
      root={{ ref }}
      {...props}
    />
  );
}

const ColorField = React.forwardRef(ColorField_);
export default ColorField;

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7 3v3.4c0 .56 0 .84.109 1.054a1 1 0 00.437.437C7.76 8 8.04 8 8.6 8h6.8c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437C17 7.24 17 6.96 17 6.4V4m0 17v-6.4c0-.56 0-.84-.109-1.054a1 1 0 00-.437-.437C16.24 13 15.96 13 15.4 13H8.6c-.56 0-.84 0-1.054.109a1 1 0 00-.437.437C7 13.76 7 14.04 7 14.6V21M21 9.325V16.2c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C5.28 3 6.12 3 7.8 3h6.875c.489 0 .733 0 .963.055.204.05.4.13.579.24.201.123.374.296.72.642l3.126 3.126c.346.346.519.519.642.72.11.18.19.374.24.579.055.23.055.474.055.963z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */

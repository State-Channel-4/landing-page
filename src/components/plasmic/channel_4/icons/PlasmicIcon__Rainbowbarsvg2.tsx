// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rainbowbarsvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rainbowbarsvg2Icon(props: Rainbowbarsvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 466 8"}
      shapeRendering={"geometricPrecision"}
      textRendering={"geometricPrecision"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        width={"466"}
        height={"8"}
        rx={"4"}
        ry={"4"}
        fill={"currentColor"}
      ></rect>
    </svg>
  );
}

export default Rainbowbarsvg2Icon;
/* prettier-ignore-end */

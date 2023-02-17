// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line1Icon(props: Line1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 292 2"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeDasharray={"12 12"}
        d={"M0 1h292"}
      ></path>
    </svg>
  );
}

export default Line1Icon;
/* prettier-ignore-end */

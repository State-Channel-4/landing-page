// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwitterIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TwitterIcon(props: TwitterIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16zm22.1-4.5c.7-.1 1.3-.2 1.9-.5-.4.7-1 1.3-1.7 1.7.2 4.7-3.2 9.8-9.3 9.8-1.8 0-3.5-.6-5-1.5 1.7.2 3.5-.3 4.7-1.2-1.5 0-2.7-1-3.1-2.3.5.1 1 0 1.5-.1-1.5-.4-2.6-1.8-2.6-3.3.5.2 1 .4 1.5.4-1.4-1-1.9-2.9-1-4.4 1.7 2 4.1 3.3 6.8 3.4-.5-2 1.1-4 3.2-4 .9 0 1.8.4 2.4 1 .8-.2 1.5-.4 2.1-.8-.2.8-.7 1.4-1.4 1.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TwitterIcon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DiscordRoundIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DiscordRoundIcon(props: DiscordRoundIconProps) {
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
          "M17.744 18.8c.24.304.528.648.528.648 1.768-.056 2.448-1.216 2.448-1.216 0-2.576-1.152-4.664-1.152-4.664-1.152-.864-2.248-.84-2.248-.84l-.112.128c1.36.416 1.992 1.016 1.992 1.016a6.521 6.521 0 00-4.024-.752.671.671 0 00-.118.013l-.018.003c-.28.024-.96.128-1.816.504-.296.136-.472.232-.472.232s.664-.632 2.104-1.048l-.08-.096s-1.096-.024-2.248.84c0 0-1.152 2.088-1.152 4.664 0 0 .672 1.16 2.44 1.216 0 0 .296-.36.536-.664-1.016-.304-1.4-.944-1.4-.944s.08.056.224.136a.324.324 0 00.068.044c.012.006.024.012.036.02.2.112.4.2.584.272.328.128.72.256 1.176.344.6.112 1.304.152 2.072.008.376-.064.76-.176 1.16-.344.28-.104.592-.256.92-.472 0 0-.4.656-1.448.952zm-4.008-2.2c0-.488.36-.888.816-.888.456 0 .824.4.816.888 0 .488-.36.888-.816.888-.448 0-.816-.4-.816-.888zm2.92 0c0-.488.36-.888.816-.888.456 0 .816.4.816.888s-.36.888-.816.888c-.448 0-.816-.4-.816-.888z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM9 10.648C9 9.736 9.736 9 10.64 9h10.72c.904 0 1.64.736 1.64 1.648V25l-1.72-1.52-.968-.896-1.024-.952.424 1.48H10.64c-.904 0-1.64-.736-1.64-1.648V10.648z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DiscordRoundIcon;
/* prettier-ignore-end */

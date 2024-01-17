// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: neRFmgTP9QWA953pSsa5o7
// Component: 9XCuOPL0Q3

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_channel_4.module.css"; // plasmic-import: neRFmgTP9QWA953pSsa5o7/projectcss
import sty from "./PlasmicButtonPrimary.module.css"; // plasmic-import: 9XCuOPL0Q3/css

createPlasmicElementProxy;

export type PlasmicButtonPrimary__VariantMembers = {};
export type PlasmicButtonPrimary__VariantsArgs = {};
type VariantPropType = keyof PlasmicButtonPrimary__VariantsArgs;
export const PlasmicButtonPrimary__VariantProps = new Array<VariantPropType>();

export type PlasmicButtonPrimary__ArgsType = {};
type ArgPropType = keyof PlasmicButtonPrimary__ArgsType;
export const PlasmicButtonPrimary__ArgProps = new Array<ArgPropType>();

export type PlasmicButtonPrimary__OverridesType = {
  buttonPrimary?: p.Flex<"div">;
  btnString?: p.Flex<"div">;
};

export interface DefaultButtonPrimaryProps {
  className?: string;
}

const $$ = {};

function PlasmicButtonPrimary__RenderFunc(props: {
  variants: PlasmicButtonPrimary__VariantsArgs;
  args: PlasmicButtonPrimary__ArgsType;
  overrides: PlasmicButtonPrimary__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"buttonPrimary"}
      data-plasmic-override={overrides.buttonPrimary}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.buttonPrimary
      )}
    >
      <div
        data-plasmic-name={"btnString"}
        data-plasmic-override={overrides.btnString}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.btnString
        )}
      >
        {"Launch App - POC2"}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  buttonPrimary: ["buttonPrimary", "btnString"],
  btnString: ["btnString"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  buttonPrimary: "div";
  btnString: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButtonPrimary__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButtonPrimary__VariantsArgs;
    args?: PlasmicButtonPrimary__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButtonPrimary__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicButtonPrimary__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicButtonPrimary__ArgProps,
          internalVariantPropNames: PlasmicButtonPrimary__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButtonPrimary__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "buttonPrimary") {
    func.displayName = "PlasmicButtonPrimary";
  } else {
    func.displayName = `PlasmicButtonPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonPrimary = Object.assign(
  // Top-level PlasmicButtonPrimary renders the root element
  makeNodeComponent("buttonPrimary"),
  {
    // Helper components rendering sub-elements
    btnString: makeNodeComponent("btnString"),

    // Metadata about props expected for PlasmicButtonPrimary
    internalVariantProps: PlasmicButtonPrimary__VariantProps,
    internalArgProps: PlasmicButtonPrimary__ArgProps
  }
);

export default PlasmicButtonPrimary;
/* prettier-ignore-end */

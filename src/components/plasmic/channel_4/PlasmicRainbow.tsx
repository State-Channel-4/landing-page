// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: neRFmgTP9QWA953pSsa5o7
// Component: l4eGm_bHuO

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
import sty from "./PlasmicRainbow.module.css"; // plasmic-import: l4eGm_bHuO/css

export type PlasmicRainbow__VariantMembers = {};
export type PlasmicRainbow__VariantsArgs = {};
type VariantPropType = keyof PlasmicRainbow__VariantsArgs;
export const PlasmicRainbow__VariantProps = new Array<VariantPropType>();

export type PlasmicRainbow__ArgsType = {};
type ArgPropType = keyof PlasmicRainbow__ArgsType;
export const PlasmicRainbow__ArgProps = new Array<ArgPropType>();

export type PlasmicRainbow__OverridesType = {
  rectangle17?: p.Flex<"div">;
};

export interface DefaultRainbowProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicRainbow__RenderFunc(props: {
  variants: PlasmicRainbow__VariantsArgs;
  args: PlasmicRainbow__ArgsType;
  overrides: PlasmicRainbow__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"rectangle17"}
      data-plasmic-override={overrides.rectangle17}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.rectangle17
      )}
      onAnimationStart={async event => {
        const $steps = {};
        $steps["updateStateVariable"] = true
          ? (() => {
              const actionArgs = {};
              return __wrapUserFunction(
                {
                  type: "InteractionLoc",
                  actionName: "updateVariable",
                  interactionUuid: "5D4H15dEdN",
                  componentUuid: "l4eGm_bHuO"
                },
                () =>
                  (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;
                    undefined;
                  })?.apply(null, [actionArgs]),
                actionArgs
              );
            })()
          : undefined;
        if (
          typeof $steps["updateStateVariable"] === "object" &&
          typeof $steps["updateStateVariable"].then === "function"
        ) {
          $steps["updateStateVariable"] = await __wrapUserPromise(
            {
              type: "InteractionLoc",
              actionName: "updateVariable",
              interactionUuid: "5D4H15dEdN",
              componentUuid: "l4eGm_bHuO"
            },
            $steps["updateStateVariable"]
          );
        }
      }}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  rectangle17: ["rectangle17"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  rectangle17: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRainbow__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRainbow__VariantsArgs;
    args?: PlasmicRainbow__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRainbow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRainbow__ArgsType,
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
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicRainbow__ArgProps,
          internalVariantPropNames: PlasmicRainbow__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRainbow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "rectangle17") {
    func.displayName = "PlasmicRainbow";
  } else {
    func.displayName = `PlasmicRainbow.${nodeName}`;
  }
  return func;
}

export const PlasmicRainbow = Object.assign(
  // Top-level PlasmicRainbow renders the root element
  makeNodeComponent("rectangle17"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicRainbow
    internalVariantProps: PlasmicRainbow__VariantProps,
    internalArgProps: PlasmicRainbow__ArgProps
  }
);

export default PlasmicRainbow;
/* prettier-ignore-end */

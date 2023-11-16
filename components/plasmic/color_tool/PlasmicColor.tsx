// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dczqNaFYoArv9QmtqhGLsR
// Component: YczP2_j8Fh
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

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
import ResetNob from "../../ResetNob"; // plasmic-import: CA75pWuZR0/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: dczqNaFYoArv9QmtqhGLsR/projectcss
import sty from "./PlasmicColor.module.css"; // plasmic-import: YczP2_j8Fh/css

import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: Nf9h6L9BaX/icon
import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: pvDF8fHmEM/icon

export type PlasmicColor__VariantMembers = {
  onDark: "onDark";
  adjustingSaturation: "adjustingSaturation";
  isLocked: "isLocked";
};

export type PlasmicColor__VariantsArgs = {
  onDark?: SingleBooleanChoiceArg<"onDark">;
  adjustingSaturation?: SingleBooleanChoiceArg<"adjustingSaturation">;
  isLocked?: SingleBooleanChoiceArg<"isLocked">;
};

type VariantPropType = keyof PlasmicColor__VariantsArgs;
export const PlasmicColor__VariantProps = new Array<VariantPropType>(
  "onDark",
  "adjustingSaturation",
  "isLocked"
);

export type PlasmicColor__ArgsType = {};
type ArgPropType = keyof PlasmicColor__ArgsType;
export const PlasmicColor__ArgProps = new Array<ArgPropType>();

export type PlasmicColor__OverridesType = {
  root?: p.Flex<"div">;
  lock?: p.Flex<"svg">;
  name?: p.Flex<"div">;
  contrast?: p.Flex<"div">;
  hexCode?: p.Flex<"div">;
  reset?: p.Flex<"div">;
  resetNob?: p.Flex<typeof ResetNob>;
  slider?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultColorProps {
  onDark?: SingleBooleanChoiceArg<"onDark">;
  adjustingSaturation?: SingleBooleanChoiceArg<"adjustingSaturation">;
  isLocked?: SingleBooleanChoiceArg<"isLocked">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicColor__RenderFunc(props: {
  variants: PlasmicColor__VariantsArgs;
  args: PlasmicColor__ArgsType;
  overrides: PlasmicColor__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "onDark",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.onDark
          : undefined
      },

      {
        path: "adjustingSaturation",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.adjustingSaturation
          : undefined
      },

      {
        path: "isLocked",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.isLocked
          : undefined
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root,
        {
          [sty.rootadjustingSaturation]: hasVariant(
            $state,
            "adjustingSaturation",
            "adjustingSaturation"
          ),
          [sty.rootadjustingSaturation_isLocked]:
            hasVariant($state, "isLocked", "isLocked") &&
            hasVariant($state, "adjustingSaturation", "adjustingSaturation"),
          [sty.rootisLocked]: hasVariant($state, "isLocked", "isLocked"),
          [sty.rootonDark]: hasVariant($state, "onDark", "onDark")
        }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      {(
        hasVariant($state, "isLocked", "isLocked") &&
        hasVariant($state, "adjustingSaturation", "adjustingSaturation")
          ? true
          : hasVariant($state, "isLocked", "isLocked")
          ? true
          : true
      ) ? (
        <p.PlasmicIcon
          data-plasmic-name={"lock"}
          data-plasmic-override={overrides.lock}
          PlasmicIconType={
            hasVariant($state, "isLocked", "isLocked") &&
            hasVariant($state, "adjustingSaturation", "adjustingSaturation")
              ? Icon12Icon
              : Icon11Icon
          }
          className={classNames(projectcss.all, sty.lock, {
            [sty.lockadjustingSaturation_isLocked]:
              hasVariant($state, "isLocked", "isLocked") &&
              hasVariant($state, "adjustingSaturation", "adjustingSaturation"),
            [sty.lockadjustingSaturation_onDark_isLocked]:
              hasVariant(
                $state,
                "adjustingSaturation",
                "adjustingSaturation"
              ) &&
              hasVariant($state, "isLocked", "isLocked") &&
              hasVariant($state, "onDark", "onDark"),
            [sty.lockisLocked]: hasVariant($state, "isLocked", "isLocked")
          })}
          role={"img"}
        />
      ) : null}
      {(
        hasVariant($state, "adjustingSaturation", "adjustingSaturation")
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"name"}
          data-plasmic-override={overrides.name}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.name,
            {
              [sty.nameadjustingSaturation]: hasVariant(
                $state,
                "adjustingSaturation",
                "adjustingSaturation"
              ),
              [sty.nameadjustingSaturation_onDark_isLocked]:
                hasVariant(
                  $state,
                  "adjustingSaturation",
                  "adjustingSaturation"
                ) &&
                hasVariant($state, "isLocked", "isLocked") &&
                hasVariant($state, "onDark", "onDark"),
              [sty.nameisLocked]: hasVariant($state, "isLocked", "isLocked"),
              [sty.nameonDark]: hasVariant($state, "onDark", "onDark")
            }
          )}
        >
          {"Name"}
        </div>
      ) : null}
      {(
        hasVariant($state, "adjustingSaturation", "adjustingSaturation")
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"contrast"}
          data-plasmic-override={overrides.contrast}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.contrast,
            {
              [sty.contrastadjustingSaturation]: hasVariant(
                $state,
                "adjustingSaturation",
                "adjustingSaturation"
              ),
              [sty.contrastadjustingSaturation_isLocked]:
                hasVariant($state, "isLocked", "isLocked") &&
                hasVariant(
                  $state,
                  "adjustingSaturation",
                  "adjustingSaturation"
                ),
              [sty.contrastonDark]: hasVariant($state, "onDark", "onDark")
            }
          )}
        >
          {"4.5:1"}
        </div>
      ) : null}
      {(
        hasVariant($state, "adjustingSaturation", "adjustingSaturation") &&
        triggers.hover_root
          ? true
          : triggers.hover_root
          ? true
          : hasVariant($state, "adjustingSaturation", "adjustingSaturation")
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"hexCode"}
          data-plasmic-override={overrides.hexCode}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.hexCode,
            {
              [sty.hexCodeadjustingSaturation]: hasVariant(
                $state,
                "adjustingSaturation",
                "adjustingSaturation"
              ),
              [sty.hexCodeisLocked]: hasVariant($state, "isLocked", "isLocked"),
              [sty.hexCodeonDark]: hasVariant($state, "onDark", "onDark")
            }
          )}
        >
          {"#HexCode"}
        </div>
      ) : null}
      {(
        hasVariant($state, "adjustingSaturation", "adjustingSaturation")
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"reset"}
          data-plasmic-override={overrides.reset}
          className={classNames(projectcss.all, sty.reset, {
            [sty.resetadjustingSaturation]: hasVariant(
              $state,
              "adjustingSaturation",
              "adjustingSaturation"
            )
          })}
        >
          {(
            hasVariant($state, "adjustingSaturation", "adjustingSaturation")
              ? true
              : true
          ) ? (
            <ResetNob
              data-plasmic-name={"resetNob"}
              data-plasmic-override={overrides.resetNob}
              className={classNames("__wab_instance", sty.resetNob, {
                [sty.resetNobadjustingSaturation]: hasVariant(
                  $state,
                  "adjustingSaturation",
                  "adjustingSaturation"
                )
              })}
            />
          ) : null}
        </div>
      ) : null}
      {(
        hasVariant($state, "adjustingSaturation", "adjustingSaturation")
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"slider"}
          data-plasmic-override={overrides.slider}
          className={classNames(projectcss.all, sty.slider, {
            [sty.slideradjustingSaturation]: hasVariant(
              $state,
              "adjustingSaturation",
              "adjustingSaturation"
            ),
            [sty.slideradjustingSaturation_isLocked]:
              hasVariant($state, "isLocked", "isLocked") &&
              hasVariant($state, "adjustingSaturation", "adjustingSaturation"),
            [sty.slideradjustingSaturation_onDark_isLocked]:
              hasVariant(
                $state,
                "adjustingSaturation",
                "adjustingSaturation"
              ) &&
              hasVariant($state, "isLocked", "isLocked") &&
              hasVariant($state, "onDark", "onDark"),
            [sty.sliderisLocked]: hasVariant($state, "isLocked", "isLocked"),
            [sty.slideronDark]: hasVariant($state, "onDark", "onDark")
          })}
        >
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox, {
              [sty.freeBoxadjustingSaturation]: hasVariant(
                $state,
                "adjustingSaturation",
                "adjustingSaturation"
              )
            })}
          />
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "lock",
    "name",
    "contrast",
    "hexCode",
    "reset",
    "resetNob",
    "slider",
    "freeBox"
  ],
  lock: ["lock"],
  name: ["name"],
  contrast: ["contrast"],
  hexCode: ["hexCode"],
  reset: ["reset", "resetNob"],
  resetNob: ["resetNob"],
  slider: ["slider", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  lock: "svg";
  name: "div";
  contrast: "div";
  hexCode: "div";
  reset: "div";
  resetNob: typeof ResetNob;
  slider: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicColor__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicColor__VariantsArgs;
    args?: PlasmicColor__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicColor__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicColor__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
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
          internalArgPropNames: PlasmicColor__ArgProps,
          internalVariantPropNames: PlasmicColor__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicColor__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicColor";
  } else {
    func.displayName = `PlasmicColor.${nodeName}`;
  }
  return func;
}

export const PlasmicColor = Object.assign(
  // Top-level PlasmicColor renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    lock: makeNodeComponent("lock"),
    _name: makeNodeComponent("name"),
    contrast: makeNodeComponent("contrast"),
    hexCode: makeNodeComponent("hexCode"),
    reset: makeNodeComponent("reset"),
    resetNob: makeNodeComponent("resetNob"),
    slider: makeNodeComponent("slider"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicColor
    internalVariantProps: PlasmicColor__VariantProps,
    internalArgProps: PlasmicColor__ArgProps
  }
);

export default PlasmicColor;
/* prettier-ignore-end */
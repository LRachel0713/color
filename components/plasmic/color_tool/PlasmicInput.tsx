// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dczqNaFYoArv9QmtqhGLsR
// Component: 434vhQcoRkn
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import * as pp from "@plasmicapp/react-web";
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

import { DarkValue, useDark } from "./PlasmicGlobalVariant__Dark"; // plasmic-import: AsCuTyckBi/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: dczqNaFYoArv9QmtqhGLsR/projectcss
import sty from "./PlasmicInput.module.css"; // plasmic-import: 434vhQcoRkn/css

export type PlasmicInput__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  isDisabled: "isDisabled";
};

export type PlasmicInput__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
};

type VariantPropType = keyof PlasmicInput__VariantsArgs;
export const PlasmicInput__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "isDisabled"
);

export type PlasmicInput__ArgsType = {
  placeholder?: string;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  value?: string;
  name?: string;
  required?: boolean;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  type?: string;
  step?: any;
  max?: any;
  min?: any;
  maxLength?: number;
};

type ArgPropType = keyof PlasmicInput__ArgsType;
export const PlasmicInput__ArgProps = new Array<ArgPropType>(
  "placeholder",
  "endIcon",
  "startIcon",
  "value",
  "name",
  "required",
  "aria-label",
  "aria-labelledby",
  "type",
  "step",
  "max",
  "min",
  "maxLength"
);

export type PlasmicInput__OverridesType = {
  root?: p.Flex<"div">;
  startIconContainer?: p.Flex<"div">;
  input?: p.Flex<"input">;
  endIconContainer?: p.Flex<"div">;
};

export interface DefaultInputProps extends pp.BaseTextInputProps {
  placeholder?: string;
  value?: string;
  name?: string;
  required?: boolean;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  type?: string;
  step?: any;
  max?: any;
  min?: any;
  maxLength?: number;
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

function PlasmicInput__RenderFunc(props: {
  variants: PlasmicInput__VariantsArgs;
  args: PlasmicInput__ArgsType;
  overrides: PlasmicInput__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          placeholder: "Enter something…" as const,
          type: "text" as const,
          step: "1" as const
        },
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
        path: "showStartIcon",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.showStartIcon
          : undefined
      },

      {
        path: "showEndIcon",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.showEndIcon
          : undefined
      },

      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.isDisabled
          : undefined
      },

      {
        path: "value",
        type: "writable",
        variableType: "text",

        valueProp: "value",
        onChangeProp: "onChange"
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  const globalVariants = ensureGlobalVariants({
    dark: useDark()
  });

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
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootglobal_dark__true]: hasVariant(
            globalVariants,
            "dark",
            "_true"
          ),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          )
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {(hasVariant($state, "showStartIcon", "showStartIcon") ? true : true) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(projectcss.all, sty.startIconContainer, {
            [sty.startIconContainer___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.startIconContainerisDisabled]: hasVariant(
              $state,
              "isDisabled",
              "isDisabled"
            ),
            [sty.startIconContainershowStartIcon]: hasVariant(
              $state,
              "showStartIcon",
              "showStartIcon"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg__aVb9A)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })}
        </div>
      ) : null}

      <input
        data-plasmic-name={"input"}
        data-plasmic-override={overrides.input}
        aria-label={args["aria-label"]}
        aria-labelledby={args["aria-labelledby"]}
        className={classNames(projectcss.all, projectcss.input, sty.input, {
          [sty.input___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.inputglobal_dark__true]: hasVariant(
            globalVariants,
            "dark",
            "_true"
          ),
          [sty.inputisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.inputshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          )
        })}
        disabled={
          hasVariant($state, "isDisabled", "isDisabled") ? true : undefined
        }
        max={args.max}
        maxLength={args.maxLength}
        min={args.min}
        name={args.name}
        placeholder={args.placeholder}
        ref={ref => {
          $refs["input"] = ref;
        }}
        required={args.required}
        step={args.step}
        type={args.type}
        value={args.value}
      />

      {(hasVariant($state, "showEndIcon", "showEndIcon") ? true : true) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(projectcss.all, sty.endIconContainer, {
            [sty.endIconContainershowEndIcon]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg__vFyEz)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                $state,
                "showEndIcon",
                "showEndIcon"
              )
            })
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseTextInputProps>(
  props: P,
  ref: pp.TextInputRef
) {
  return pp.useTextInput<P, typeof PlasmicInput>(
    PlasmicInput,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root",
      input: "input"
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "startIconContainer", "input", "endIconContainer"],
  startIconContainer: ["startIconContainer"],
  input: ["input"],
  endIconContainer: ["endIconContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  startIconContainer: "div";
  input: "input";
  endIconContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInput__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInput__VariantsArgs;
    args?: PlasmicInput__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInput__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInput__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicInput__ArgProps,
          internalVariantPropNames: PlasmicInput__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInput";
  } else {
    func.displayName = `PlasmicInput.${nodeName}`;
  }
  return func;
}

export const PlasmicInput = Object.assign(
  // Top-level PlasmicInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    input: makeNodeComponent("input"),
    endIconContainer: makeNodeComponent("endIconContainer"),

    // Metadata about props expected for PlasmicInput
    internalVariantProps: PlasmicInput__VariantProps,
    internalArgProps: PlasmicInput__ArgProps,

    useBehavior
  }
);

export default PlasmicInput;
/* prettier-ignore-end */
"use client";

import React, { useRef } from "react";
import type { PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import type { MotionProps } from "motion/react";
import { House, BadgeInfoIcon, FolderGit2, Mail } from "lucide-react";

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AppleDockProps extends VariantProps<typeof appleDockVariants> {
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  disableMagnification?: boolean;
  iconDistance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;
const DEFAULT_DISABLEMAGNIFICATION = false;

const appleDockVariants = cva(
  "fixed right-6 top-1/2 -translate-y-1/2 z-50 mx-auto flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/70 backdrop-blur-md p-3",
);

const AppleDock = React.forwardRef<HTMLDivElement, AppleDockProps>(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      disableMagnification = DEFAULT_DISABLEMAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      direction = "middle",
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (
          React.isValidElement<AppleDockIconProps>(child) &&
          child.type === AppleDockIcon
        ) {
          return React.cloneElement(child, {
            ...child.props,
            mouseX: mouseX,
            size: iconSize,
            magnification: iconMagnification,
            disableMagnification: disableMagnification,
            distance: iconDistance,
          });
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(appleDockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}
      >
        {renderChildren()}
      </motion.div>
    );
  },
);

AppleDock.displayName = "AppleDock";

export interface AppleDockIconProps extends Omit<
  MotionProps & React.HTMLAttributes<HTMLDivElement>,
  "children"
> {
  size?: number;
  magnification?: number;
  disableMagnification?: boolean;
  distance?: number;
  mouseX?: MotionValue<number>;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
}

const AppleDockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  disableMagnification,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}: AppleDockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const padding = Math.max(6, size * 0.2);
  const defaultMouseX = useMotionValue(Infinity);

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const targetSize = disableMagnification ? size : magnification;

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, targetSize, size],
  );

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        disableMagnification && "hover:bg-muted-foreground transition-colors",
        className,
      )}
      {...props}
    >
      <div>{children}</div>
    </motion.div>
  );
};

AppleDockIcon.displayName = "AppleDockIcon";

export default function AppleDockDemo() {
  type IconData = {
    IconComponent: LucideIcon;
    bgColor: string;
    textColor: string;
    label: string;
    targetId: string;
  };

  const dockIcons: IconData[] = [
    {
      IconComponent: House,
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-500",
      label: "House",
      targetId: "home",
    },
    {
      IconComponent: BadgeInfoIcon,
      bgColor: "bg-orange-400/10",
      textColor: "text-orange-400",
      label: "BadgeInfo",
      targetId: "about",
    },
    {
      IconComponent: FolderGit2,
      bgColor: "bg-teal-400/10",
      textColor: "text-teal-400",
      label: "FolderGit2",
      targetId: "projects",
    },
    {
      IconComponent: Mail,
      bgColor: "bg-red-500/10",
      textColor: "text-red-500",
      label: "Mail",
      targetId: "contact",
    },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-x-1/2 z-50">
      <AppleDock iconMagnification={60} iconDistance={140}>
        {dockIcons.map(
          ({ IconComponent, bgColor, textColor, label, targetId }) => (
            <AppleDockIcon
              key={label}
              className={cn(bgColor, textColor)}
              aria-label={label}
              onClick={() =>
                document
                  .getElementById(targetId)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <IconComponent className="w-6 h-6" />
            </AppleDockIcon>
          ),
        )}
      </AppleDock>
    </div>
  );
}

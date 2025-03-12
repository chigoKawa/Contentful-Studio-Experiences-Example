"use client";
import React, { FC } from "react";
import { ComponentDefinition } from "@contentful/experiences-sdk-react";
import { Button } from "@/components/ui/button";
import { cva, cx, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("", {
  variants: {
    buttonType: {
      primary: "button button-primary",
      secondary: "secondary button-secondary",
      tertiary: "button button-tertiary",
      warning: "button button-warning",
      success: "button button-success",
      info: "button button-info",
    },
  },
  defaultVariants: {
    buttonType: "primary",
  },
});

interface IStudioButton extends VariantProps<typeof buttonVariants> {
  label: string;
}

const StudioButton: FC<IStudioButton> = ({
  label,
  buttonType = "primary",
  ...rest
}) => {
  console.log("the rest", rest);
  return (
    <Button className={cx(buttonVariants({ buttonType }))}>{label}</Button>
  );
};

const studioButtonDefinition: ComponentDefinition = {
  id: "studio-button",
  name: "Branded Button",
  category: "Base",
  variables: {
    label: {
      type: "Text",
      defaultValue: "Click Me",
      displayName: "Button Label",
      group: "content",
      validations: { bindingSourceType: ["entry"], required: true },
    },
    buttonType: {
      type: "Text",
      defaultValue: "primary",
      displayName: "Button Style",
      group: "style",
      validations: {
        in: [
          { value: "primary", displayName: "Primary" },
          { value: "secondary", displayName: "Secondary" },
          { value: "tertiary", displayName: "Tertiary" },
          { value: "warning", displayName: "Warning" },
          { value: "success", displayName: "Success" },
          { value: "info", displayName: "Info" },
        ],
        required: true,
      },
    },
    link: {
      type: "Link",
      displayName: "Link",
      group: "content",
      validations: {
        bindingSourceType: ["entry"],
        required: true,
        // linkContentType: ["externalLink"],
      },
    },
  },
};

export const ButtonComponentRegistration = {
  component: StudioButton,
  definition: studioButtonDefinition,
};

"use client";
import { ComponentDefinition } from "@contentful/experiences-sdk-react";
import { cva, type VariantProps } from "class-variance-authority";
import { FC } from "react";

const headingVariants = cva("font-bold", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl lg:text-4xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl lg:text-2xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg lg:text-xl tracking-tight",
      h6: "scroll-m-20 text-base lg:text-lg tracking-tight",
    },
  },
  defaultVariants: {
    variant: "h2",
  },
});

type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IStudioHeading extends VariantProps<typeof headingVariants> {
  variant: HeadingLevels;
  content: string;
  className?: string;
}

const StudioHeading: FC<IStudioHeading> = ({
  variant = "h2",
  content,
  className,
}) => {
  const HeadingTag = variant;
  return (
    <HeadingTag className={headingVariants({ variant: variant, className })}>
      {content}
    </HeadingTag>
  );
};

const StudioHeadingDefinition: ComponentDefinition = {
  id: "studio-heading",
  name: "Branded Heading",
  category: "Base",
  variables: {
    variant: {
      type: "Text",
      defaultValue: "h2",
      displayName: "Heading Variant",
      group: "style",
      validations: {
        in: [
          { value: "h1", displayName: "Heading 1" },
          { value: "h2", displayName: "Heading 2" },
          { value: "h3", displayName: "Heading 3" },
          { value: "h4", displayName: "Heading 4" },
          { value: "h5", displayName: "Heading 5" },
          { value: "h6", displayName: "Heading 6" },
        ],
        required: true,
      },
    },

    content: {
      type: "Text",
      defaultValue: "Write heading here",
      displayName: "Content",
      group: "content",
      validations: { bindingSourceType: ["entry"], required: true },
    },
  },
};

export const HeadingComponentRegistration = {
  component: StudioHeading,
  definition: StudioHeadingDefinition,
};

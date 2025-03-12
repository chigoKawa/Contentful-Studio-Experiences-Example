import { ButtonComponentRegistration } from "@/studio-components/studio-button";
import {
  defineComponents,
  defineDesignTokens,
  defineBreakpoints,
} from "@contentful/experiences-sdk-react";
import { HeadingComponentRegistration } from "@/studio-components/studio-heading";

const runRegistration = () => {
  console.log("register now");
  const components = [
    ButtonComponentRegistration,
    HeadingComponentRegistration,
  ];

  defineComponents(components, {
    // enabledBuiltInComponents: []
  });

  defineBreakpoints([
    {
      id: "desktop",
      query: "*",
      displayName: "All Sizes",
      previewSize: "100%",
    },
    {
      id: "tablet",
      query: "<992px",
      displayName: "Tablet",
      previewSize: "820px",
    },
    {
      id: "mobile",
      query: "<576px",
      displayName: "Mobile",
      previewSize: "390px",
    },
  ]);

  defineDesignTokens({
    color: {
      Primary: "var(--color-primary-600)",
      Secondary: "var(--color-secondary-500)",
      Tertiary: "var(--color-tertiary-500)",
      Warning: "var(--color-warning-500)",
      Info: "var(--color-info-500)",
      Success: "var(--color-success-500)",
    },
  });
};

export const studioComponentAndTokenRegistration = () => {
  return runRegistration();
};

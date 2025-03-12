"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Hero1 } from "../hero-banner/hero-banner";

const Example = () => {
  return (
    <div className="w-full  shadow-md p-2 rounded-md flex flex-col gap-4">
      <Button>Click me</Button>
      <Hero1
        heading="Welcome to March"
        description="This is the thrid month of the year"
        image={{
          src: "https://images.ctfassets.net/drya7kvck7n6/5UQgyGZKAbVD9hoVmktDXg/e2711bebdf8548dc1bc55946b6665843/Collaboration",
          alt: "",
        }}
      />
      <Accordion type="single" collapsible className="w-[300px]x">
        <AccordionItem className="mt-1 overflow-hidden" value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It is animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Example;

"use client";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

const RenderContent = ({ content }: { content: string }) => {
  return (
    <Prose>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content),
        }}
      />
    </Prose>
  );
};

export default RenderContent;

import React from "react";
import { TagContainer } from "./style.ts";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <TagContainer>{children}</TagContainer>
);

export default Tag;

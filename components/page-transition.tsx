import { ViewTransition, type ReactNode } from "react";

const types = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  "page-fade": "page-fade",
  default: "page-fade",
};

/** Wraps each page so route changes animate via the native View Transitions API. */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter={types} exit={types} default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}

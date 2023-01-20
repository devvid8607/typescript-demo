import React from "react";

type TestOwnProps<E extends React.ElementType> = {
  size?: "md" | "lg" | "sm";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};
type TestProps<E extends React.ElementType> = TestOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TestOwnProps<E>>;
export const Test = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TestProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={"class-with-{$size}-{$color}"}>{children}</Component>
  );
};

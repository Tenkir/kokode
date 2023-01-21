import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type CustomText = {
  text: string;
}

export type ElementProps<BaseHTMLElement> = {
  attributes: DetailedHTMLProps<HTMLAttributes<BaseHTMLElement>, BaseHTMLElement>;
  children: ReactNode
}

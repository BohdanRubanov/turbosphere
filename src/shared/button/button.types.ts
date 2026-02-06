import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: "buy" | "cart" | "delete" | "count-red" | "count-green" | "count";
}
import { DetailedHTMLProps, HTMLAttributes } from "react";

const Copyright = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
) => <p {...props}>Copyright © {new Date().getFullYear()}</p>;

export default Copyright;

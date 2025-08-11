import * as React from "react";

type Props = React.SVGProps<SVGSVGElement>;

const StarSVG = ({ className, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={40}
    height={40}
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.65 8.933-2.165-4.624a.535.535 0 0 0-.97 0L9.35 8.933l-4.894.75a.538.538 0 0 0-.303.906l3.56 3.657-.835 5.129a.536.536 0 0 0 .788.557L12 17.53l4.334 2.402a.536.536 0 0 0 .788-.557l-.834-5.129 3.56-3.657a.538.538 0 0 0-.304-.907l-4.894-.75Z"
    />
  </svg>
);

export default StarSVG;

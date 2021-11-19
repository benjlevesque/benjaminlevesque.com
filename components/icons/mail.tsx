import * as React from "react";

export const MailIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 48 48" width="1em" height="1em" {...props}>
      <rect
        width={38}
        height={30}
        x={5}
        y={9}
        fill="#fff"
        fillRule="evenodd"
        stroke="#fff"
        strokeWidth={8}
        rx={4}
        ry={4}
      />
      <rect
        width={38}
        height={30}
        x={5}
        y={9}
        fillRule="evenodd"
        rx={4}
        ry={4}
      />
      <rect
        width={30}
        height={22}
        x={9}
        y={13}
        fill="#fff"
        fillRule="evenodd"
        rx={0}
        ry={0}
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M8 13l14 14h3l15-14"
      />
    </svg>
  );
});

export default MailIcon;

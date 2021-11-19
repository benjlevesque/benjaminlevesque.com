import * as React from "react";

export const MailIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 256 256" width="1em" height="1em" {...props}>
      <g>
        <path d="M214 222H42c-22 0-40-18-40-40V74c0-22 18-40 40-40h172c22 0 40 18 40 40v108c0 22-18 40-40 40zM42 45c-15 0-28 13-28 29v108c0 16 13 29 28 29h172c15 0 28-13 28-29V74c0-16-13-29-28-29H42z" />
        <path d="m33 75 91 88c5 6 14-3 8-9L42 66c-6-6-15 3-9 9z" />
        <path d="m132 163 91-88c6-6-3-15-9-9l-90 88c-6 6 3 15 8 9z" />
        <path d="m223 184-61-57c-5-6-14 3-8 8l60 58c6 5 14-4 9-9zm-181 9 61-58c6-5-3-14-9-8l-60 57c-6 5 3 14 8 9z" />
      </g>
    </svg>
  );
});

export default MailIcon;

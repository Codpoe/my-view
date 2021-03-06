import React from 'react';

export interface IconChevronsUpProps extends React.SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export const IconChevronsUp: React.SFC<IconChevronsUpProps> = (
  props: IconChevronsUpProps
): React.ReactElement => {
  const { color, size, style, ...restProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      className="feather feather-chevrons-up"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ verticalAlign: 'middle', ...style }}
      {...restProps}
    >
      <polyline points="17 11 12 6 7 11" />
      <polyline points="17 18 12 13 7 18" />
    </svg>
  );
};

IconChevronsUp.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default IconChevronsUp;

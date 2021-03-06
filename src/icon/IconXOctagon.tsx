import React from 'react';

export interface IconXOctagonProps extends React.SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export const IconXOctagon: React.SFC<IconXOctagonProps> = (
  props: IconXOctagonProps
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
      className="feather feather-x-octagon"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ verticalAlign: 'middle', ...style }}
      {...restProps}
    >
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
};

IconXOctagon.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default IconXOctagon;

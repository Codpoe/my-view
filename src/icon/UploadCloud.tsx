import React from 'react';

export interface UploadCloudProps extends React.SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

const UploadCloud: React.SFC<UploadCloudProps> = (
  props: UploadCloudProps
): React.ReactElement => {
  const { color, size, ...restProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      className="feather feather-upload-cloud"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...restProps}
    >
      <polyline points="16 16 12 12 8 16" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
      <polyline points="16 16 12 12 8 16" />
    </svg>
  );
};

UploadCloud.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default UploadCloud;
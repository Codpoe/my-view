import React from 'react';
import cx from 'classnames';
import Button, { ButtonProps } from '../button/index';
import bem from '../utils/bem';

const b = bem('rdf-tab-item');

type ButtonPropsForItem = Pick<
  ButtonProps,
  | 'loading'
  | 'href'
  | 'target'
  | 'menuItems'
  | 'menuTrigger'
  | 'menuPosition'
  | 'menuDisabled'
  | 'menuDelay'
  | 'onMenuClick'
>;

export interface ItemProps extends ButtonPropsForItem {
  [key: string]: any;
  label: React.ReactNode;
  indicator?: React.ReactNode;
  value: any;
  active?: boolean;
  stretch?: boolean;
  disabled?: boolean;
  onClick?: (item: ItemProps, ev: React.SyntheticEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}

const Item: React.FC<ItemProps> = props => {
  const {
    label,
    indicator,
    active,
    stretch,
    disabled,
    onClick,
    className,
    style,
    ...restProps
  } = props;
  const cls = cx(className, b(), {
    [b('', 'active')]: active,
    [b('', 'stretch')]: stretch,
  });

  const handleClick = (ev: React.SyntheticEvent) => {
    if (!onClick || disabled) {
      return;
    }
    onClick(props, ev);
  };

  return (
    <div className={cls} style={style}>
      <Button
        {...restProps}
        text
        size="large"
        type={active ? 'primary' : 'default'}
        block={stretch}
        disabled={disabled}
        onClick={handleClick}
      >
        {label}
      </Button>
      <div className={b('indicator')}>
        {typeof indicator === 'undefined' ? (
          <div className={b('indicator-line')} />
        ) : (
          indicator
        )}
      </div>
    </div>
  );
};

export default Item;

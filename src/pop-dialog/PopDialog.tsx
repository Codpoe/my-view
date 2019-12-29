import React from 'react';
import Pop, { PopProps } from '../pop/index';
import Button, { ButtonProps } from '../button/index';
import * as Icon from '../icon/index';
import bem from '../utils/bem';

const b = bem('rdf-pop-dialog');

type IconName = keyof typeof Icon;

export interface PopDialogProps extends PopProps {
  icon?: IconName;
  okType?: ButtonProps['type'];
  okText?: string;
  cancelText?: string;
  onOk?: React.EventHandler<React.SyntheticEvent>;
  onCancel?: React.EventHandler<React.SyntheticEvent>;
}

export interface PopDialogState {
  visible?: boolean;
}

export class PopDialog extends React.Component<PopDialogProps, PopDialogState> {
  static defaultProps: PopDialogProps = {
    trigger: 'click',
    position: 'top-center',
    withArrow: true,
    icon: 'IconAlertCircle',
    okType: 'primary',
    okText: '确定',
    cancelText: '取消',
  };

  state: PopDialogState = {
    visible: false,
  };

  handleVisibleChange = (visible: boolean) => {
    this.setState({ visible });
  };

  handleOk = (ev: React.SyntheticEvent) => {
    const { onOk } = this.props;

    this.setState({ visible: false });
    onOk && onOk(ev);
  };

  handleCancel = (ev: React.SyntheticEvent) => {
    const { onCancel } = this.props;
    this.setState({ visible: false });

    onCancel && onCancel(ev);
  };

  renderContent() {
    const { icon, content, okType, okText, cancelText } = this.props;
    const IconNode = Icon[icon as IconName];

    return (
      <>
        <div className={b('content-wrap')}>
          <IconNode className={b('icon')} />
          <div className={b('content')}>{content}</div>
          <div className={b('actions')}>
            <Button size="small" onClick={this.handleCancel}>
              {cancelText}
            </Button>
            <Button
              size="small"
              type={okType}
              className={b('ok')}
              onClick={this.handleOk}
            >
              {okText}
            </Button>
          </div>
        </div>
      </>
    );
  }

  render() {
    const { visible } = this.state;

    return (
      <Pop
        {...this.props}
        content={this.renderContent()}
        visible={visible}
        onChange={this.handleVisibleChange}
      >
        {this.props.children}
      </Pop>
    );
  }
}

export default PopDialog;

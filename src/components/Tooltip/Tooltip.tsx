import type { Placement } from '@floating-ui/core';
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import type { DeepPartial } from '../../';
import { useTheme } from '../../';
import type { FlowbiteFloatingTheme } from '../../components/Floating';
import { Floating } from '../../components/Floating';
import { mergeDeep } from '../../helpers/merge-deep';

export type FlowbiteTooltipTheme = FlowbiteFloatingTheme;

export interface TooltipProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'content' | 'style'>> {
  animation?: false | `duration-${number}`;
  arrow?: boolean;
  content: ReactNode;
  placement?: 'auto' | Placement;
  style?: 'dark' | 'light' | 'auto';
  theme?: DeepPartial<FlowbiteTooltipTheme>;
  trigger?: 'hover' | 'click';
  openState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  disabledTrigger?: boolean;
}

/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export const Tooltip: FC<TooltipProps> = ({
  animation = 'duration-300',
  arrow = true,
  children,
  className,
  content,
  placement = 'top',
  style = 'dark',
  theme: customTheme = {},
  trigger = 'hover',
    openState,
    disabledTrigger,
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.tooltip, customTheme);

  return (
    <Floating
      animation={animation}
      arrow={arrow}
      content={content}
      placement={placement}
      style={style}
      theme={theme}
      trigger={trigger}
      className={className}
      openState={openState}
      disabledTrigger={disabledTrigger}
      {...props}
    >
      {children}
    </Floating>
  );
};

Tooltip.displayName = 'Tooltip';

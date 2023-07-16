import type { Middleware, Placement } from '@floating-ui/react';
import { arrow, autoPlacement, flip, offset, shift } from '@floating-ui/react';
import type { RefObject } from 'react';

/**
 * @see https://floating-ui.com/docs/middleware
 */
export const getMiddleware = ({
  arrowRef,
  placement,
                                disabledPlacement
}: {
  arrowRef: RefObject<HTMLDivElement>;
  placement: 'auto' | Placement;
  disabledPlacement?: boolean;
}): Middleware[] => {
  const middleware = [];

  middleware.push(offset(8));
  if (!disabledPlacement ) {
    middleware.push(placement === 'auto' ? autoPlacement() : flip());
  }

  middleware.push(shift({ padding: 8 }));

  if (arrowRef.current) {
    middleware.push(arrow({ element: arrowRef.current }));
  }

  return middleware;
};

export const getPlacement = ({ placement }: { placement: 'auto' | Placement }): Placement | undefined => {
  return placement === 'auto' ? undefined : placement;
};

export const getArrowPlacement = ({ placement }: { placement: Placement }): Placement => {
  return {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[placement.split('-')[0]] as Placement;
};

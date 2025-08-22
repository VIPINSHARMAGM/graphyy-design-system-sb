import React from 'react';
import './Badge.css';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Badge contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Badge = ({
  backgroundColor = '#eee',
  label,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={'storybook-badge'}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </span>
  );
};

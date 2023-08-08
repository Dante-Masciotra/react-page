import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

export function ArrowUpIcon() {
  return <FontAwesomeIcon icon={faAngleUp} />;
}

export function ArrowDownIcon() {
  return <FontAwesomeIcon icon={faAngleDown} />;
}

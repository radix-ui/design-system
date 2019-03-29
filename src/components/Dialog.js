/* Libraries */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
/* Store */
import { DialogContext, Actions as DialogActions } from './DialogProvider';

const Dialog = ({
  children,
  trigger,
  dismissable,
  active: initiallyActive,
  ...panelProps,
}) => {
  const { dispatch } = useContext(DialogContext);
  const openDialog = () => dispatch({
    type: DialogActions.OPEN,
    dialog: { children, dismissable, panelProps },
  });

  if (initiallyActive) {
    openDialog();
  }

  return (
    <span onClick={openDialog}>{trigger}</span>
  )
};

Dialog.propTypes = {
  // Whether or not the dialog can be dismissed without manually calling the provided close() function
  dismissable: PropTypes.bool,
  // Whether or not the dialog is initially rendered as active
  active: PropTypes.bool,
  // The trigger to render that will open this dialog on click
  trigger: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired,
};

Dialog.defaultProps = {
  dismissable: true,
  active: false,
};

export default Dialog;

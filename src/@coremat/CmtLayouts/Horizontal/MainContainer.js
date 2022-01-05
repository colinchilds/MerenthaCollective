import React, { useContext } from 'react';
import clsx from 'clsx';
import useStyles from './MainContainer.style';
import LayoutContext from '../LayoutContext';

const MainContainer = ({ header, footer, sidebar, className, children }) => {
  const { drawerBreakPoint, showFooter, showHeader } = useContext(LayoutContext);

  const classes = useStyles({ drawerBreakPoint });

  return (
    <div className={clsx(classes.appRoot, className)}>
      <div className={classes.appInnerRoot}>
        <div className={classes.appMainContainer}>
          {sidebar}
          <div className={classes.appMain}>
            {showHeader && header}
            {children}
            {showFooter && footer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;

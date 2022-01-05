import React from 'react';
import useStyles from './CmtTimelineContent.style';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const CmtTimelineContent = ({ children, isWrapper }) => {
  const classes = useStyles();

  return isWrapper ? (
    <div className={clsx(classes.timelineCard, 'Cmt-timeline-root')}>
      <div className="Cmt-timeline-root-inner">{children}</div>
    </div>
  ) : (
    <div className="Cmt-timeline-root-inner">{children}</div>
  );
};

CmtTimelineContent.propTypes = {
  isWrapper: PropTypes.bool,
};

CmtTimelineContent.defaultProps = {
  isWrapper: false,
};

export default CmtTimelineContent;

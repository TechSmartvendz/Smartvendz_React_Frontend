import React from 'react';
//import PropTypes from 'prop-types';

const Progress = ({ percentage }) => {
  return (
    <div>
      <div style={{ width: `${percentage}%` }}  role='progressbar'>
        {percentage}%
      </div>
    </div>
  );
};

// Progress.propTypes = {
//   percentage: PropTypes.number.isRequired
// };

export default Progress;

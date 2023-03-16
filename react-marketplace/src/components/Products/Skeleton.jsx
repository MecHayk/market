import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={380}
      viewBox="0 0 300 380"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="30" y="18" rx="5" ry="5" width="184" height="173" />
      <rect x="0" y="237" rx="5" ry="5" width="244" height="59" />
      <rect x="0" y="213" rx="5" ry="5" width="35" height="16" />
      <rect x="49" y="213" rx="5" ry="5" width="34" height="16" />
      <rect x="0" y="322" rx="5" ry="5" width="122" height="38" />
      <circle cx="208" cy="344" r="25" />
    </ContentLoader>
  );
};

export default Skeleton;

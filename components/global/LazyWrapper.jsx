import React, { lazy, Suspense } from 'react';
import LazyLoader from './LazyLoader';

const LazyWrapper = ({ importFunc, fallback = <LazyLoader /> }) => {
  const LazyComponent = lazy(importFunc);
  
  return (
    <Suspense fallback={fallback}>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyWrapper;
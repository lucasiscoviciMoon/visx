import React from 'react';
import AnnotationReadme from '!!raw-loader!../../../../visx-annotation/Readme.md';
import LinePathAnnotation from '../../../../visx-annotation/src/deprecated/LinePathAnnotation';
import DocPage from '../../components/DocPage';

const components = [LinePathAnnotation];

export default () => (
  <DocPage components={components} readme={AnnotationReadme} visxPackage="annotation" />
);

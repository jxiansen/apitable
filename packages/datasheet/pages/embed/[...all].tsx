import { NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import { getRegResult, embedIdReg } from 'pc/hooks';
// @ts-ignore
import { IEmbedProps } from 'enterprise/embed/embed';

const DynamicComponentWithNoSSR = dynamic(
  () =>
    // @ts-ignore
    import('enterprise/embed/embed').then((components) => {
      return components.Embed;
    }),
  { ssr: false },
);

const App = (props: IEmbedProps) => {
  return DynamicComponentWithNoSSR && <DynamicComponentWithNoSSR {...props} />;
};

export const getServerSideProps = (context: NextPageContext) => {
  if (!context.req?.url) {
    return { props: {} };
  }

  const embedId = getRegResult(context.req.url, embedIdReg);

  if (!embedId) {
    return { props: {} };
  }

  return {
    props: {
      embedId,
    },
  };
};

export default App;

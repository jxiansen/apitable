

import axios from 'axios';
import { NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import { Api, IShareInfo } from '@apitable/core';
import { getRegResult, shareIdReg } from 'pc/hooks';
import { getBaseUrl } from '../../utils/get_base_url';

const DynamicComponentWithNoSSR = dynamic(() => import('../../src/pc/components/share/share'), { ssr: false });

const App = (props: { shareInfo: Required<IShareInfo> | undefined }) => {
  return (
    <>
      <DynamicComponentWithNoSSR {...props} />
    </>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  axios.defaults.baseURL = getBaseUrl(context);

  if (!context.req?.url) {
    return { props: {} };
  }

  const shareId = getRegResult(context.req.url, shareIdReg);

  if (!shareId) {
    return { props: {} };
  }

  const cookie = context.req?.headers.cookie;

  const headers: Record<string, string> = {};

  if (cookie) {
    headers.cookie = cookie;
  }

  const res = await Api.readShareInfo(shareId, headers);
  const { success, data } = res.data;

  if (success) {
    return {
      props: {
        shareInfo: data,
      },
    };
  }
  return {
    props: {},
  };
};

export default App;

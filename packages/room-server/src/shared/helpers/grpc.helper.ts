

import { generateRandomString } from '@apitable/core';
import { Metadata, MetadataValue } from '@grpc/grpc-js';
import { TRACE_ID } from 'shared/common';

export function initGlobalGrpcMetadata(extMeta?: { [key: string]: MetadataValue }) {
  const grpcMeta = new Metadata();
  // initialize trace id
  grpcMeta.set(TRACE_ID, generateRandomString());
  if (extMeta) {
    Object.entries(extMeta).forEach(([k, v]) => {
      grpcMeta.set(k, v);
    });
  }
  return grpcMeta;
}
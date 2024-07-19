

import { useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { ResourceType, Selectors } from '@apitable/core';
import { Network } from 'pc/components/network_status';

import { useAppSelector } from 'pc/store/react-redux';

export const useNetwork = (automatic = true, resourceId: string, resourceType: ResourceType) => {
  const [status, setStatus] = useState<Network>(Network.Online);
  const { templateId, nodeId } = useAppSelector((state) => state.pageParams);
  const { syncing, connected } = useAppSelector((state) => {
    const resourceNetwork = Selectors.getResourceNetworking(state, resourceId, resourceType);
    if (!resourceNetwork) {
      return {
        syncing: false,
        connected: false,
      };
    }
    return {
      syncing: resourceNetwork.syncing,
      connected: resourceNetwork.connected,
    };
  }, shallowEqual);
  const { reconnecting: IOConnecting } = useAppSelector((state) => state.space);

  useEffect(() => {
    window.parent.postMessage(
      {
        message: 'socketStatus',
        data: {
          roomId: nodeId,
          status: status,
        },
      },
      '*',
    );
  }, [status, nodeId]);

  useEffect(() => {
    if (!automatic) {
      return;
    }

    if (!connected) {
      setStatus(Network.Offline);
      return;
    }
    if (IOConnecting) {
      setStatus(Network.Loading);
      return;
    }
    if (syncing) {
      setStatus(Network.Sync);
      return;
    }
    setStatus(Network.Online);
  }, [syncing, connected, IOConnecting, automatic, templateId]);

  if (!automatic) {
    return {
      status,
      setStatus,
    };
  }
  return {
    status,
  };
};

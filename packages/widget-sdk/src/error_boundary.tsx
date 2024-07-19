

import React from 'react';
import { Player, Events } from 'core';

type Props = { id: string, datasheetId?: string, logError: boolean };

// TODO: Access to sentry
export class ErrorBoundary extends React.Component<Props, { hasError: boolean }> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // update state so that the next rendering shows the degraded UI
    return { hasError: true };
  }

  override componentDidCatch(error: any, errorInfo: any) {
    if (!this.props.logError) {
      return;
    }

    // TODO: how does the third-party iframe widget work
    Player.doTrigger(Events.app_error_logger, {
      error,
      metaData: {
        errorInfo,
        props: this.props,
      },
    });
  }

  override render() {
    if (this.state.hasError) {
      // TODO: widget i18n solution, should not introduce strings in the apitable/core
      return <h1>An unknown error has occurred, please refresh and retry</h1>; //Something went wrong.
    }

    // @ts-ignore
    return this.props.children;
  }
}

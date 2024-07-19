/*
 * The fallback page displayed when the React global crashes
 */
import * as React from 'react';
import { useEffect } from 'react';
import { Button, colorVars, LinkButton, Typography } from '@apitable/components';
import { Strings, t } from '@apitable/core';
import { useAppSelector } from 'pc/store/react-redux';

const ErrorPage = () => {
  useEffect(() => {
    window.parent.postMessage(
      {
        message: 'pageCrash',
      },
      '*',
    );
  }, []);
  const { embedId } = useAppSelector((state) => state.pageParams);

  const handleClick = () => {
    window.location.href = '/workbench';
  };

  const handleContactUs = () => {
    // navigationToUrl(getEnvVariables().CRASH_PAGE_CONTACT_US_URL);
  };

  const handleFeedback = () => {
    // navigationToUrl(getEnvVariables().CRASH_PAGE_REPORT_ISSUES_URL);
  };

  return (
    <div className={'errorPage'}>
      <div className={'errorText'}>
        {t(Strings.error_boundary_crashed)}
        <span role="img" aria-label="sick">
          🤒
        </span>
      </div>
      {!embedId && (
        <Button color="primary" onClick={handleClick}>
          {t(Strings.error_boundary_back)}
        </Button>
      )}
      <LinkButton underline={false} onClick={handleContactUs}>
        <Typography className={'contactUs'} variant="body2" color={colorVars.fc0}>
          {t(Strings.contact_us)}
        </Typography>
      </LinkButton>
      <LinkButton className={'errorFeedback'} underline color={colorVars.fc3} onClick={handleFeedback}>
        <Typography variant="body2" color={colorVars.fc3}>
          {t(Strings.error_page_feedback_text)}
        </Typography>
      </LinkButton>
    </div>
  );
};

export default ErrorPage;

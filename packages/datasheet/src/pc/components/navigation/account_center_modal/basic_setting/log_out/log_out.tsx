import { FC } from 'react';
import * as React from 'react';
import { StepStatus } from './enum';
import { Step } from './step';
import { IUserData, StepContext } from './step_context';
interface ILogoutProps {
  userData: IUserData;
  step: StepStatus;
  setStep: React.Dispatch<React.SetStateAction<StepStatus>>;
}

export const Logout: FC<React.PropsWithChildren<ILogoutProps>> = (props) => {
  const { userData, setStep, step } = props;

  return (
    <StepContext.Provider
      value={{
        userData,
        step,
        setStep,
      }}
    >
      <Step />
    </StepContext.Provider>
  );
};

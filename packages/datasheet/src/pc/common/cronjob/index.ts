import { fixData } from './jobs';

type IJob = [(store: any) => void, number];

const jobs: IJob[] = [
  [fixData, 300],
  // [uploadError, 10000],  FIXME: Cancel the reporting of Missing RecordData.
];

export const initCronjobs = (store: any) => {
  jobs.forEach((jobItem: IJob) => {
    const [job, delay] = jobItem;
    setInterval(() => job(store), delay);
  });
};

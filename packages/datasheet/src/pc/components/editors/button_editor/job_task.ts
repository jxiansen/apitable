

import { useMount } from 'ahooks';
import constate from 'constate';
import dayjs from 'dayjs';
import produce from 'immer';
import { useSetAtom } from 'jotai';
import { nanoid } from 'nanoid';
import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { automationTaskMap } from 'pc/components/editors/button_editor/automation_task_map';

type Job = {
  jobId: string;
  task: () => Promise<{ success: boolean }>;
};
export const useButtonJobTask = () => {
  const [taskQueue, setTaskQueue] = useState<Job[]>([]);
  const [tick, setTick] = useState(nanoid());

  const setAutomationTaskMap = useSetAtom(automationTaskMap);
  const runningRef: MutableRefObject<boolean> = useRef(false);

  const refreshTick = useCallback(() => {
    setTick(nanoid());
  }, []);

  useMount(() => {
    setAutomationTaskMap(new Map());
  });

  const processTaskQueue = useCallback(() => {
    if (runningRef.current) {
      return;
    }

    if (taskQueue.length > 0) {
      const { jobId, task } = taskQueue[0];
      runningRef.current = true;
      const start = new Date();
      task()
        .then((resp) => {
          setTaskQueue((prevQueue) => prevQueue.slice(1));
          const current = new Date();
          const timeCost = dayjs(current).diff(dayjs(start), 'second');
          if (timeCost > 3) {
            setAutomationTaskMap((d) =>
              produce(d, (draft) => {
                if (resp.success) {
                  draft.set(jobId, 'success');
                } else {
                  draft.set(jobId, 'initial');
                }
              }),
            );
          } else {
            const delta = (3 - timeCost) * 800;
            setTimeout(() => {
              setAutomationTaskMap((d) =>
                produce(d, (draft) => {
                  if (resp.success) {
                    draft.set(jobId, 'success');
                  } else {
                    draft.set(jobId, 'initial');
                  }
                }),
              );
            }, delta);
          }
          runningRef.current = false;
          if (resp.success) {
            setTimeout(() => {
              setAutomationTaskMap((d) =>
                produce(d, (draft) => {
                  draft.set(jobId, 'initial');
                }),
              );
            }, 3000);
          }
          refreshTick();
        })
        .catch(() => {
          setTaskQueue((prevQueue) => prevQueue.slice(1));
          setAutomationTaskMap((d) =>
            produce(d, (draft) => {
              draft.set(jobId, 'initial');
            }),
          );
          runningRef.current = false;
          refreshTick();
        });
    }
  }, [setAutomationTaskMap, taskQueue, refreshTick]);

  const handleTaskStart = useCallback(
    (recordId: string, fieldId: string, task: () => Promise<{ success: boolean }>) => {
      const key = `${recordId}-${fieldId}`;

      setAutomationTaskMap((d) =>
        produce(d, (draft) => {
          draft.set(key, 'running');
        }),
      );

      if (taskQueue.find((item) => item.jobId === key)) {
        return;
      }

      setTaskQueue((prevQueue) => [...prevQueue, { jobId: key, task }]);
      refreshTick();
    },
    [setAutomationTaskMap, refreshTick, taskQueue],
  );

  useEffect(() => {
    if (!runningRef.current) {
      processTaskQueue();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick]);

  return {
    handleTaskStart,
    processTaskQueue,
  };
};

const [JobTaskProvider, useJobTaskContext] = constate(useButtonJobTask);
export { JobTaskProvider, useJobTaskContext };

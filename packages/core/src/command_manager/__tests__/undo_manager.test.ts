import { CollaCommandName } from 'commands/enum';
import { ExecuteResult, ExecuteType } from 'command_manager/types';
import { ResourceType } from 'types';
import { UndoManager } from '../undo_manager';

describe('add undo stack', () => {
  let undoManager: UndoManager;

  beforeEach(() => {
    undoManager = new UndoManager('dst1');
  });

  describe('add execution cmd', () => {
    it('should add to undo stack', () => {
      undoManager.addUndoStack(
        {
          cmd: CollaCommandName.DeleteRecords,
          result: {
            resourceId: 'dst1',
            resourceType: ResourceType.Datasheet,
            result: ExecuteResult.Success,
            actions: [],
          },
        },
        ExecuteType.Execute
      );

      expect(undoManager.getStockLength('undo')).toBe(1);
    });
  });

  describe('add redo cmd', () => {});

  it('should delete old elements if undo stack size exceeds limit', () => {});
});

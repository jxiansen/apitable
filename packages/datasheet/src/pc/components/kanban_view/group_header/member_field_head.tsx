import classNames from 'classnames';
import { useRef } from 'react';
import * as React from 'react';
import { Strings, t, Selectors } from '@apitable/core';
import { Message } from 'pc/components/common';
import { MemberOptionList } from 'pc/components/list';
import { CellMember } from 'pc/components/multi_grid/cell/cell_member';
import { useAppSelector } from 'pc/store/react-redux';
import { stopPropagation } from 'pc/utils';
import { IHeadMemberProps } from './interface';
import styles from './styles.module.less';

export const MemberFieldHead: React.FC<React.PropsWithChildren<IHeadMemberProps>> = (props) => {
  const { cellValue, field, editing, setEditing, onCommand, readOnly, isNewBoard } = props;
  const divRef = useRef(null);
  const { datasheetId, linkId, unitMap } = useAppSelector((state) => ({
    datasheetId: Selectors.getActiveDatasheetId(state)!,
    linkId: Selectors.getLinkId(state),
    unitMap: Selectors.getUnitMap(state),
  }));

  function commandSelectFn(unitIds: string[]) {
    if (field.property.unitIds.includes(unitIds[0])) {
      Message.warning({
        content: t(Strings.kanban_exit_member_group),
      });
      return;
    }
    onCommand(unitIds);
  }

  function onDoubleClick() {
    if (editing || readOnly) {
      return;
    }
    setEditing(true);
  }

  const style: React.CSSProperties = editing ? { width: isNewBoard ? '80%' : '100%' } : {};

  // The setEditing operation is not done here because it is a compromise for the member column to go beyond the ellipses and
  // to fit the width of the statistics on the right,
  // so setEditing(false) needs to be implemented in the upper level
  return (
    <>
      <div onClick={onDoubleClick} ref={divRef} style={{ position: 'relative', overflow: 'hidden', ...style }}>
        {editing && (
          <div className={styles.memberEdit} onMouseDown={stopPropagation}>
            <CellMember field={field} cellValue={cellValue} className={classNames(styles.memberHeader, styles.whiteBg)} />
          </div>
        )}

        {!editing && <CellMember field={field} cellValue={cellValue} className={styles.memberHeader} />}
      </div>
      {editing && (
        <MemberOptionList
          sourceId={datasheetId}
          linkId={linkId}
          unitMap={unitMap}
          onClickItem={commandSelectFn}
          uniqId={'unitId'}
          showInviteTip={false}
          showMoreTipButton
          showSearchInput
          existValues={cellValue}
          multiMode={false}
          className={classNames(styles.memberList, styles.editing, {
            [styles.newBoard]: isNewBoard,
          })}
        />
      )}
    </>
  );
};

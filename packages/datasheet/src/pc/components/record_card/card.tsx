import * as React from 'react';
import { useThemeColors } from '@apitable/components';
import { IViewColumn, Selectors } from '@apitable/core';
import { useAppSelector } from 'pc/store/react-redux';
import { CardBody } from './card_body';
import { CardHeader } from './card_header';

//  Common card component for Gallery and Kanban views
interface IRecordCardProps {
  recordId: string;
  isCoverFit: boolean;
  isColNameVisible?: boolean;
  cardWidth: number;
  coverHeight: number;
  showEmptyCover: boolean;
  // Whether to display the value of the empty field, the album card to display equal height blank placeholder, Kanban card does not display
  showEmptyField: boolean;
  multiTextMaxLine: number;
  datasheetId?: string;
  coverFieldId?: string;
  // Kanban view shows only one cover image
  showOneImage?: boolean;
  className?: string;
  visibleFields?: IViewColumn[];
  bodyClassName?: string;
  // Whether it is a virtual kanban
  isVirtual?: boolean;
  isGallery?: boolean;
}

const RecordCardBase: React.FC<React.PropsWithChildren<IRecordCardProps>> = (props) => {
  const {
    recordId,
    cardWidth,
    coverHeight = 0,
    showEmptyField = true,
    isCoverFit,
    isColNameVisible,
    coverFieldId,
    multiTextMaxLine = 6,
    showEmptyCover = true,
    showOneImage = false,
    className = '',
    bodyClassName = '',
    isVirtual = false,
    isGallery = false,
    datasheetId,
  } = props;
  const colors = useThemeColors();
  const visibleFields = useAppSelector(Selectors.getVisibleColumns);
  const searchRecordId = useAppSelector(Selectors.getCurrentSearchRecordId);
  let isCurrentSearchItem = false;
  if (searchRecordId) {
    isCurrentSearchItem = searchRecordId === recordId;
  }
  const currentSearchItemStyle = isCurrentSearchItem
    ? {
        border: `1px solid ${colors.borderWarnDefault}`,
        background: 'linear-gradient(0deg, var(--bgWarnLightDefault) 0%, var(--bgWarnLightDefault) 100%), var(--bgCommonDefault)',
      }
    : {
        background: colors.defaultBg,
      };

  if (!datasheetId) {
    return null;
  }

  return (
    <div
      style={{
        width: cardWidth,
        ...currentSearchItemStyle,
        borderRadius: 4,
        overflow: 'hidden',
      }}
      className={className}
    >
      <CardHeader
        datasheetId={datasheetId}
        showOneImage={showOneImage}
        showEmptyCover={showEmptyCover}
        recordId={recordId}
        height={coverHeight}
        width={cardWidth}
        isCoverFit={isCoverFit}
        coverFieldId={coverFieldId}
      />
      <CardBody
        datasheetId={datasheetId}
        recordId={recordId}
        visibleFields={props.visibleFields || visibleFields}
        showEmptyField={showEmptyField}
        isColNameVisible={isColNameVisible}
        multiTextMaxLine={multiTextMaxLine}
        className={bodyClassName}
        isVirtual={isVirtual}
        isGallery={isGallery}
      />
    </div>
  );
};

export const RecordCard = React.memo(RecordCardBase);

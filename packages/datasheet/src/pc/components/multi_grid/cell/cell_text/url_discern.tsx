import classNames from 'classnames';
import { FieldType, ISegment, string2Segment, SegmentType } from '@apitable/core';
import { useEnhanceTextClick } from 'pc/components/multi_grid/cell/hooks/use_enhance_text_click';
import { stopPropagation } from 'pc/utils';
import styles from './style.module.less';

interface IUrlDiscernProp {
  value?: string | null;
}
/**
 *
 * @param props
 * string
 * @returns
 * Splitting strings to add clickable functionality to URLs
 */
export const UrlDiscern: React.FC<React.PropsWithChildren<IUrlDiscernProp>> = (props) => {
  const { value = '' } = props;
  const getValidValue = (originValue: string | null) => {
    if (originValue) {
      let segment: ISegment[] = [];
      segment = string2Segment(originValue);
      return originValue.length ? segment : null;
    }
    return null;
  };

  // Verify URL legitimacy when clicking on links
  const _handleEnhanceTextClick = useEnhanceTextClick();
  const handleURLClick = (e: React.MouseEvent, type: SegmentType | FieldType, text: string) => {
    stopPropagation(e);
    _handleEnhanceTextClick(type, text);
  };

  return (
    <>
      {getValidValue(value)?.map((segment, index) => {
        switch (segment.type) {
          case SegmentType.Url:
            return (
              <span
                className={classNames(styles.activeUrl)}
                style={{ textDecoration: 'underline', cursor: 'pointer' }}
                key={`${segment.link}-${index}`}
                onClick={(e) => handleURLClick(e, segment.type, segment.text)}
              >
                {segment.text}
              </span>
            );
          default:
            return <span key={`${segment.text}-${index}`}>{segment.text}</span>;
        }
      })}
    </>
  );
};

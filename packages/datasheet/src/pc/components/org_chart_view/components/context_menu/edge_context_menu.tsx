import { FC, useContext } from 'react';
import { ContextMenu, useThemeColors } from '@apitable/components';
import { CollaCommandName, t, Strings } from '@apitable/core';
import { DeleteOutlined } from '@apitable/icons';
import { useStoreState } from '@apitable/react-flow';
import { resourceService } from 'pc/resource_service';
import { flatContextData } from 'pc/utils';
import { ORG_EDGE_MENU } from '../../constants';
import { FlowContext } from '../../context/flow_context';
import { INode } from '../../interfaces';

export const EdgeContextMenu: FC<React.PropsWithChildren<unknown>> = () => {
  const colors = useThemeColors();
  const { linkField, datasheetId } = useContext(FlowContext);

  const nodes = useStoreState((state) => state.nodes);

  const linkFieldId = linkField.id;
  return (
    <ContextMenu
      menuId={ORG_EDGE_MENU}
      overlay={flatContextData(
        [
          [
            {
              icon: <DeleteOutlined color={colors.thirdLevelText} />,
              text: t(Strings.org_chart_del_link_relationship),
              onClick: ({ props: { edge } }: any) => {
                const { source, target } = edge;
                const sourceNode = nodes.find((item) => item.id === source);
                if (sourceNode) {
                  const { data, id } = sourceNode as INode;
                  resourceService.instance!.commandManager.execute({
                    cmd: CollaCommandName.SetRecords,
                    datasheetId,
                    data: [
                      {
                        recordId: id,
                        fieldId: linkFieldId,
                        value: data.linkIds.filter((item) => item !== target),
                      },
                    ],
                  });
                }
              },
            },
          ],
        ],
        true,
      )}
    />
  );
};

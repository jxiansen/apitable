

package com.apitable.shared.component.notification;

import com.apitable.player.vo.PlayerBaseVo;
import com.apitable.space.dto.BaseSpaceInfoDTO;
import com.apitable.workspace.dto.NodeBaseInfoDTO;
import java.io.Serializable;
import java.util.Map;
import lombok.Data;

/**
 * <p>
 * notification render map.
 * </p>
 *
 * @author zoe zheng
 */
@Data
public class NotificationRenderMap implements Serializable {

    private static final long serialVersionUID = -5568099978608315908L;

    private Map<Long, PlayerBaseVo> members;

    private Map<String, NodeBaseInfoDTO> nodes;

    private Map<String, BaseSpaceInfoDTO> spaces;

    private Map<String, Long> fromUser;
}

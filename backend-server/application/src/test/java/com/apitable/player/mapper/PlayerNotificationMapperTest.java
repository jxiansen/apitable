

package com.apitable.player.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import com.apitable.AbstractMyBatisMapperTest;
import com.apitable.player.dto.NotificationModelDTO;
import com.apitable.player.ro.NotificationPageRo;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;

/**
 * <p>
 * Player Notification Mapper Test
 * </p>
 */
public class PlayerNotificationMapperTest extends AbstractMyBatisMapperTest {

    @Autowired
    PlayerNotificationMapper playerNotificationMapper;

    @Test
    @Sql("/sql/player-notification-data.sql")
    void testSelectPlayerNotificationPage() {
        NotificationPageRo notificationPageRo = new NotificationPageRo();
        notificationPageRo.setIsRead(true);
        notificationPageRo.setNotifyType("member");
        notificationPageRo.setRowNo(1);
        List<NotificationModelDTO> entities =
            playerNotificationMapper.selectPlayerNotificationPage(notificationPageRo, 41L, 1);
        assertThat(entities).isNotEmpty();
    }

    @Test
    @Sql("/sql/player-notification-data.sql")
    void testSelectCountByUserIdAndIsRead() {
        Integer count = playerNotificationMapper.selectCountByUserIdAndIsRead(41L, 1);
        assertThat(count).isEqualTo(2);
    }

    @Test
    @Sql("/sql/player-notification-data.sql")
    void testSelectTotalCountByUserIds() {
        Integer count = playerNotificationMapper.selectTotalCountByUserId(41L);
        assertThat(count).isEqualTo(2);
    }

    @Test
    @Sql("/sql/player-notification-data.sql")
    void testSelectNotifyBodyById() {
        String body = playerNotificationMapper.selectNotifyBodyById(41L);
        assertThat(body).isEqualTo("{\"key\": \"value\"}");
    }

    @Test
    @Sql("/sql/player-notification-data.sql")
    void testSelectTotalCountByRoAndToUser() {
        NotificationPageRo notificationPageRo = new NotificationPageRo();
        notificationPageRo.setIsRead(true);
        notificationPageRo.setNotifyType("member");
        Integer count =
            playerNotificationMapper.selectTotalCountByRoAndToUser(notificationPageRo, 41L);
        assertThat(count).isEqualTo(2);
    }

    @Test
    @Sql("/sql/player-notification-data.sql")
    void testSelectDtoByTypeAndIsRead() {
        List<NotificationModelDTO> entities =
            playerNotificationMapper.selectDtoByTypeAndIsRead(41L, true);
        assertThat(entities).isNotEmpty();
    }

}

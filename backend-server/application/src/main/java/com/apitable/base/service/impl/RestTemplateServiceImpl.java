

package com.apitable.base.service.impl;

import static com.apitable.core.constants.ResponseExceptionConstants.DEFAULT_SUCCESS_CODE;

import cn.hutool.json.JSONUtil;
import com.apitable.base.service.RestTemplateService;
import com.apitable.core.exception.BusinessException;
import com.apitable.shared.config.properties.SocketProperties;
import com.apitable.workspace.ro.FieldPermissionChangeNotifyRo;
import com.apitable.workspace.ro.NodeShareDisableNotifyRo;
import jakarta.annotation.Resource;
import java.util.Collections;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

/**
 * RestTemplate service implementation class.
 */
@Slf4j
@Service
public class RestTemplateServiceImpl implements RestTemplateService {

    @Resource
    private RestClient restClient;

    @Resource
    private SocketProperties socketProperties;

    @Override
    public void disableNodeShareNotify(List<NodeShareDisableNotifyRo> message) {
        log.info("Close node sharing notification");
        HttpHeaders headers = new HttpHeaders();
        headers.put("token", Collections.singletonList(socketProperties.getToken()));
        String url = socketProperties.getDomain() + socketProperties.getDisableNodeShareNotify();
        String result = restClient.post()
            .uri(url)
            .headers(header -> header.addAll(headers))
            .body(message)
            .retrieve()
            .body(String.class);
        Integer code = JSONUtil.parseObj(result).getInt("code");
        if (!code.equals(DEFAULT_SUCCESS_CODE)) {
            throw new BusinessException("Failed to close the node share notification call！Msg: "
                + JSONUtil.parseObj(result).getStr("message"));
        }
    }

    @Override
    public void fieldPermissionChangeNotify(FieldPermissionChangeNotifyRo message) {
        log.info("Field permission change notification");
        HttpHeaders headers = new HttpHeaders();
        headers.put("token", Collections.singletonList(socketProperties.getToken()));
        String url =
            socketProperties.getDomain() + socketProperties.getFieldPermissionChangeNotify();
        String result = restClient.post()
            .uri(url)
            .headers(header -> header.addAll(headers))
            .body(message)
            .retrieve()
            .body(String.class);
        Integer code = JSONUtil.parseObj(result).getInt("code");
        if (!code.equals(DEFAULT_SUCCESS_CODE)) {
            throw new BusinessException("Field permission change notification call failed！Msg: "
                + JSONUtil.parseObj(result).getStr("message"));
        }
    }
}

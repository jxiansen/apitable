

package com.apitable.shared.grpc;

import com.apitable.core.exception.BusinessException;
import com.apitable.integration.grpc.BasicResult;
import com.apitable.integration.grpc.DocumentAssetStatisticResult;
import com.apitable.integration.grpc.DocumentAssetStatisticRo;
import com.apitable.integration.grpc.NodeCopyRo;
import com.apitable.integration.grpc.NodeDeleteRo;
import com.apitable.integration.grpc.RoomServingServiceGrpc.RoomServingServiceBlockingStub;
import com.apitable.workspace.enums.NodeException;
import io.grpc.Status;
import io.grpc.StatusRuntimeException;
import lombok.extern.slf4j.Slf4j;
import net.devh.boot.grpc.client.inject.GrpcClient;
import org.springframework.stereotype.Service;

/**
 * nest grpc client.
 */
@Service
@Slf4j
public class GrpcClientServiceImpl implements IGrpcClientService {
    private static final Integer ERROR_CODE = 500;

    @GrpcClient("nest-grpc-server")
    private RoomServingServiceBlockingStub simpleStub;

    @Override
    public BasicResult nodeCopyChangeset(NodeCopyRo ro) {
        try {
            return simpleStub.copyNodeEffectOt(ro);
        } catch (StatusRuntimeException e) {
            log.error("Copy node error", e);
            return BasicResult.newBuilder().setCode(ERROR_CODE).setSuccess(false)
                .setMessage(e.getMessage()).build();
        }
    }

    @Override
    public BasicResult nodeDeleteChangeset(NodeDeleteRo ro) {
        try {
            return simpleStub.deleteNodeEffectOt(ro);
        } catch (StatusRuntimeException e) {
            log.warn("Delete node error: {}:{}", ro.getDeleteNodeIdList(), ro.getLinkNodeIdList(),
                e);
            // network reasons prompt the user to retry
            if (e.getStatus().equals(Status.UNAVAILABLE)) {
                throw new BusinessException(NodeException.DELETE_NODE_LINK__FIELD_ERROR);
            }
            return BasicResult.newBuilder().setCode(ERROR_CODE).setSuccess(false)
                .setMessage(e.getMessage()).build();
        }
    }

    @Override
    public DocumentAssetStatisticResult documentAssetStatistic(DocumentAssetStatisticRo ro) {
        return simpleStub.documentAssetStatistic(ro);
    }
}

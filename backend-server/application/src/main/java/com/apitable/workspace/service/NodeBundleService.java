

package com.apitable.workspace.service;

import org.springframework.web.multipart.MultipartFile;

/**
 * node bundle service.
 */
public interface NodeBundleService {

    /**
     * create node bundle.
     *
     * @param nodeId   node id
     * @param saveData whether to save data
     * @param password file parsing password
     */
    void generate(String nodeId, boolean saveData, String password);

    /**
     * analyze node bundle.
     *
     * @param file      file
     * @param password  password
     * @param parentId  parentId
     * @param preNodeId preNodeId
     * @param userId    user id
     * @param unitId    unitId
     */
    void analyze(MultipartFile file, String password, String parentId, String preNodeId,
                 Long userId, Long unitId);
}

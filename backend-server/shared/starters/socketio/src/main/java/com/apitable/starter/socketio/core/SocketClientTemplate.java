

package com.apitable.starter.socketio.core;

import cn.hutool.json.JSON;
import io.socket.client.Ack;
import io.socket.client.Socket;
import java.util.Objects;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * <p>
 * Socket Client Auto Configuration.
 * </p>
 */
public class SocketClientTemplate implements SocketClientOperations {

    private static final Logger LOGGER = LoggerFactory.getLogger(SocketClientTemplate.class);

    private final Socket socket;

    public SocketClientTemplate(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void emit(String event, JSON message) {
        // When js receives a long, it will be converted to a string, losing precision
        if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("Socket Event: {}, Message: {}", event, message);
        }
        Socket socketInstance = getSocket();
        if (socketInstance == null) {
            LOGGER.error("Socket not initialized");
            return;
        }
        socketInstance.emit(event, message, (Ack) args -> {
            if (Objects.nonNull(args)) {
                if (!Boolean.parseBoolean(args[0].toString())) {
                    LOGGER.error("Socket Emit Fail: {}", message);
                }
            }
        });
    }

    private Socket getSocket() {
        if (socket == null) {
            return null;
        }
        if (!socket.connected()) {
            socket.connect();
        }
        return socket;
    }
}



package com.apitable.mock.bean;

public class MockUserSpace {

    Long userId;

    String spaceId;

    Long memberId;

    public MockUserSpace(Long userId, String spaceId, Long memberId) {
        this.userId = userId;
        this.spaceId = spaceId;
        this.memberId = memberId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getSpaceId() {
        return spaceId;
    }

    public void setSpaceId(String spaceId) {
        this.spaceId = spaceId;
    }

    public Long getMemberId() {
        return memberId;
    }

    public void setMemberId(Long memberId) {
        this.memberId = memberId;
    }
}

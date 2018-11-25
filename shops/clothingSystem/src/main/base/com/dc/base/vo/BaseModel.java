package com.dc.base.vo;

import com.wordnik.swagger.annotations.ApiModelProperty;
import com.wordnik.swagger.annotations.ApiOperation;

import java.util.List;

public class BaseModel {
    @ApiModelProperty(value = "响应状态码")
    private Integer resultCode;
    @ApiModelProperty(value = "响应消息")
    private String message;
    @ApiModelProperty(value = "响应数据")
    private Object data;

    public Integer getResultCode() {
        return resultCode;
    }

    public void setResultCode(Integer resultCode) {
        this.resultCode = resultCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("BaseModel{");
        sb.append("resultCode=").append(resultCode);
        sb.append(", message='").append(message).append('\'');
        sb.append(", data=").append(data);
        sb.append('}');
        return sb.toString();
    }
}

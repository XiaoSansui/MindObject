package com.dc.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.wordnik.swagger.annotations.ApiModelProperty;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class OrderPending {
    @ApiModelProperty(value = "商家号")
    private String merchant_id;
    @ApiModelProperty(value = "订单号")
    private String order_id;
    @ApiModelProperty(value = "收银员姓名")
    private String user_name;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")//返回页面值的时候
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")//页面传值给后台的时候
    @ApiModelProperty(value = "保存订单的时间")
    private Date pend_time;
    @ApiModelProperty(value = "支付")
    private int is_pending;

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("OrderPending{");
        sb.append("merchant_id='").append(merchant_id).append('\'');
        sb.append(", order_id='").append(order_id).append('\'');
        sb.append(", user_name='").append(user_name).append('\'');
        sb.append(", pend_time=").append(pend_time);
        sb.append(", is_pending=").append(is_pending);
        sb.append('}');
        return sb.toString();
    }

    public String getMerchant_id() {
        return merchant_id;
    }

    public void setMerchant_id(String merchant_id) {
        this.merchant_id = merchant_id;
    }

    public String getOrder_id() {
        return order_id;
    }

    public void setOrder_id(String order_id) {
        this.order_id = order_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public Date getPend_time() {
        return pend_time;
    }

    public void setPend_time(Date pend_time) {
        this.pend_time = pend_time;
    }

    public int getIs_pending() {
        return is_pending;
    }

    public void setIs_pending(int is_pending) {
        this.is_pending = is_pending;
    }
}

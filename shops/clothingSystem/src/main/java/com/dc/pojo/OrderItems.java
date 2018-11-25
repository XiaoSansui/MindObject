package com.dc.pojo;

import com.wordnik.swagger.annotations.ApiModelProperty;

public class OrderItems {
    @ApiModelProperty(value = "商家号")
    private String merchant_id;
    @ApiModelProperty(value = "订单号")
    private String order_id;
    @ApiModelProperty(value = "商品单号")
    private String items_id;
    @ApiModelProperty(value = "商品类型")
    private String items_type;
    @ApiModelProperty(value = "品牌名称")
    private String brand_name;
    @ApiModelProperty(value = "品牌型号")
    private String brand_type;
    @ApiModelProperty(value = "商品颜色")
    private String items_color;
    @ApiModelProperty(value = "商品大小")
    private String items_size;
    @ApiModelProperty(value = "商品价格")
    private double items_money;
    @ApiModelProperty(value = "是否折扣")
    private int is_discount;
    @ApiModelProperty(value = "折扣金额")
    private double discount_money;
    @ApiModelProperty(value = "商品售价")
    private double items_price;
    @ApiModelProperty(value = "购买数量")
    private int buy_number;
    @ApiModelProperty(value = "是否退单")
    private int is_single;

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("OrderItems{");
        sb.append("merchant_id='").append(merchant_id).append('\'');
        sb.append(", order_id='").append(order_id).append('\'');
        sb.append(", items_id='").append(items_id).append('\'');
        sb.append(", items_type='").append(items_type).append('\'');
        sb.append(", brand_name='").append(brand_name).append('\'');
        sb.append(", brand_type='").append(brand_type).append('\'');
        sb.append(", items_color='").append(items_color).append('\'');
        sb.append(", items_size='").append(items_size).append('\'');
        sb.append(", items_money=").append(items_money);
        sb.append(", is_discount=").append(is_discount);
        sb.append(", discount_money=").append(discount_money);
        sb.append(", items_price=").append(items_price);
        sb.append(", buy_number=").append(buy_number);
        sb.append(", is_single=").append(is_single);
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

    public String getItems_id() {
        return items_id;
    }

    public void setItems_id(String items_id) {
        this.items_id = items_id;
    }

    public String getItems_type() {
        return items_type;
    }

    public void setItems_type(String items_type) {
        this.items_type = items_type;
    }

    public String getBrand_name() {
        return brand_name;
    }

    public void setBrand_name(String brand_name) {
        this.brand_name = brand_name;
    }

    public String getBrand_type() {
        return brand_type;
    }

    public void setBrand_type(String brand_type) {
        this.brand_type = brand_type;
    }

    public String getItems_color() {
        return items_color;
    }

    public void setItems_color(String items_color) {
        this.items_color = items_color;
    }

    public String getItems_size() {
        return items_size;
    }

    public void setItems_size(String items_size) {
        this.items_size = items_size;
    }

    public double getItems_money() {
        return items_money;
    }

    public void setItems_money(double items_money) {
        this.items_money = items_money;
    }

    public int getIs_discount() {
        return is_discount;
    }

    public void setIs_discount(int is_discount) {
        this.is_discount = is_discount;
    }

    public double getDiscount_money() {
        return discount_money;
    }

    public void setDiscount_money(double discount_money) {
        this.discount_money = discount_money;
    }

    public double getItems_price() {
        return items_price;
    }

    public void setItems_price(double items_price) {
        this.items_price = items_price;
    }

    public int getBuy_number() {
        return buy_number;
    }

    public void setBuy_number(int buy_number) {
        this.buy_number = buy_number;
    }

    public int getIs_single() {
        return is_single;
    }

    public void setIs_single(int is_single) {
        this.is_single = is_single;
    }
}

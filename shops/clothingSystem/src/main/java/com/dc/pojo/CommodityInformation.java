package com.dc.pojo;

import com.wordnik.swagger.annotations.ApiModelProperty;

public class CommodityInformation {
    @ApiModelProperty(value = "商品单号")
    private String items_id;
    @ApiModelProperty(value = "商品类型")
    private int items_type;
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
    @ApiModelProperty(value = "是否删除")
    private int is_discount;
    @ApiModelProperty(value = "商品大小")
    private double discount_money;
    @ApiModelProperty(value = "商品售价")
    private double items_price;
    @ApiModelProperty(value = "商家号")
    private String merchant_id;
    @ApiModelProperty(value = "是否删除")
    private int is_deleteitems;

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("CommodityInformation{");
        sb.append("items_id='").append(items_id).append('\'');
        sb.append(", items_type=").append(items_type);
        sb.append(", brand_name='").append(brand_name).append('\'');
        sb.append(", brand_type='").append(brand_type).append('\'');
        sb.append(", items_color='").append(items_color).append('\'');
        sb.append(", items_size='").append(items_size).append('\'');
        sb.append(", items_money=").append(items_money);
        sb.append(", is_discount=").append(is_discount);
        sb.append(", discount_money=").append(discount_money);
        sb.append(", items_price=").append(items_price);
        sb.append(", merchant_id='").append(merchant_id).append('\'');
        sb.append(", is_deleteitems=").append(is_deleteitems);
        sb.append('}');
        return sb.toString();
    }

    public String getItems_id() {
        return items_id;
    }

    public void setItems_id(String items_id) {
        this.items_id = items_id;
    }

    public int getItems_type() {
        return items_type;
    }

    public void setItems_type(int items_type) {
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


































    public String getMerchant_id() {
        return merchant_id;
    }

    public void setMerchant_id(String merchant_id) {
        this.merchant_id = merchant_id;
    }

    public int getIs_deleteitems() {
        return is_deleteitems;
    }

    public void setIs_deleteitems(int is_deleteitems) {
        this.is_deleteitems = is_deleteitems;
    }
}

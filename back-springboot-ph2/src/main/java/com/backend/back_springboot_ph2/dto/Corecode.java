package com.backend.back_springboot_ph2.dto;

import lombok.Data;

public class Corecode {

  @Data
  public static class InquiryRequest {
    private String name;

    private String email;

    private String company;

    private String rank;

    private String industry;

    private String detail;

    private boolean agreePrivacy;

    private boolean agreeOver14;
  }
}

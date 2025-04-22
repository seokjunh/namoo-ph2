package com.backend.back_springboot_ph2.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.back_springboot_ph2.dto.Corecode.InquiryRequest;
import com.backend.back_springboot_ph2.service.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api")
public class EmailController {

  @Autowired
  private EmailService emailService;

  @PostMapping("/corecode-inquiry")
  public void sendCorecodeInquiry(@RequestBody InquiryRequest request) {
    emailService.sendEmail(request);
  }

}

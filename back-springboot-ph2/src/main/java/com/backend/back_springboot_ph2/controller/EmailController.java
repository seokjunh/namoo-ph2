package com.backend.back_springboot_ph2.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.backend.back_springboot_ph2.dto.Corecode.InquiryRequest;
import com.backend.back_springboot_ph2.service.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/api")
public class EmailController {

  @Autowired
  private EmailService emailService;

  @PostMapping("/corecode-inquiry")
  public void sendCorecodeInquiry(@RequestPart("data") InquiryRequest request) {
    System.out.println(request.getName());
    System.out.println(request.getEmail());
    emailService.sendEmail(request.getName(), request.getEmail());
  }

}

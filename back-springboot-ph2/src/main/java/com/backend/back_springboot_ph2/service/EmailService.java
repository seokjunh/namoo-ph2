package com.backend.back_springboot_ph2.service;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.backend.back_springboot_ph2.dto.Corecode.InquiryRequest;

import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

  @Autowired
  private JavaMailSender mailSender;

  public String sendEmail(InquiryRequest request) {

    MimeMessage message = mailSender.createMimeMessage();

    try {
      MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

      helper.setTo("seokjunh97@namooinc.com"); // 내 이메일
      helper.setSubject("📩 새로운 Corecode 신청");
      helper.setFrom(request.getEmail()); // 하이웍스 인증 계정

      // HTML 형식의 이메일 내용
      String emailContent = "<div style='font-family: Arial, sans-serif; padding: 20px'>" +
          "<h2 style='color: #4a90e2;'>새로운 Corecode 신청이 접수되었습니다.</h2>" +
          "<p><strong>이름 :</strong> " + request.getName() + "</p>" +
          "<p><strong>이메일 :</strong> " + request.getEmail() + "</p>" +
          "<p><strong>회사(소속) :</strong> " + request.getCompany() + "</p>" +
          "<p><strong>직급 :</strong> " + request.getRank() + "</p>" +
          "<p><strong>업종 :</strong> " + request.getIndustry() + "</p>" +
          "<p><strong>문의내용 :</strong></p> " +
          "<pre style='line-height: 1.6'>" + request.getDetail() + "</pre>" +
          "<p><strong>개인정보 수집 및 이용 :</strong> " + request.isAgreePrivacy() + "</p>" +
          "<p><strong>만 14세 이상임 :</strong> " + request.isAgreeOver14() + "</p>" +
          "<p style='margin-top: 20px'>신청일시: " + new SimpleDateFormat("yyyy년 MM월 dd일 HH:mm:ss").format(new Date())
          + "</p>" +
          "</div>";

      helper.setText(emailContent, true); // true는 HTML을 활성화

      mailSender.send(message);
      System.out.println("이메일 전송 성공");
      return "전송 성공";
    } catch (Exception e) {
      e.printStackTrace();

      return "전송 실패";
    }
  }
}

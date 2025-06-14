# 1단계: 빌드 단계 (JDK 21 - Alpine)
FROM eclipse-temurin:21-jdk-alpine AS builder

WORKDIR /app

# 소스 복사
COPY . .

# 빌드 (Gradle 예시. Maven이면 RUN mvn clean package 등으로 대체)
RUN ./gradlew clean build --no-daemon

# 2단계: 실행 단계 (JRE 21 - Alpine)
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# 빌드된 JAR 복사
COPY --from=builder /app/build/libs/*.jar app.jar

# 실행
ENTRYPOINT ["java", "-jar", "app.jar"]

# Stage 1: Build with Maven and OpenJDK 8
FROM maven:3.8.6-openjdk-8 AS build

WORKDIR /app
COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

# Stage 2: Run with JRE 8 Alpine
FROM eclipse-temurin:8-jdk-alpine

WORKDIR /app
COPY --from=build /app/target/wordflow-api-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
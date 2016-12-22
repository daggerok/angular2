package daggerok;

import daggerok.user.domain.User;
import daggerok.user.domain.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@Slf4j
@SpringBootApplication
public class ServerApplication {

    /**
     * httpie:
     * echo '{"email":"admin","password":"admin"}' | http post :8080/api/v1/auth/sugnin
     *
     * or same with curl:
     * curl -id '{"email":"admin","password":"admin"}' -H 'content-type:application/json' localhost:8080/api/v1/auth/sugnin
     */
    @Bean
    public CommandLineRunner init(final UserRepository userRepository) {

        if (userRepository.count() > 0) {
            return args -> log.info("users data exists.");
        }

        return args -> userRepository.save(new User().setUsername("admin").setPassword("admin"));
    }

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }
}

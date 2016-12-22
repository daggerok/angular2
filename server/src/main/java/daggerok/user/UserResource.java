package daggerok.user;

import daggerok.user.domain.User;
import daggerok.user.domain.UserRepository;
import daggerok.user.dto.UserRequest;
import daggerok.user.dto.UserResponse;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static daggerok.user.UserResource.ENDPOINT;
import static org.springframework.http.HttpStatus.*;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequiredArgsConstructor
@Transactional(readOnly = true)
@RequestMapping(path = ENDPOINT, produces = APPLICATION_JSON_VALUE)
public class UserResource {

    public static final String ENDPOINT = "/api/v1/auth";

    final UserRepository userRepository;

    @Transactional
    @PostMapping("/sugnup")
    public UserResponse signup(@RequestBody final UserRequest request) {

        val user = userRepository.findUserByUsername(request.getEmail());

        if (user.isPresent()) {
            return UserResponse.of("user already exist.", BAD_REQUEST.value());
        }

        userRepository.save(new User().setUsername(request.getEmail()));
        return UserResponse.of("OK", CREATED.value());
    }

    @PostMapping("/sugnin")
    public UserResponse signin(@RequestBody final UserRequest request) {

        val user = userRepository.findUserByUsername(request.getEmail());

        if (!user.isPresent()) {
            return UserResponse.of("authentication fail.", UNAUTHORIZED.value());
        }

        val target = user.get();

        if (target.getPassword().equals(request.getPassword())) {
            return UserResponse.of("OK", OK.value());
        }

        return UserResponse.of("authentication fail.", UNAUTHORIZED.value());
    }
}

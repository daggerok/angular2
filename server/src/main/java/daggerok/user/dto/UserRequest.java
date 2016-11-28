package daggerok.user.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.io.Serializable;

@Data
@NoArgsConstructor
@Accessors(chain = true)
public class UserRequest implements Serializable {

    private static final long serialVersionUID = 3448740440999017668L;

    String email, password;
}

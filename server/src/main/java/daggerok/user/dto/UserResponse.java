package daggerok.user.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;

@Data
@AllArgsConstructor(staticName = "of")
public class UserResponse implements Serializable {

    private static final long serialVersionUID = 4335068262985087444L;

    String result;
    Integer status;
}

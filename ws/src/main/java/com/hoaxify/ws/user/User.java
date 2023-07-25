package com.hoaxify.ws.user;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
@Table(name="users")
public class User {

	@Id
	@GeneratedValue
	private long id;
	@NotNull(message = "{hoaxify.constraint.username.NotNull.message}")
	@Size(min = 4, max=255)
	@UniqueUsername
	private String username;
	@NotNull
	@Size(min = 4, max=255)
	private String displayName;
	@NotNull
	@Size(min = 8, max=255)
	@Pattern(regexp="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$",message = "{hoaxify.constraint.password.Pattern.message}")
	private String password;
	
}

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class FindVideoDto {
	@IsString()
	@ApiProperty({
		required: true,
		description: "DB 상에서 비디오의 ID",
		example: "$2b$12$s1O5h66GFZ0oXR3eLDiuF.J9uglYTEXus71.BMFAp5zcTqgjXz9M2",
	})
	videoPath: string;
}

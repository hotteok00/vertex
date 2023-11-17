import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

export class CreatePlaylistDto {
	@IsNotEmpty()
	@IsString()
	email: string;

	@IsString()
	@ApiProperty({
		required: true,
		description: "플레이리스트 제목",
		example: "박효신 노래 모음",
	})
	title: string;


}

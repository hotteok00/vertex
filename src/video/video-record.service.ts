import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Record } from "src/model/record.model";
import { Video } from "src/model/video.model";

@Injectable()
export class VideoRecordService {
	constructor(
		@InjectModel(Record)
		private recordModel: typeof Record,
	) {}

	private readonly logger = new Logger("Video Record Service");

	/**
	 * @param userId
	 * @description 유저가 자신의 모든 영상 시청 목록을 찾음
	 */
	async findAll(userId: string) {}

	async create(video: Video) {
		const functionName = VideoRecordService.prototype.create.name;
		try {
			const { user_email: email, id: videoId } = video;

			const existedRecord = await this.recordModel.findOne({
				where: {
					user_email: email,
					video_id: videoId,
				},
			});

			if (existedRecord) {
				return;
			}

			await this.recordModel.create({
				user_email: email,
				video_id: videoId,
			});
		} catch (error) {
			this.logger.error(`${functionName} : ${error}`);
			return new HttpException(
				`${functionName} ${error}`,
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	/**
	 * @param userId
	 * @param videoId
	 * @description 유저가 시청 목록에서 비디오 삭제
	 */
	async delete(userId: string, videoId: string) {}
}

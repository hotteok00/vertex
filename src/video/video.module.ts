import { Module } from "@nestjs/common";

import { VideoController } from "./video.controller";
import { VideoService } from "./video.service";
import { VideoRecordService } from "./video-record.service";

import { VideoLikeService } from "./video-like.service";
import { VideoCommentService } from "./video-comment.service";

// Database
import { SequelizeModule } from "@nestjs/sequelize";
import { Video } from "src/model/video.model";
import { Like } from "src/model/like.model";
import { VideoRecord } from "src/model/video-record.model";
import { FirebaseService } from "src/firebase/firebase.service";
import { Comment } from "src/model/commet.model";

@Module({
	imports: [SequelizeModule.forFeature([Video, Comment, Like, VideoRecord])],
	controllers: [VideoController],
	providers: [
		VideoService,
		VideoLikeService,
		VideoRecordService,
		VideoCommentService,
		FirebaseService,
	],
})
export class VideoModule {}

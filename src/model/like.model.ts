import {
	Table,
	Column,
	Model,
	BelongsTo,
	ForeignKey,
} from "sequelize-typescript";
import { User } from "./user.model";
import { Video } from "./video.model";
import { Post } from "./post.model";

@Table({ freezeTableName: true, initialAutoIncrement: "1" })
export class Like extends Model {
	// Columns
	@Column({ primaryKey: true, autoIncrement: true })
	id: number;

	@ForeignKey(() => User)
	@Column({ unique: true, allowNull: false, onDelete: "CASCADE" })
	user_email: string;

	@ForeignKey(() => Video)
	@Column({ unique: true, allowNull: true, onDelete: "CASCADE" })
	video_id: string;

	@ForeignKey(() => Post)
	@Column({ unique: true, allowNull: true, onDelete: "CASCADE" })
	post_id: number;

	/**
	 * Relationship
	 */

	/* Belongs */
	@BelongsTo(() => User, "user_email")
	user: User;

	@BelongsTo(() => Post, "post_id")
	post: Post;

	@BelongsTo(() => Video, "video_id")
	video: Video;
	/* Has */
}

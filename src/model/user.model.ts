import {
	Table,
	Column,
	Model,
	IsEmail,
	HasMany,
	BelongsToMany,
	ForeignKey,
	BelongsTo,
} from "sequelize-typescript";
import { Video } from "./video.model";
import { Record } from "./record.model";
import { Post } from "./post.model";
import { Playlist } from "./playlist.model";
import { Like } from "./like.model";
import { Comment } from "./comment.model";
import { Subscription } from "./subscription.model";

@Table({ freezeTableName: true })
export class User extends Model {
	@ForeignKey(() => User)
	@IsEmail
	@Column({ primaryKey: true })
	email: string;

	// Columns
	@Column({ allowNull: true })
	provider_id: string;

	@Column({ allowNull: true })
	password: string;

	@Column
	name: string;

	@Column({ allowNull: true })
	profile_image_path: string;

	@Column({ allowNull: true })
	description: string;

	/**
	 * Relationship
	 */

	/* Belongs */
	@BelongsToMany(() => User, () => Subscription, "email", "email")
	subscription: Subscription;

	/* Has */
	@HasMany(() => Comment)
	comments: Comment[];

	@HasMany(() => Post)
	posts: Post[];

	@HasMany(() => Like)
	likes: Like[];

	@HasMany(() => Video)
	videos: Video[];

	@HasMany(() => Playlist)
	playlists: Playlist[];

	@HasMany(() => Record)
	records: Record[];
}

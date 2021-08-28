// API 인터페이스 생성
export interface NewsItem {
	comments_count: number
	domain?: string
	id: number
	points: number
	time: number
	time_ago: string
	title: string
	type: string
	url: string
	user: string
}

interface CommentsType {
	comments: []
	comments_count: number
	content: string
	id: number
	level: number
	time: number
	time_ago: string
	type: string
	url: string
	user: string
}

export interface UserInfoType {
	comments: CommentsType[]
	comments_count: number
	content: string
	id: number
	points: number
	time: number
	time_ago: string
	title: string
	type: string
	url: string
	user: string
}

export interface ItemInfoType {
	about: string
	created: string
	created_time: number
	id: string
	karma: number
}

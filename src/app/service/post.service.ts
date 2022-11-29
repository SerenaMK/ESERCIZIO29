import { Post } from "../models/post.interface";

export async function getPosts(): Promise<Post[]> {
    return await (await fetch('assets/db.json')).json()
}

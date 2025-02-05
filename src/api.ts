import { User, Post } from "./types";

export async function fetchUsers(): Promise<User[]> {
  // console.log("https://jsonplaceholder.typicode.com/users")
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}

export async function fetchUserPosts(userId: number): Promise<Post[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  return response.json();
}
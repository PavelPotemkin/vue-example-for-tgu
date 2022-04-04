export default async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
    return await response.json()
}

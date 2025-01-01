import {comments} from "./data";

export async function GET()
{
    return Response.json(comments);
}

export async function POST(request: Request){
    // Getting the comment from the user post. We need to convert the comment in json format as user post data always be converted into stringify.
    const comment = await request.json();

    // Creating the new comment by the user's comment to add in the comments array
    const newComment = {
        id: comments.length + 1,
        text: comment.text,
    };
    comments.push(newComment);

    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}
import { useParams } from "react-router-dom";
import useFetch from "../data/functions/useFetch";
import { Table } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

function Post() {
  const { id } = useParams();
  const {
    data: post,
    loading: postLoading,
    error: postError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const {
    data: comments,
    loading: commentsLoading,
    error: commentsError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  const isLoading = postLoading || commentsLoading;
  const hasError = postError || commentsError;
  if (isLoading)
    return <ClipLoader color="#0d6efd" size={100} speedMultiplier="2" />;
  if (hasError) return <p>Error loading data.</p>;
  return (
    <div className="mx-5 text-start">
      <div className="card">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>

      <Table striped bordered hover>
        <tbody>
          <tr>
            <th>Email</th>
            <th>Title</th>
            <th>Content</th>
          </tr>
          {comments.map((comment) => {
            return (
              <tr key={comment.id}>
                <td>{comment.email}</td>
                <td>{comment.name}</td>
                <td>{comment.body}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Post;

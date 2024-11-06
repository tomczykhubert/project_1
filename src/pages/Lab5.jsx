import SortingButton from "../components/SortingButton";
import { Table } from "react-bootstrap";
import useFetch from "../data/functions/useFetch";
import { useReducer, useEffect, useState } from "react";
import TableDataReducer from "../data/TableDataReducer";
import Accordion from "react-bootstrap/Accordion";
import { NavLink } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function Lab5() {
  const {
    data: posts,
    loading: postsLoading,
    error: postsError,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");
  const {
    data: users,
    loading: usersLoading,
    error: usersError,
  } = useFetch("https://jsonplaceholder.typicode.com/users");
  const {
    data: comments,
    loading: commentsLoading,
    error: commentsError,
  } = useFetch("https://jsonplaceholder.typicode.com/comments");

  const isLoading = postsLoading || usersLoading || commentsLoading;
  const hasError = postsError || usersError || commentsError;

  const [state, tableDispatch] = useReducer(TableDataReducer, []);
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    if (!isLoading && !hasError) {
      const tableData = posts.map((p) => ({
        user: users.find((u) => u.id === p.userId),
        post: p,
        comments: comments.filter((c) => c.postId === p.id),
      }));
      setInitialData(tableData);
      tableDispatch({ type: "setData", payload: tableData });
    }
  }, [isLoading, hasError, posts, users, comments]);

  if (isLoading)
    return <ClipLoader color="#0d6efd" size={100} speedMultiplier="2" />;
  if (hasError) return <p>Error loading data.</p>;
  return (
    <div className="mx-5">
      <Table striped bordered hover>
        <tbody>
          <tr>
            <th className="w-25">
              <SortingButton
                title="User"
                type="user"
                dispatch={tableDispatch}
                initialData={initialData}
              />
            </th>
            <th className="w-50">
              <SortingButton
                title="Post title"
                type="post"
                dispatch={tableDispatch}
                initialData={initialData}
              />
            </th>
            <th className="w-25">
              <SortingButton
                title="Comments count"
                type="comments"
                dispatch={tableDispatch}
                initialData={initialData}
              />
            </th>
          </tr>
          {state.map((item) => (
            <tr key={item.post.id + "-" + item.post.userId}>
              <td>
                <NavLink to={`users/${item.user.id}`}>
                  {item.user?.name}
                </NavLink>
              </td>
              <td>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{item.post.title}</Accordion.Header>
                    <Accordion.Body>{item.post.body}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </td>
              <td>
                <NavLink to={`posts/${item.user.id}/comments`}>
                  {item.comments.length}
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Lab5;

import Home from "../pages/Home.jsx";
import Lab1 from "../pages/Lab1.jsx";
import Lab2 from "../pages/Lab2.jsx";
import Lab3 from "../pages/Lab3.jsx";
import Lab4 from "../pages/Lab4.jsx";
import AddPersonForm from "../components/AddPersonForm.jsx";
export const menuItems = [
  {
    id: 1,
    label: "Home",
    url: "/",
    urlPattern: "/",
    element: <Home></Home>,
  },
  {
    id: 2,
    label: "Laboratorium 1",
    url: "/lab1",
    urlPattern: "/lab1",
    element: <Lab1></Lab1>,
  },
  {
    id: 3,
    label: "Laboratorium 2",
    url: "/lab2/1",
    urlPattern: "/lab2/:id",
    element: <Lab2></Lab2>,
  },
  {
    id: 4,
    label: "Laboratorium 3",
    url: "/lab3",
    urlPattern: "/lab3",
    element: <Lab3></Lab3>,
  },
  {
    id: 5,
    label: "Laboratorium 4",
    url: "/lab4",
    urlPattern: "/lab4",
    element: <Lab4></Lab4>,
    // children: [
    //   {
    //     id: 6,
    //     urlPattern: "/add",
    //     element: <div>add</div>
    //   },
    //   {
    //     id: 7,
    //     urlPattern: "/edit",
    //     element: <div>edit</div>
    //   }
    // ],
  },
  {
    id: 6,
    urlPattern: "lab4/add",
    element: <AddPersonForm></AddPersonForm>
  },
  {
    id: 7,
    urlPattern: "lab4/edit",
    element: <div>edit</div>
  }
];

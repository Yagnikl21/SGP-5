import React, { useEffect, useState } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Sort,
  Search,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";
import axios from "axios";
const Employees = () => {
  
  const [data, setData] = useState([]);
  // const navigate = useNavigate()
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/icecream/allice"
    }).then((response) => {
      console.log(response.data)
      setData(response.data)
    });
  }, [])
  
  console.log(data);
  return (
    <div className="m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={data}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {data.map((item, index) => (
            <ColumnsDirective>
              <ColumnDirective
                key={index.name}
                field={item.name}
                headerText={item.headerText}
                width={item.width}
              /> 
              <button>adf</button>
              </ColumnsDirective>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar, Sort]} />
      </GridComponent>
    </div>
  );
};

export default Employees;

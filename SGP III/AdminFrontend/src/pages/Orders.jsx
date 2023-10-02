import React, { useEffect, useState } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Page,
  Inject,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
import OrderDetails from './OrderDetails'
import axios from "axios";

const Orders = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null); // Add state for selected order
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const getOrders = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:8080/order/getAllOrders");
        console.log(res.data);
        setOrders(res.data.orders);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    getOrders();
  }, [])


  const handleClick = (props) => {
    setSelectedOrder(props); 
    setIsModalOpen(true);
  }

  const columnsToShow = [
    { name: "userData.username", headerText: "Ordered By", width: 120 },
    {
      headerText: "Total Items",
      template: (props) => props._doc.items.length, // Access the length of the items array inside the _doc object
      width: 100,
    },
    { name: "_doc.total", headerText: "Total Price", width: 100 },
    { name: "_doc.hostel", headerText: "Location", width: 100 },
    {
      name: "_doc.createdAt", // New column for displaying the formatted createdAt date
      headerText: "Ordered At",
      template: (props) => {
        const createdAt = props._doc.createdAt; // Assuming createdAt is a string like "2023-10-01T04:57:51.470Z"
        const date = new Date(createdAt);

        const formattedDate = `${date.toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' })} ${date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;

        return <div>{formattedDate}</div>;
      },
      width: 150, // Adjust the width as needed
    },
    {
      name: "_doc.orderedDelivered", headerText: "Status", width: 100
      , template: (props) => {
        const isDel = props._doc.orderedDelivery;
        // const isOut = props._doc?.isOut || false;
        if (isDel !== true) {
          return <div className="flex align-middle justify-center" style={{ backgroundColor: "green", borderRadius: "12px", color: "white" }}>Delived</div>
        } else {
          return <div className="flex align-middle justify-center" style={{ backgroundColor: "orange", borderRadius: "12px", color: "white" }}>Pending</div>
        }
      }
    },
    {
      headerText: "",
      template: (props) => (
        <button
          className="e-btn e-flat e-primary"
          onClick={() => handleClick(props)} // Pass the selected order to handleClick
        >
          See More
        </button>
      ),
      width: 100,
    },
  ];


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      {loading ? (
        // Show a loading indicator while data is being fetched
        <div>Loading...</div>
      ) : (
        <GridComponent
          dataSource={orders}
          allowPaging
          allowSorting
          toolbar={["Search"]}
          width="auto"
        >
          <ColumnsDirective>
            {columnsToShow.map((column, index) => (
              <ColumnDirective
                key={index}
                field={column.name}
                headerText={column.headerText}
                width={column.width}
                template={column.template}
              />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Search, Toolbar, Sort]} />
        </GridComponent>
      )}
      {selectedOrder && ( // Render OrderDetails if selectedOrder is not null
        <OrderDetails
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => {
            console.log("Order is confirmed");
            setIsModalOpen(false);
          }}
          order={selectedOrder} // Pass the selected order as a prop
        />
      )}
    </div>
  );
};

export default Orders;

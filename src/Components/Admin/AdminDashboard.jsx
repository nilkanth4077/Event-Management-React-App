import React from "react";
import ManageUsers from "./ManageUsers";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ManageEvents from "./ManageEvents";

const AdminDashboard = () => {
  const [value, setValue] = React.useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="tabs">
        <Box sx={{ width: "90%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{ borderBottom: 1, borderColor: "divider" }}
              className="tabs"
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Manage Users" value="1" />
                <Tab label="Manage Events" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <ManageUsers />
            </TabPanel>
            <TabPanel value="2">
              <ManageEvents />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
};

export default AdminDashboard;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ItemBar from "../components/ItemBar";
import VenderNav from "../components/VenderNav";
import VenderMenuPopup from "../components/VenderMenuPopup";
import MenuBoard from "../components/MenuBoard";
import "./sass/VenderMenu.scss";
import { getVender, getItem } from "../http";
import { restaurantActions } from "../store/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";

function VenderMenu() {
  const [tab, setTab] = useState(1);
  const dispatch = useDispatch();
  const toggleBox = useSelector((state) => state.restaurantSlice.toggleBox);
  const handleChange = (x, y) => {
    setTab(y);
  };

  useEffect(() => {
    getVender()
      .then((el) => {
        dispatch(restaurantActions.setRestaurant(el.data.data.restaurant));
        getItem({ ids: el.data.data.restaurant.Menu })
          .then((el) => {
            dispatch(restaurantActions.setMenuItems(el.data.data));
          })
          .catch((error) => {
            console.log("error while fetching menu", error);
          });
      })
      .catch((error) => {
        console.log("error while fetching restaurants", error);
      });

    return () => {};
  }, []);

  return (
    <div className="venderMenu">
      <div className="venderMenu__logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="venderMenu__main">
        <VenderNav active={3} />
        <ItemBar />
        <div style={{ marginLeft: "80px", position: "sticky", top: "0" }}>
          <Tabs
            textColor="secondary"
            indicatorColor="secondary"
            value={tab}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
          >
            <Tab
              iconPosition="start"
              icon={<ShoppingCartCheckoutIcon />}
              value={1}
              label="in stock"
            />
            <Tab
              iconPosition="start"
              icon={<ProductionQuantityLimitsIcon />}
              value={2}
              label="out stock"
            />
            {/* <Tab
              iconPosition="start"
              icon={<RestaurantIcon />}
              value={3}
              label="delivered"
            /> */}
          </Tabs>
        </div>
        {tab === 1 && <MenuBoard stock={true} />}
        {tab === 2 && <MenuBoard stock={false} />}
      </div>
      {toggleBox && <VenderMenuPopup />}
      {/* <VenderMenuPopup /> */}
    </div>
  );
}

export default VenderMenu;

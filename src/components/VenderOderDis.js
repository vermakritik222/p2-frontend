import {
  Close,
  Phone,
  WhatsApp,
  ChatOutlined,
  Done,
  ClearRounded,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import OderItem from "./OderItem";
import "./sass/VenderOderDis.scss";

function VenderOderDis() {
  const history = useHistory();
  const [showWA, setShowWA] = useState(false);
  const [showPH, setShowPH] = useState(false);
  return (
    <div className="venderOderDis">
      <div className="venderOderDis__card">
        <div className="venderOderDis__header">
          <h2 className="venderOderDis__oderName">
            Kritik's Oder <span> #644dsfbfb8d878df</span>
          </h2>
          <div className="venderOderDis__close"></div>
          <IconButton
            onClick={() => {
              history.push("/vender");
            }}
          >
            <Close />
          </IconButton>
        </div>

        <div className="venderOderDis__oderDetails">
          <h3>Oder Details</h3>
          <div className="">
            <div className="venderOderDis__oderDetailsG">
              <p>Name : Kritik Verma </p>
              <p>
                Odored at : 23:00 <span>2min ago</span>
              </p>
              <p>Grand Total : $562</p>
              <p>Pickup Method : Takeaway</p>
            </div>
            <div className="venderOderDis__oderDetails-Space"></div>
            <div className="venderOderDis__oderDetailsG">
              <p>Amount payed : $0</p>
              <p>Balance : $0</p>
              <p>Payment ID : #23r3472343</p>
            </div>
          </div>
        </div>
        <div className="venderOderDis__oderInfo">
          <div className="venderOderDis__oderInfoItem">
            <Button
              onClick={() => {
                setShowWA(true);
              }}
              startIcon={<WhatsApp />}
              style={
                showWA
                  ? { display: "none" }
                  : { display: "flex", color: "green" }
              }
            >
              WhatsApp
            </Button>
            <Button
              onClick={() => {
                setShowWA(false);
              }}
              startIcon={<WhatsApp color="success" />}
              style={
                showWA
                  ? { display: "flex", color: "green" }
                  : { display: "none" }
              }
            >
              +91 9876543219
            </Button>
          </div>
          <div className="venderOderDis__oderInfoItem">
            <Button
              onClick={() => {
                setShowPH(true);
              }}
              style={showPH ? { display: "none" } : { display: "flex" }}
              startIcon={<Phone />}
            >
              Phone
            </Button>
            <Button
              onClick={() => {
                setShowPH(false);
              }}
              style={showPH ? { display: "flex" } : { display: "none" }}
              startIcon={<Phone />}
            >
              +91 9876543219
            </Button>
          </div>
          <div className="venderOderDis__oderInfoItem">
            <Button
              startIcon={<ChatOutlined style={{ color: "#ef4f5f" }} />}
              style={{ color: "#ef4f5f" }}
            >
              Chat
            </Button>
          </div>
        </div>
        <div className="venderOderDis__oderItemContainer">
          <h3>Oder Items</h3>
          <div>
            <OderItem />
            <OderItem />
            <OderItem />
            <OderItem />
            <OderItem />
            <OderItem />
          </div>
        </div>
        <div className="venderOderDis__oderAccept">
          <Button
            style={{ color: "red" }}
            startIcon={<ClearRounded style={{ fontsize: "2rem" }} />}
          >
            Cancel
          </Button>
          <Button
            style={{ color: "green" }}
            startIcon={<Done style={{ fontsize: "2rem" }} />}
          >
            ready to go
          </Button>
        </div>
      </div>
    </div>
  );
}

export default VenderOderDis;

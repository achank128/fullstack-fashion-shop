import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import "./featureInfo.scss";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.453</span>
          <span className="featuredMoneyRate">
            -11.5
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compares to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$6.912</span>
          <span className="featuredMoneyRate">
            -3.6
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compares to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.453</span>
          <span className="featuredMoneyRate">
            +3.2
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compares to last month</span>
      </div>
    </div>
  );
}

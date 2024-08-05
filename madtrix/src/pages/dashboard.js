import React from "react";
import Sidebar from "../component/sidebar";
import StatisticsCard from "../component/statisticsCard";
import "../pages/dashboard.css";
import BarChartIcon from "@mui/icons-material/BarChart";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AudienceMetricsGraph from "../component/audienceMetricsGraph";
import DevicesComponent from "../component/deviceComponent";
import MostVisitedSections from "../component/mostVisitedSections";
import Leaderboard from "../component/leaderBoard";

const Dashboard = () => {
  return (
    <Sidebar>
      <div className="statistics-container">
        <div className="statistics-card-wrapper">
          <StatisticsCard
            title="Total Registration"
            value="1,245"
            percentage="2.8%"
            description="v/s last month"
            icon={BarChartIcon}
          />
        </div>
        <div className="statistics-card-wrapper">
          <StatisticsCard
            title="Active User"
            value="650"
            percentage="1.6% Increase"
            description="Vs last month"
            icon={GroupsIcon}
          />
        </div>
        <div className="statistics-card-wrapper">
          <StatisticsCard
            title="Daily Sessions"
            value="24"
            percentage="0.5% Decrease"
            description="Vs last month"
            icon={PersonAddAltIcon}
          />
        </div>
        <div className="statistics-card-wrapper">
          <StatisticsCard
            title="Total view Time"
            value="025h:32m:28s"
            percentage="4.1% Increase"
            description="Vs last month"
            icon={SlideshowIcon}
          />
        </div>
      </div>
      <div>
        <AudienceMetricsGraph />
      </div>
      <div className="cards-container">
        <div className="card">
          <DevicesComponent />
        </div>
        <div className="card">
          <MostVisitedSections />
        </div>
        <div className="card">
          <Leaderboard />
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashboard;

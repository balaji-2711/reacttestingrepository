import "./index.css";
import Card from "./component/Card";
import React from "react";

function App() {
  //giving the details of three cards
  let plans = [
    {
      plan: "FREE",
      price: 0,
      user: "Single User",
      userEnabler: true,
      storage: "5GB Storage",
      storageEnabler: true,
      publicProject: "Unlimited public projects",
      publicProjectEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: false,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: false,
      subDomain: "Free Subdomain",
      subDomainEnabler: false,
      reports: "Monthly Status Reports",
      reportsEnabler: false,
    },

    {
      plan: "PLUS",
      price: 9,
      user: "5 Users",
      userEnabler: true,
      storage: "5GB Storage",
      storageEnabler: true,
      publicProject: "Unlimited public projects",
      publicProjectEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomain: "Free Subdomain",
      subDomainEnabler: true,
      reports: "Monthly Status Reports",
      reportsEnabler: false,
    },

    {
      plan: "PRO",
      price: 49,
      user: "Unlimited Users",
      userEnabler: true,
      storage: "150GB Storage",
      storageEnabler: true,
      publicProject: "Unlimited public projects",
      publicProjectEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomain: " Free Subdomains",
      subDomainEnabler: true,
      reports: "Monthly Status Reports",
      reportsEnabler: true,
    },
  ];

  return (
    <div>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {/* calling the card function by passing the values as data */}
            <Card data={plans[0]} />
            <Card data={plans[1]} />
            <Card data={plans[2]} />
          </div>
        </div>
      </section>
    </div>
  );
}

//exporting the app function
export default App;

import React from "react";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";

const Index = () => {
  return (
    <div style={{paddingRight:'1em', paddingLeft:"1em"}}>
      <Section1 />
      <div style={{ marginTop: "2%" }}>
        <Section2 />
      </div>
      <div style={{ marginTop: "2%" }}>
        <Section3 />
      </div>
    </div>
  );
};

export default Index;

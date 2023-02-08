import React from "react";

import { GithubOutlined, PhoneOutlined } from "@ant-design/icons/lib/icons";

const FooterComponent = () => {
  return (
    <div className="footer-container w-mscreen flex justify-between">
      <div className="footer-container--info">
        <p className="text-mlightgray text-lg">Кто-нибудь</p>
      </div>
      <div className="footer-container--social">
        <GithubOutlined
          className="h-7 w-7 text-mlightgray cursor-pointer"
          onClick={(e) => window.open("http://github.com/DRMus")}
        />
      </div>
      <div className="footer-container--phone flex flex-row items-center gap-2 transition-colors">
        <PhoneOutlined rotate={90} className="h-7 w-7 text-mlightgray" />
        <p className="font-light text-lg text-mlightgray">8 800 555 35 35</p>
      </div>
    </div>
  );
};

export default FooterComponent;

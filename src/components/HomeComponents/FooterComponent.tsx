import React from "react";

import { GithubOutlined, PhoneOutlined } from "@ant-design/icons/lib/icons";

const FooterComponent = () => {
  return (
    <div className="footer-container w-mscreen flex justify-between">
      <div className="footer-container--info">
        <p className="text-mlightgray transition-colors text-lg hover:text-white">Кто-нибудь</p>
      </div>
      <div className="footer-container--social">
        <GithubOutlined
          className="h-7 w-7 text-mlightgray cursor-pointer transition-colors duration-300 hover:text-white"
          onClick={(e) => window.open("http://github.com/DRMus")}
        />
      </div>
      <div className="footer-container--phone flex flex-row text-mlightgray items-center gap-2 transition-colors duration-300 hover:text-white">
        <PhoneOutlined rotate={90} className="h-7 w-7" />
        <p className="font-light text-lg ">8 800 555 35 35</p>
      </div>
    </div>
  );
};

export default FooterComponent;

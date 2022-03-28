import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function () {
  return (
    <footer>
      <div className="p-10 bg-gray-200 text-gray-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h4 className="text-2xl pb-4">Acess</h4>
              <ul className="text-gray-500">
                <li className="pb-4">
                  <i className=" text-yellow-500">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      style={{ fontSize: 10, color: "grey" }}
                    />
                  </i>
                  <a href="#" className="hover:text-yellow-500" />
                  Know more about UDID
                </li>
                <li className="pb-4">
                  <i className=" text-yellow-500">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      style={{ fontSize: 10, color: "grey" }}
                    />
                  </i>
                  <a href="#" className="hover:text-yellow-500" />
                  Schemes for Persons with Disabilities
                </li>
                <li className="pb-4">
                  <i className="fa fa-chevron-right text-yellow-500"></i>
                  <a href="#" className="hover:text-yellow-500" />
                  Donation Box
                </li>
                <li className="pb-4">
                  <i className=" text-yellow-500">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      style={{ fontSize: 10, color: "grey" }}
                    />
                  </i>
                  <a href="#" className="hover:text-yellow-500" />
                  Lorem ipsum dolor sit
                </li>
                <li className="pb-4">
                  <i className=" text-yellow-500">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      style={{ fontSize: 10, color: "grey" }}
                    />
                  </i>
                  <a href="#" className="hover:text-yellow-500" />
                  lorem
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="text-2xl pb-4">Services</h4>
              <ul className="text-gray-500">
                <li className="pb-4">
                  <i className=" text-yellow-500">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      style={{ fontSize: 10, color: "grey" }}
                    />
                  </i>
                  <a href="#" className="hover:text-yellow-500" />
                  Terms And condition
                </li>
                <li className="pb-4">
                  <i className=" text-yellow-500">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      style={{ fontSize: 10, color: "grey" }}
                    />
                  </i>
                  <a href="#" className="hover:text-yellow-500" />
                  Privacy Policy
                </li>
                <li className="pb-4">
                  <i className=" text-yellow-500">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      style={{ fontSize: 10, color: "grey" }}
                    />
                  </i>
                  <a href="#" className="hover:text-yellow-500" />
                  Copyright Policy
                </li>
                <li className="pb-4">
                  <i className="text-yellow-500">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      style={{ fontSize: 10, color: "grey" }}
                    />
                  </i>
                  <a href="#" className="hover:text-yellow-500" />
                  Hyperlink Policy
                </li>
                <li className="pb-4">
                  <i className=" text-yellow-500">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      style={{ fontSize: 10, color: "grey" }}
                    />
                  </i>
                  <a href="#" className="hover:text-yellow-500" />
                  Help
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 text-gray-500 px-10">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
          <div className="text-center">
            <div>
              © Copyright 2022 Unique Disability ID,Department of Empowerment
              <br /> of Persons with Disabilities, Ministry of Social Justice &
              Empowerment,
              <br /> Govt. of India. All Rights Reserved.181
            </div>
          </div>
          <div className="text-center text-xl text-white mb-2">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"
            >
              <i className="fa fa-skype"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"
            >
              <i className="fa fa-linkedin"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

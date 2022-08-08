import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faFerry,
  faPlaneDeparture,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

//import custom styling
import "./Header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Header = ({ type }) => {
  //create date range object
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "dateSelection",
    },
  ]);

  //set options
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });

  //handle increase options
  const handleOptionSelect = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "increaseValue" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      {/*header container*/}
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {/*header icons*/}
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} /> <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlaneDeparture} /> <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} /> <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faFerry} /> <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} /> <span>Airport taxis</span>
          </div>
        </div>

        {/*header title*/}
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Need to find your next stay? We got you!
            </h1>
            <p className="headerDescription">
              <b>Get the best rewards for your travels</b> - search deals on
              hotels, homes, and much more, while saving 10% or more with a free
              Mokhele Hotel Booking account.
            </p>
            <button className="headerButton">Sign in / Sign up</button>

            {/*header search bar*/}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.dateSelection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              {/*header search bar items*/}
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setOpenOptions(!openOptions)}
                >{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() =>
                            handleOptionSelect("adult", "decreaseValue")
                          }
                          disabled={options.adult <= 1}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() =>
                            handleOptionSelect("adult", "increaseValue")
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="optionItem">
                      <span className="optionText">Children</span>

                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() =>
                            handleOptionSelect("children", "decreaseValue")
                          }
                          disabled={options.children <= 0}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() =>
                            handleOptionSelect("children", "increaseValue")
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() =>
                            handleOptionSelect("room", "decreaseValue")
                          }
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() =>
                            handleOptionSelect("room", "increaseValue")
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerButton">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

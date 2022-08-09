import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocation,
  faCalendarDays,
  faMoneyBill1,
  faUser,
  faBaby,
  faPersonShelter,
  faMagnifyingGlassLocation,
} from "@fortawesome/free-solid-svg-icons";

//import customs
import Header from "../../components/constant/Header/Header";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SearchItem from "../../components/SearchItem/SearchItem";

//styles
import "./HotelListPage.css";

const HotelListPage = () => {
  //get previous page values
  const location = useLocation();

  //value states
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <NavigationBar />
      <Header type="list" />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label>
                <FontAwesomeIcon icon={faMapLocation} className="icons" />{" "}
                Destination
              </label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listItem">
              <label>
                <FontAwesomeIcon icon={faCalendarDays} className="icons" />
                Check-in date
              </label>

              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.dateSelection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="listItem">
              <div className="listOptions">
                <div className="listOptionItem">
                  <span className="listOptionText">
                    <FontAwesomeIcon icon={faMoneyBill1} className="icons" />{" "}
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="listOptionInput" />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">
                    <FontAwesomeIcon icon={faMoneyBill1} className="icons" />{" "}
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="listOptionInput" />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">
                    <FontAwesomeIcon icon={faUser} className="icons" />
                    Adult
                  </span>
                  <input
                    type="number"
                    min={1}
                    placeholder={options.adult}
                    className="listOptionInput"
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">
                    <FontAwesomeIcon icon={faBaby} className="icons" />
                    Children
                  </span>
                  <input
                    type="number"
                    min={0}
                    placeholder={options.children}
                    className="listOptionInput"
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">
                    <FontAwesomeIcon icon={faPersonShelter} className="icons" />
                    Room
                  </span>
                  <input
                    type="number"
                    min={1}
                    placeholder={options.room}
                    className="listOptionInput"
                  />
                </div>
              </div>
            </div>
            <button>
              <FontAwesomeIcon
                icon={faMagnifyingGlassLocation}
                className="icons-white"
              />{" "}
              Search
            </button>
          </div>
          {/* end listSearch*/}

          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
      {/* end listContainer*/}
    </div>
  );
};

export default HotelListPage;

import React from "react";
// database
// const trip = require("./../../database/choqoquerao.json");

import trip from "./../../database/choqoquerao.json";

const directions: unknown = trip.directions;
directions as typeof Array<LegPoint>;

import { OrderedList } from "@atoms/ordered-list";
import { HeaderNavBar } from "components/organisms/header-nav-bar/index";
import { H1Primary, SubheadingPrimary } from "@atoms/typography";
import { touchRippleClasses } from "@mui/material";

interface PathType {
  type: TransportationType | Array<TransportationType>;
  price: number;
  duration: string;
}

enum locations {
  city = "city",
  village = "village",
  town = "town",
  stop = "stop",
  attraction = "attraction",
  ruins = "ruins",
}

type locationType = `${locations}`;

interface BaseType {
  name: string;
  type: locationType;
}

enum Transportation {
  drive = "drive",
  bus = "bus",
  walk = "walk",
  taxi = "taxi",
  roam = "roam",
}

type TransportationType = `${Transportation}`;

interface LegPoint {
  day: number;
  base: BaseType;
  path: PathType;
  end?: BaseType;
}

// const locationDirections: Directions = [
//   {
//     day: 1,

//     base: {
//       name: "cusco",
//       type: "city",
//     },
//     path: {
//       type: Transportation.bus,
//       price: 25,
//       duration: "3 hours",
//     },
//     end: {
//       name: "Ramal de Cachora",
//       type: "stop",
//     },
//   },
//   {
//     day: 1,

//     base: { name: "Ramal de Cachora", type: "stop" },
//     path: {
//       type: Transportation.taxi,
//       price: 60,
//       duration: "45mins",
//     },
//     end: {
//       name: "mirardor",
//       type: "stop",
//     },
//   },
//   {
//     day: 1,

//     base: {
//       name: "mirardor",
//       type: "stop",
//     },
//     path: {
//       type: Transportation.walk,
//       price: 0,
//       duration: "3hr",
//     },
//     end: {
//       name: "calciluyo",
//       type: "village",
//     },
//   },
//   {
//     day: 2,

//     base: {
//       name: "calciluyo",
//       type: "village",
//     },
//     path: {
//       type: Transportation.walk,
//       price: 0,
//       duration: "6hrs",
//     },
//     end: {
//       name: "choqoquerao",
//       type: "town",
//     },
//   },
//   {
//     day: 2,

//     base: {
//       name: "choqoquirao",
//       type: "ruins",
//     },
//     path: {
//       type: "roam",
//       price: 80,
//       duration: "6hrs",
//     },
//     end: {
//       name: "choqoquerao",
//       type: "ruins",
//     },
//   },
//   {
//     day: 3,

//     base: {
//       name: "choqoquerao",
//       type: "ruins",
//     },
//     path: {
//       type: "walk",
//       price: 0,
//       duration: "4hrs",
//     },
//     end: {
//       name: "calciluyo",
//       type: "stop",
//     },
//   },
//   {
//     day: 4,

//     base: {
//       name: "calciluyo",
//       type: "stop",
//     },
//     path: {
//       type: "walk",
//       price: 0,
//       duration: "4hrs",
//     },
//     end: {
//       name: "mirador",
//       type: "stop",
//     },
//   },
//   {
//     day: 4,

//     base: {
//       name: "mirador",
//       type: "stop",
//     },
//     path: {
//       type: "taxi",
//       price: 100,
//       duration: "4hrs",
//     },
//     end: {
//       name: "cusco",
//       type: "city",
//     },
//   },
// ];
console.log("directions", trip.directions);
const Home = () => {
  return (
    <main>
      <HeaderNavBar />
      <H1Primary>Choquequiro Trek</H1Primary>
      <div>
        <SubheadingPrimary>
          The no frills version of getting to Choquequirao
        </SubheadingPrimary>
        <OrderedList
          list={directions}
          onHandleListFn={(item, index) => {
            return (
              <li
                key={index}
                style={{ marginBottom: "20px", paddingLeft: "20px" }}
              >
                <p>start:{item.base.name ?? "unknown"}</p>
                <p>
                  path: you take a {item.path.type} for {item.path.duration} and
                  it may cost you {item.path.price}
                </p>

                <p>end: {item?.end?.name}</p>
              </li>
            );
          }}
        />
      </div>
    </main>
  );
};

export default Home;

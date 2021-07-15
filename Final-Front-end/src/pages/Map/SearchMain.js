import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dropdown from './Sections/Dropdown';
import MapService from './Sections/MapService'
import OnStudyComponent from './Sections/OnStudyComponent';

const SearchMain = () => {

  const links = [
    { key: 1, path: "/search/offline", title: "offline" }, { key: 2, path: "/search/online", title: "online" }
  ]

  return (
    <>
      <div className="flex flex-row justify-center">
        <Dropdown
          links={links}
        />
      </div>
      <div>
        <Route path='/search/offline' component={MapService} />
        <Route path='/search/online' render={() => <OnStudyComponent />} />
      </div>
    </>
  )
}

export default SearchMain;

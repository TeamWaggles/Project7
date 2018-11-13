import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

class App extends Component {
    initMap() {
        let map = new window.google.maps.Map(document.getElementById("map"), {
           center: { lat: 32.715738, lng: -117.161084 },
           zoom: 14
        });
        window.mapObject = map;
    }

    loadScript() {
        let scriptElement = this.createMapScript();
        let scriptsOnPage = document.getElementsByTagName("script");
        let script = scriptsOnPage[0];
        console.log(scriptsOnPage);
        console.log(script.parentNode);
        script.parentNode.insertBefore(scriptElement, script);
        window.initMap = this.initMap;
    }
    createMapScript() {
        let mapScript = document.createElement("script");
        const API_KEY = "AIzaSyDMDXNOSgwInzpGVuwPE-yYjm9BFE3CRMw";
        mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
        mapScript.async = true;
        mapScript.defer = true;
        return mapScript;
    }
    render() {
        this.loadScript();
        return (
          <div>
            <div className="App"/>
              <Header />
              <Content />
          </div>
        );
        // return <div className="App" id="map" />
    }
}

export default App;
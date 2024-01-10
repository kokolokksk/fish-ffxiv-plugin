"use strict";
var EorzeaAreaWeather = {
    "area.LimsaLominsa": {
        name: "area.LimsaLominsa",
        weatherRate: [
            { rate: 20, weather: "weather.Clouds" },
            { rate: 30, weather: "weather.ClearSkies" },
            { rate: 30, weather: "weather.FairSkies" },
            { rate: 10, weather: "weather.Fog" },
            { rate: -1, weather: "weather.Rain" }
        ]
    },
    "area.MiddleLa": {
        name: "area.MiddleLa",
        weatherRate: [
            { rate: 20, weather: "weather.Clouds" },
            { rate: 30, weather: "weather.ClearSkies" },
            { rate: 20, weather: "weather.FairSkies" },
            { rate: 10, weather: "weather.Wind" },
            { rate: 10, weather: "weather.Fog" },
            { rate: -1, weather: "weather.Rain" },
        ]
    },
    "area.LowerLa": {
        name: "area.LowerLa",
        weatherRate: [
            { rate: 20, weather: "weather.Clouds" },
            { rate: 30, weather: "weather.ClearSkies" },
            { rate: 20, weather: "weather.FairSkies" },
            { rate: 10, weather: "weather.Wind" },
            { rate: 10, weather: "weather.Fog" },
            { rate: -1, weather: "weather.Rain" },
        ]
    },
    "area.EasternLa": {
        name: "area.EasternLa",
        weatherRate: [
            { rate: 5, weather: "weather.Fog" },
            { rate: 45, weather: "weather.ClearSkies" },
            { rate: 30, weather: "weather.FairSkies" },
            { rate: 10, weather: "weather.Clouds" },
            { rate: 5, weather: "weather.Rain" },
            { rate: -1, weather: "weather.Showers" },
        ]
    },
    "area.WesternLa": {
        name: "area.WesternLa",
        weatherRate: [
            { rate: 10, weather: "weather.Fog" },
            { rate: 30, weather: "weather.ClearSkies" },
            { rate: 20, weather: "weather.FairSkies" },
            { rate: 20, weather: "weather.Clouds" },
            { rate: 10, weather: "weather.Wind" },
            { rate: -1, weather: "weather.Gales" },
        ]
    },
    "area.UpperLa": {
        name: "area.UpperLa",
        weatherRate: [
            { rate: 30, weather: "weather.ClearSkies" },
            { rate: 20, weather: "weather.FairSkies" },
            { rate: 20, weather: "weather.Clouds" },
            { rate: 10, weather: "weather.Fog" },
            { rate: 10, weather: "weather.Thunder" },
            { rate: -1, weather: "weather.Thunderstorms" },
        ]
    },
    "area.OuterLa": {
        name: "area.OuterLa",
        weatherRate: [
            { rate: 30, weather: "weather.ClearSkies" },
            { rate: 20, weather: "weather.FairSkies" },
            { rate: 20, weather: "weather.Clouds" },
            { rate: 15, weather: "weather.Fog" },
            { rate: -1, weather: "weather.Rain" },
        ]
    },
    "area.Mist": {
        name: "area.Mist",
        weatherRate: [
            { rate: 20, weather: "weather.Clouds" },
            { rate: 30, weather: "weather.ClearSkies" },
            { rate: 20, weather: "weather.FairSkies" },
            { rate: 10, weather: "weather.FairSkies" },
            { rate: 10, weather: "weather.Fog" },
            { rate: -1, weather: "weather.Rain" },
        ]
    },
    "area.Wolves": {
        name: "area.Wolves",
        weatherRate: [
            { rate: 20, weather: "weather.Clouds" },
            { rate: 30, weather: "weather.ClearSkies" },
            { rate: 30, weather: "weather.FairSkies" },
            { rate: 10, weather: "weather.Fog" },
            { rate: -1, weather: "weather.Thunderstorms" },
        ]
    },
    "area.Gridania": {
        name: "area.Gridania",
        weatherRate: [
            { rate: 5, weather: "weather.Rain" },
            { rate: 15, weather: "weather.Rain" },
            { rate: 10, weather: "weather.Fog" },
            { rate: 10, weather: "weather.Clouds" },
            { rate: 15, weather: "weather.FairSkies" },
            { rate: 30, weather: "weather.ClearSkies" },
            { rate: -1, weather: "weather.FairSkies" },
        ]
    },
    "area.CentralShroud": {
        name: "area.CentralShroud",
        weatherRate: [
            { rate: 5, weather: "weather.Thunder" },
            { rate: 15, weather: "weather.Rain" },
            { rate: 10, weather: "weather.Fog" },
            { rate: 10, weather: "weather.Clouds" },
            { rate: 15, weather: "weather.FairSkies" },
            { rate: 30, weather: "weather.ClearSkies" },
            { rate: -1, weather: "weather.FairSkies" },
        ]
    },
    "area.EastShroud": {
        name: "area.EastShroud",
        weatherRate: [
            { rate: 5, weather: "weather.Thunder" },
            { rate: 15, weather: "weather.Rain" },
            { rate: 10, weather: "weather.Fog" },
            { rate: 10, weather: "weather.Clouds" },
            { rate: 15, weather: "weather.FairSkies" },
            { rate: 30, weather: "weather.ClearSkies" },
            { rate: -1, weather: "weather.FairSkies" },
        ]
    },
    "area.SouthShroud": {
        name: "area.SouthShroud",
        weatherRate: [
            { rate: 5, weather: "weather.Fog" },
            { rate: 5, weather: "weather.Thunderstorms" },
            { rate: 15, weather: "weather.Thunder" },
            { rate: 5, weather: "weather.Fog" },
            { rate: 10, weather: "weather.Clouds" },
            { rate: 30, weather: "weather.FairSkies" },
            { rate: -1, weather: "weather.ClearSkies" },
        ]
    },
    "area.NorthShroud": {
        name: "area.NorthShroud",
        weatherRate: [
            { rate: 5, weather: "weather.Fog" },
            { rate: 5, weather: "weather.Showers" },
            { rate: 15, weather: "weather.Rain" },
            { rate: 5, weather: "weather.Fog" },
            { rate: 10, weather: "weather.Clouds" },
            { rate: 30, weather: "weather.FairSkies" },
            { rate: -1, weather: "weather.ClearSkies" },
        ]
    },
    "area.TheLavenderBeds": {
        name: "area.TheLavenderBeds",
        weatherRate: [
            { rate: 5, weather: "weather.Clouds" },
            { rate: 15, weather: "weather.Rain" },
            { rate: 10, weather: "weather.Fog" },
            { rate: 10, weather: "weather.Clouds" },
            { rate: 15, weather: "weather.FairSkies" },
            { rate: 30, weather: "weather.ClearSkies" },
            { rate: -1, weather: "weather.FairSkies" },
        ]
    },
    "area.Uldah": {
        name: "area.Uldah",
        weatherRate: [
            { rate: 40, weather: "weather.ClearSkies" },
            { rate: 20, weather: "weather.FairSkies" },
            { rate: 25, weather: "weather.Clouds" },
            { rate: 10, weather: "weather.Fog" },
            { rate: -1, weather: "weather.Rain" },
        ]
    },
    "area.WesternThanalan": {
        name: "area.WesternThanalan",
        weatherRate: [
            { rate: 40, weather: "weather.ClearSkies" },
            { rate: 20, weather: "weather.FairSkies" },
            { rate: 25, weather: "weather.Clouds" },
            { rate: 10, weather: "weather.Fog" },
            { rate: -1, weather: "weather.Rain" },
        ]
    },
    "area.CentralThanalan": {
        name: "area.CentralThanalan",
        weatherRate: [
            { rate: 15, weather: "weather.DustStorms" },
            { rate: 40, weather: "weather.ClearSkies" },
            { rate: 20, weather: "weather.FairSkies" },
            { rate: 10, weather: "weather.Clouds" },
            { rate: 10, weather: "weather.Fog" },
            { rate: -1, weather: "weather.Rain" },
        ]
    },
    "area.EasternThanalan": {
        name: "area.EasternThanalan",
        weatherRate: [
            { rate: 40, weather: "weather.ClearSkies" },
            { rate: 20, weather: "weather.FairSkies" },
            { rate: 10, weather: "weather.Clouds" },
            { rate: 10, weather: "weather.Fog" },
            { rate: 5, weather: "weather.Rain" },
            { rate: -1, weather: "weather.Showers" },
        ]
    },
    "area.SouthernThanalan": {
        name: "area.SouthernThanalan",
        weatherRate: [
            { rate: 20, weather: "weather.HeatWaves" },
            { rate: 40, weather: "weather.ClearSkies" },
            { rate: 20, weather: "weather.FairSkies" },
            { rate: 10, weather: "weather.Clouds" },
            { rate: -1, weather: "weather.Fog" },
        ]
    },
    "area.NorthernThanalan": {
        name: "area.NorthernThanalan",
        weatherRate: [
            { rate: 5, weather: "weather.ClearSkies" },
            { rate: 15, weather: "weather.FairSkies" },
            { rate: 30, weather: "weather.Clouds" },
            { rate: -1, weather: "weather.Fog" },
        ]
    },
    "area.TheGoblet": {
        name: "area.TheGoblet",
        weatherRate: [
            { rate: 40, weather: "weather.ClearSkies" },
            { rate: 20, weather: "weather.FairSkies" },
            { rate: 25, weather: "weather.Clouds" },
            { rate: 10, weather: "weather.Fog" },
            { rate: -1, weather: "weather.Rain" },
        ]
    },
    "area.MorDhona": {
        name: "area.MorDhona",
        weatherRate: [
            { rate: 15, weather: "weather.Clouds" },
            { rate: 15, weather: "weather.Fog" },
            { rate: 30, weather: "weather.Gloom" },
            { rate: 15, weather: "weather.ClearSkies" },
            { rate: -1, weather: "weather.FairSkies" },
        ]
    },
    "area.Ishgard": {
        name: "area.Ishgard",
        weatherRate: [
            { rate: 60, weather: "weather.Snow" },
            { rate: 10, weather: "weather.FairSkies" },
            { rate: 5, weather: "weather.ClearSkies" },
            { rate: 15, weather: "weather.Clouds" },
            { rate: -1, weather: "weather.Fog" },
        ]
    },
    "area.CoerthasCentral": {
        name: "area.CoerthasCentral",
        weatherRate: [
            { rate: 20, weather: "weather.Blizzards" },
            { rate: 40, weather: "weather.Snow" },
            { rate: 10, weather: "weather.FairSkies" },
            { rate: 5, weather: "weather.ClearSkies" },
            { rate: 15, weather: "weather.Clouds" },
            { rate: -1, weather: "weather.Fog" },
        ]
    },
    "area.CoerthasWestern": {
        name: "area.CoerthasWestern",
        weatherRate: [
            { rate: 20, weather: "weather.Blizzards" },
            { rate: 40, weather: "weather.Snow" },
            { rate: 10, weather: "weather.FairSkies" },
            { rate: 5, weather: "weather.ClearSkies" },
            { rate: 15, weather: "weather.Clouds" },
            { rate: -1, weather: "weather.Fog" },
        ]
    },
    "area.TheSeaofClouds": {
        name: "area.TheSeaofClouds",
        weatherRate: [
            { rate: 30, weather: "weather.ClearSkies" },
            { rate: 30, weather: "weather.FairSkies" },
            { rate: 10, weather: "weather.Clouds" },
            { rate: 10, weather: "weather.Fog" },
            { rate: 10, weather: "weather.Wind" },
            { rate: -1, weather: "weather.UmbralWind" },
        ]
    },
    "area.AzysLla": {
        name: "area.AzysLla",
        weatherRate: [
            { rate: 35, weather: "weather.FairSkies" },
            { rate: 35, weather: "weather.Clouds" },
            { rate: -1, weather: "weather.Thunder" },
        ]
    },
    "area.DravanianForelands": {
        name: "area.DravanianForelands",
        weatherRate: [
            { rate: 10, weather: "weather.Clouds" },
            { rate: 10, weather: "weather.Fog" },
            { rate: 10, weather: "weather.Thunder" },
            { rate: 10, weather: "weather.DustStorms" },
            { rate: 30, weather: "weather.ClearSkies" },
            { rate: -1, weather: "weather.FairSkies" },
        ]
    },
    "area.DravanianHinterlands": {
        name: "area.DravanianHinterlands",
        weatherRate: [
            { rate: 10, weather: "weather.Clouds" },
            { rate: 10, weather: "weather.Fog" },
            { rate: 10, weather: "weather.Rain" },
            { rate: 10, weather: "weather.Showers" },
            { rate: 30, weather: "weather.ClearSkies" },
            { rate: -1, weather: "weather.FairSkies" },
        ]
    },
    "area.ChurningMists": {
        name: "area.ChurningMists",
        weatherRate: [
            { rate: 10, weather: "weather.Clouds" },
            { rate: 10, weather: "weather.Gales" },
            { rate: 20, weather: "weather.UmbralStatic" },
            { rate: 30, weather: "weather.ClearSkies" },
            { rate: -1, weather: "weather.FairSkies" },
        ]
    },
    "area.Idyllshire": {
        name: "area.Idyllshire",
        weatherRate: [
            { rate: 10, weather: "weather.Clouds" },
            { rate: 10, weather: "weather.Fog" },
            { rate: 10, weather: "weather.Rain" },
            { rate: 10, weather: "weather.Showers" },
            { rate: 30, weather: "weather.ClearSkies" },
            { rate: -1, weather: "weather.FairSkies" },
        ]
    },
    "area.RhalgrsReach": {
        name: "area.RhalgrsReach",
        weatherRate: [
            { rate: 15, weather: "weather.ClearSkies" },
            { rate: 45, weather: "weather.FairSkies" },
            { rate: 20, weather: "weather.Clouds" },
            { rate: 10, weather: "weather.Fog" },
            { rate: -1, weather: "weather.Thunder" },
        ]
    },
    "area.TheFringes": {
        name: "area.TheFringes",
        weatherRate: [
            { rate: 15, weather: "weather.ClearSkies" },
            { rate: 45, weather: "weather.FairSkies" },
            { rate: 20, weather: "weather.Clouds" },
            { rate: 10, weather: "weather.Fog" },
            { rate: -1, weather: "weather.Thunder" },
        ]
    },
    "area.ThePeaks": {
        name: "area.ThePeaks",
        weatherRate: [
            { rate: 10, weather: "weather.ClearSkies" },
            { rate: 50, weather: "weather.FairSkies" },
            { rate: 15, weather: "weather.Clouds" },
            { rate: 10, weather: "weather.Fog" },
            { rate: 10, weather: "weather.Wind" },
            { rate: -1, weather: "weather.DustStorms" },
        ]
    },
    "area.TheLochs": {
        name: "area.TheLochs",
        weatherRate: [
            { rate: 20, weather: "weather.ClearSkies" },
            { rate: 40, weather: "weather.FairSkies" },
            { rate: 20, weather: "weather.Clouds" },
            { rate: 10, weather: "weather.Fog" },
            { rate: -1, weather: "weather.Thunderstorms" },
        ]
    },
    "area.Kugane": {
        name: "area.Kugane",
        weatherRate: [
            { rate: 10, weather: "weather.Rain" },
            { rate: 10, weather: "weather.Fog" },
            { rate: 20, weather: "weather.Clouds" },
            { rate: 40, weather: "weather.FairSkies" },
            { rate: -1, weather: "weather.ClearSkies" },
        ]
    },
    "area.Shirogane": {
        name: "area.Shirogane",
        weatherRate: [
            { rate: 10, weather: "weather.Rain" },
            { rate: 10, weather: "weather.Fog" },
            { rate: 20, weather: "weather.Clouds" },
            { rate: 40, weather: "weather.FairSkies" },
            { rate: -1, weather: "weather.ClearSkies" },
        ]
    },
    "area.RubySea": {
        name: "area.RubySea",
        weatherRate: [
            { rate: 10, weather: "weather.Thunder" },
            { rate: 10, weather: "weather.Wind" },
            { rate: 15, weather: "weather.Clouds" },
            { rate: 40, weather: "weather.FairSkies" },
            { rate: -1, weather: "weather.ClearSkies" },
        ]
    },
    "area.Yanxia": {
        name: "area.Yanxia",
        weatherRate: [
            { rate: 5, weather: "weather.Showers" },
            { rate: 10, weather: "weather.Rain" },
            { rate: 10, weather: "weather.Fog" },
            { rate: 15, weather: "weather.Clouds" },
            { rate: 40, weather: "weather.FairSkies" },
            { rate: -1, weather: "weather.ClearSkies" },
        ]
    },
    "area.AzimSteppe": {
        name: "area.AzimSteppe",
        weatherRate: [
            { rate: 5, weather: "weather.Gales" },
            { rate: 5, weather: "weather.Wind" },
            { rate: 7, weather: "weather.Rain" },
            { rate: 8, weather: "weather.Fog" },
            { rate: 10, weather: "weather.Clouds" },
            { rate: 40, weather: "weather.FairSkies" },
            { rate: -1, weather: "weather.ClearSkies" },
        ]
    }
};

var EorzeaClock = /** @class */ (function () {
    function EorzeaClock(ts) {
        if (ts === void 0) { ts = undefined; }
        if (ts !== undefined) {
            this.date = new Date(ts);
        }
        else {
            this.date = new Date(((new Date()).getTime()) * EorzeaClock.ratio);
        }
    }
    EorzeaClock.prototype.getHours = function () {
        return this.date.getUTCHours();
    };
    EorzeaClock.prototype.addHours = function (hourspan) {
        return new EorzeaClock(this.date.getTime() + (hourspan * 3600000));
    };
    EorzeaClock.prototype.getMinutes = function () {
        return this.date.getUTCMinutes();
    };
    EorzeaClock.prototype.getDays = function () {
        return Math.floor(this.date.getTime() / 86400000);
    };
    EorzeaClock.prototype.getLocalTime = function () {
        return new Date(this.date.getTime() / EorzeaClock.ratio);
    };
    EorzeaClock.prototype.toHourMinuteString = function () {
        var hour = this.getHours();
        var hs = "";
        if (hour < 10) {
            hs = "0" + hour;
        }
        else {
            hs += hour;
        }
        var min = this.getMinutes();
        var ms = "";
        if (min < 10) {
            ms = "0" + min;
        }
        else {
            ms += min;
        }
        return hs + ":" + ms;
    };
    EorzeaClock.ratio = 1440 / 70;
    return EorzeaClock;
}());

var EorzeaWeather = /** @class */ (function () {
    function EorzeaWeather() {
    }
    EorzeaWeather.calcBaseDate = function (time) {
        var tempDate = new EorzeaClock(time.date.getTime());
        var bh = tempDate.getHours() - tempDate.getHours() % 8;
        tempDate.date.setUTCHours(bh);
        tempDate.date.setMinutes(0);
        tempDate.date.setSeconds(0);
        return tempDate;
    };
    EorzeaWeather.forecastSeed = function (time, initSeeds) {
        if (initSeeds === void 0) { initSeeds = [0]; }
        function calcSeed(base) {
            var step1 = (base << 11 ^ base) >>> 0;
            var step2 = (step1 >>> 8 ^ step1) >>> 0;
            return step2 % 100;
        }
        return initSeeds
            .map(function (x) { return time.addHours(8 * x); })
            .map(function (t) { return t.getDays() * 100 + ((t.getHours() + 8 - t.getHours() % 8) % 24); })
            .map(function (i) { return calcSeed(i); });
    };
    EorzeaWeather.getForecast = function (areaName, seeds) {
        function getWeather(rates, seed) {
            for (var _i = 0, rates_1 = rates; _i < rates_1.length; _i++) {
                var r = rates_1[_i];
                if (r.rate == -1) {
                    return r.weather;
                }
                if (seed < r.rate) {
                    return r.weather;
                }
                else {
                    seed -= r.rate;
                }
            }
            return "N/A";
        }
        try {
            var areaRateData_1 = EorzeaAreaWeather[areaName];
            return seeds.map(function (s) { return getWeather(areaRateData_1.weatherRate, s); });
        }
        catch (err) {
            throw new ReferenceError("requested area name is not exist.");
        }
    };
    return EorzeaWeather;
}());
export { EorzeaWeather,EorzeaClock};
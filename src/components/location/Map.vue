<template>
  <div class="admin-map">
    <!-- <vue-headful title="Admin | MAP"/> -->
    <div class="row">
      <div class="col-md-12">
        <div class="map-area">
          <GmapMap
            :center="{lat: lat, lng: lng}"
            :zoom="17"
            map-type-id="terrain"
            style="width: 100%; height: 100%"
            ref="direction"
          >
            <DirectionsRenderer/>
          </GmapMap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../../main.js";
import { gmapApi } from "vue2-google-maps";
//import {} from 'vue2-google-maps';
import DirectionsRenderer from "./DirectionsRenderer.js";
export default {
  components: { DirectionsRenderer },
  data() {
    return {
      lat: 35.6978486,
      lng: 139.7774609,
      resultWindow: true,

      coordinates: [
        {
          title: "株式会社MIS",
          name: "〒101-0025 東京都千代田区神田佐久間町3-37-43",
          stId: "ステーションID ext0004",
          eSlot: "貸出可能数 5 ",
          t: "空きスロット数 3",
          lat: 35.6978486,
          lng: 139.7774609
        }
      ],
      rentalreq: [{ powerupsid: "test001", tokenid: "req00000001" }],
      rentaldata: null,
      infoPosition: null,
      infoContent: null,
      title: null,
      name: null,
      stId: null,
      eSlot: null,
      t: null,
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      directionsService: "",
      directionsDisplay: "",
      destination: "",
      coords: ""
    };
  },
  computed: {
    // google: gmapApi
    // currentPosition(){
    //     return this.coordinates[0];
    // }
  },
  methods: {
    getRental() {
      let c = confirm("Do you want to open channel ?");
      if (c) {
        let url = "https://api.requmum.com/rentalrequest";
        this.axios.post(url, { rentalreq: this.rentalreq }).then(response => {
          this.rentaldata = response.data.rentaldata;
          alert("Request sent");
        });
      }
    },
    // getRoute: function() {
    //   this.directionsService = new google.maps.DirectionsService();
    //   this.directionsDisplay = new google.maps.DirectionsRenderer();
    //   var myLocation = new google.maps.LatLng(this.lat, this.lng);
    //   var destination = new google.maps.LatLng(35.6978486, 139.7774609);
    //   this.directionsDisplay.setMap(this.$refs.direction.$mapObject); // this.$refs.direction.$mapObject
    //   var vm = this;

    //   vm.directionsService.route(
    //     {
    //       origin: myLocation,
    //       destination: destination,
    //       travelMode: "DRIVING"
    //     },
    //     function(response, status) {
    //       console.log(response);
    //       if (status === "OK") {
    //         vm.directionsDisplay.setDirections(response);
    //       } else {
    //         console.log("Directions request failed due to " + status);
    //       }
    //     }
    //   );
    // },
    getIcon(item) {
      return item.icon;
    },
    showResultWindow() {
      this.resultWindow = true;
    },
    getPosition: function(marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng)
      };
    },
    toggleInfo: function(marker, idx) {
      console.log(marker);
      this.resultWindow = false;
      this.infoPosition = this.getPosition(marker);
      this.title = marker.title;
      this.name = marker.name;
      this.stId = marker.stId;
      this.eSlot = marker.eSlot;
      this.t = marker.t;
      if (this.infoCurrentKey == idx) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = idx;
      }
    }
  },
  mounted() {
    this.$getLocation({
      enableHighAccuracy: true
    }).then(mycoordinates => {
      this.lat = mycoordinates.lat;
      this.lng = mycoordinates.lng;
      this.coordinates.push({
        title: "my location",
        lat: mycoordinates.lat,
        lng: mycoordinates.lng,
        icon: "/img/marker.jpg"
      });
      //
      // this.lat = coordinates.lat;
      // this.lng = coordinates.lng;
    });

    EventBus.$emit("hide_home_logo", "custom-map");
  },
  beforeDestroy() {
    EventBus.$emit("hide_home_logo");
  }
};
</script>


<style scoped>
.result-details {
  width: 65%;
  float: left;
  padding: 12px;
}

.result-call {
  width: 35%;
  float: right;
  padding: 5px;
  cursor: pointer;
}

.result-call span {
  padding-left: 28px;
  color: blue;
}

#map {
  height: 100%;
}

.map-area {
  height: 80vh;
  position: relative;
}
.address {
  margin-top: 5px;
  margin-left: 5px;
  cursor: pointer;
}

.address:hover {
  text-decoration: underline;
}
@media (max-width: 768px) {
  
}
</style>


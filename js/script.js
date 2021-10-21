new Vue ({
  el: "#app",
  data: {
      // primo lavoro
      elapsedTime11: 0,
      elapsedTime12: 0,
      elapsedTime13: 0,
      elapsedTime14: 0,
      timer1: undefined,
      timer12: undefined,
      timer13: undefined,
      timer14: undefined,
      show1: 1,
      name1: '',
      show1S1: 1,
      name1S1: '',
      show1S2: 1,
      name1S2: '',
      show1S3: 1,
      name1S3: '',
      show1S4: 1,
      name1S4: '',
      quantity1: [],
      totalHours1: 0,
      totalCost1: 0,
      selectedCoefficient: 50,

      // secondo lavoro
      elapsedTime_21: 0,
      elapsedTime_22: 0,
      elapsedTime_23: 0,
      elapsedTime_24: 0,
      timer2: undefined,
      timer22: undefined,
      timer23: undefined,
      timer24: undefined,
      show2: 1,
      name2: '',
      show2S1: 1,
      name2S1: '',
      show2S2: 1,
      name2S2: '',
      show2S3: 1,
      name2S3: '',
      show2S4: 1,
      name2S4: '',
      quantity2: [0, 0, 0, 0],
      totalHours2: 0,
      totalCost2: 0,
      selectedCoefficient2: 50,

      // terzo lavoro
      elapsedTime_31: 0,
      elapsedTime_32: 0,
      elapsedTime_33: 0,
      elapsedTime_34: 0,
      timer3: undefined,
      timer32: undefined,
      timer33: undefined,
      timer34: undefined,
      show3: 1,
      name3: '',
      show3S1: 1,
      name3S1: '',
      show3S2: 1,
      name3S2: '',
      show3S3: 1,
      name3S3: '',
      show3S4: 1,
      name3S4: '',
      quantity3: [0, 0, 0, 0],
      totalHours3: 0,
      totalCost3: 0,
      selectedCoefficient3: 50,


      // terzo lavoro
      elapsedTime_41: 0,
      elapsedTime_42: 0,
      elapsedTime_43: 0,
      elapsedTime_44: 0,
      timer4: undefined,
      timer42: undefined,
      timer43: undefined,
      timer44: undefined,
      show4: 1,
      name4: '',
      show4S1: 1,
      name4S1: '',
      show4S2: 1,
      name4S2: '',
      show4S3: 1,
      name4S3: '',
      show4S4: 1,
      name4S4: '',
      quantity4: [0, 0, 0, 0],
      totalHours4: 0,
      totalCost4: 0,
      selectedCoefficient4: 50,

  },
  computed: {
    // lavoro 1
    formattedElapsedTime11() {
      let date = new Date(null);
      date.setSeconds(this.elapsedTime11 / 1000);
      let utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    formattedElapsedTime12() {
      let date = new Date(null);
      date.setSeconds(this.elapsedTime12 / 1000);
      let utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    formattedElapsedTime13() {
      let date = new Date(null);
      date.setSeconds(this.elapsedTime13 / 1000);
      let utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    formattedElapsedTime14() {
      let date = new Date(null);
      date.setSeconds(this.elapsedTime14 / 1000);
      let utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },

    // lavoro 2
    formattedElapsedTime21() {
      let date2 = new Date(null);
      date2.setSeconds(this.elapsedTime_21 / 1000);
      let utc = date2.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    formattedElapsedTime22() {
      let date2 = new Date(null);
      date2.setSeconds(this.elapsedTime_22 / 1000);
      let utc = date2.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    formattedElapsedTime23() {
      let date2 = new Date(null);
      date2.setSeconds(this.elapsedTime_23 / 1000);
      let utc = date2.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    formattedElapsedTime24() {
      let date2 = new Date(null);
      date2.setSeconds(this.elapsedTime_24 / 1000);
      let utc = date2.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },

    // lavoro 3
    formattedElapsedTime31() {
      let date = new Date(null);
      date.setSeconds(this.elapsedTime_31 / 1000);
      let utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    formattedElapsedTime32() {
      let date = new Date(null);
      date.setSeconds(this.elapsedTime_32 / 1000);
      let utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    formattedElapsedTime33() {
      let date = new Date(null);
      date.setSeconds(this.elapsedTime_33 / 1000);
      let utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    formattedElapsedTime34() {
      let date = new Date(null);
      date.setSeconds(this.elapsedTime_34 / 1000);
      let utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },

    // lavoro 4
    formattedElapsedTime41() {
      let date = new Date(null);
      date.setSeconds(this.elapsedTime_41 / 1000);
      let utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    formattedElapsedTime42() {
      let date = new Date(null);
      date.setSeconds(this.elapsedTime_42 / 1000);
      let utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    formattedElapsedTime43() {
      let date = new Date(null);
      date.setSeconds(this.elapsedTime_43 / 1000);
      let utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    formattedElapsedTime44() {
      let date = new Date(null);
      date.setSeconds(this.elapsedTime_44 / 1000);
      let utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },

    
  },
  mounted() {
    // lavoro 1
    this.quantity1 = JSON.parse(localStorage.getItem("quantity1")) || []
    this.name1 = JSON.parse(localStorage.getItem("name1")) || []
    this.name1S1 = JSON.parse(localStorage.getItem("name1S1")) || []
    this.name1S2 = JSON.parse(localStorage.getItem("name1S2")) || []
    this.name1S3 = JSON.parse(localStorage.getItem("name1S3")) || []
    this.name1S4 = JSON.parse(localStorage.getItem("name1S4")) || []
    this.selectedCoefficient = localStorage.getItem("selectedCoefficient")


    this.elapsedTime11 = this.quantity1[0];

    this.elapsedTime12 = this.quantity1[1];

    this.elapsedTime13 = this.quantity1[2];

    this.elapsedTime14 = this.quantity1[3];

    for (let index = 0; index < this.quantity1.length; index++) {
      
      this.totalHours1 += this.quantity1[index];
      
    }

    this.totalHours1 = parseFloat((this.totalHours1 / 1000 / 3600).toFixed(2));
    this.totalCost1 = parseFloat(this.totalHours1 * parseInt(this.selectedCoefficient)).toFixed(2);

    if (this.name1 != '') {
      this.show1 = 0;
    }

    if (this.name1S1 != '') {
      this.show1S1 = 0;
    }

    if (this.name1S2 != '') {
      this.show1S2 = 0;
    }

    if (this.name1S3 != '') {
      this.show1S3 = 0;
    }

    if (this.name1S4 != '') {
      this.show1S4 = 0;
    }

    // lavoro 2
    this.quantity2 = JSON.parse(localStorage.getItem("quantity2")) || []
    this.name2 = JSON.parse(localStorage.getItem("name2")) || []
    this.name2S1 = JSON.parse(localStorage.getItem("name2S1")) || []
    this.name2S2 = JSON.parse(localStorage.getItem("name2S2")) || []
    this.name2S3 = JSON.parse(localStorage.getItem("name2S3")) || []
    this.name2S4 = JSON.parse(localStorage.getItem("name2S4")) || []
    this.selectedCoefficient2 = localStorage.getItem("selectedCoefficient2")


    this.elapsedTime_21 = this.quantity2[0];

    this.elapsedTime_22 = this.quantity2[1];

    this.elapsedTime_23 = this.quantity2[2];

    this.elapsedTime_24 = this.quantity2[3];

    for (let index = 0; index < this.quantity2.length; index++) {
      
      this.totalHours2 += this.quantity2[index];
      
    }

    this.totalHours2 = parseFloat((this.totalHours2 / 1000 / 3600).toFixed(2));
    this.totalCost2 = parseFloat(this.totalHours2 * parseInt(this.selectedCoefficient2)).toFixed(2);

    if (this.name2 != '') {
      this.show2 = 0;
    }

    if (this.name2S1 != '') {
      this.show2S1 = 0;
    }

    if (this.name2S2 != '') {
      this.show2S2 = 0;
    }

    if (this.name2S3 != '') {
      this.show2S3 = 0;
    }

    if (this.name2S4 != '') {
      this.show2S4 = 0;
    }


    // lavoro 3
    this.quantity3 = JSON.parse(localStorage.getItem("quantity3")) || []
    this.name3 = JSON.parse(localStorage.getItem("name3")) || []
    this.name3S1 = JSON.parse(localStorage.getItem("name3S1")) || []
    this.name3S2 = JSON.parse(localStorage.getItem("name3S2")) || []
    this.name3S3 = JSON.parse(localStorage.getItem("name3S3")) || []
    this.name3S4 = JSON.parse(localStorage.getItem("name3S4")) || []
    this.selectedCoefficient3 = localStorage.getItem("selectedCoefficient3")


    this.elapsedTime_31 = this.quantity3[0];

    this.elapsedTime_32 = this.quantity3[1];

    this.elapsedTime_33 = this.quantity3[2];

    this.elapsedTime_34 = this.quantity3[3];

    for (let index = 0; index < this.quantity3.length; index++) {
      
      this.totalHours3 += this.quantity3[index];
      
    }

    this.totalHours3 = parseFloat((this.totalHours3 / 1000 / 3600).toFixed(2));
    this.totalCost3 = parseFloat(this.totalHours3 * parseInt(this.selectedCoefficient3)).toFixed(2);

    if (this.name3 != '') {
      this.show3 = 0;
    }

    if (this.name3S1 != '') {
      this.show3S1 = 0;
    }

    if (this.name3S2 != '') {
      this.show3S2 = 0;
    }

    if (this.name3S3 != '') {
      this.show3S3 = 0;
    }

    if (this.name3S4 != '') {
      this.show3S4 = 0;
    }

    // lavoro 4
    this.quantity4 = JSON.parse(localStorage.getItem("quantity4")) || []
    this.name4 = JSON.parse(localStorage.getItem("name4")) || []
    this.name4S1 = JSON.parse(localStorage.getItem("name4S1")) || []
    this.name4S2 = JSON.parse(localStorage.getItem("name4S2")) || []
    this.name4S3 = JSON.parse(localStorage.getItem("name4S3")) || []
    this.name4S4 = JSON.parse(localStorage.getItem("name4S4")) || []
    this.selectedCoefficient4 = localStorage.getItem("selectedCoefficient4")


    this.elapsedTime_41 = this.quantity4[0];

    this.elapsedTime_42 = this.quantity4[1];

    this.elapsedTime_43 = this.quantity4[2];

    this.elapsedTime_44 = this.quantity4[3];

    for (let index = 0; index < this.quantity4.length; index++) {
      
      this.totalHours4 += this.quantity4[index];
      
    }

    this.totalHours4 = parseFloat((this.totalHours4 / 1000 / 3600).toFixed(2));
    this.totalCost4 = parseFloat(this.totalHours4 * parseInt(this.selectedCoefficient4)).toFixed(2);

    if (this.name4 != '') {
      this.show4 = 0;
    }

    if (this.name4S1 != '') {
      this.show4S1 = 0;
    }

    if (this.name4S2 != '') {
      this.show4S2 = 0;
    }

    if (this.name4S3 != '') {
      this.show4S3 = 0;
    }

    if (this.name4S4 != '') {
      this.show4S4 = 0;
    }


  },
  methods: {
    // LAVORO 1

    // coefficiente
    coefficient () {

      this.totalCost1 = parseFloat((this.totalHours1 * this.selectedCoefficient).toFixed(2));

      localStorage.setItem("selectedCoefficient", (this.selectedCoefficient));

    },
    // funzioni start
    start1() {
      this.timer1 = setInterval(() => {
        this.elapsedTime11 += 1000;
        this.quantity1[0] = this.elapsedTime11;
        localStorage.setItem("quantity1", JSON.stringify(this.quantity1));

        this.totalHours1 = 0;

        for (let index = 0; index < this.quantity1.length; index++) {
          
          this.totalHours1 += this.quantity1[index];
        }

        this.totalHours1 = parseFloat((this.totalHours1 / 1000 / 3600).toFixed(2));

        this.totalCost1 = parseFloat((this.totalHours1 * this.selectedCoefficient).toFixed(2));
      }, 1000);
    },
    start12() {
      this.timer12 = setInterval(() => {
        this.elapsedTime12 += 1000;
        this.quantity1[1] = this.elapsedTime12;
        localStorage.setItem("quantity1", JSON.stringify(this.quantity1));

        this.totalHours1 = 0;

        for (let index = 0; index < this.quantity1.length; index++) {
          this.totalHours1 += this.quantity1[index];
          
        }

        this.totalHours1 = parseFloat((this.totalHours1 / 1000 / 3600).toFixed(2));

        this.totalCost1 = parseFloat((this.totalHours1 * this.selectedCoefficient).toFixed(2));

      }, 1000);
    },
    start13() {
      this.timer13 = setInterval(() => {
        this.elapsedTime13 += 1000;
        this.quantity1[2] = this.elapsedTime13;
        localStorage.setItem("quantity1", JSON.stringify(this.quantity1));

        this.totalHours1 = 0;

        for (let index = 0; index < this.quantity1.length; index++) {
          this.totalHours1 += this.quantity1[index];
        }

        this.totalHours1 = parseFloat((this.totalHours1 / 1000 / 3600).toFixed(2));

        this.totalCost1 = parseFloat((this.totalHours1 * this.selectedCoefficient).toFixed(2));

      }, 1000);
    },
    start14() {
      this.timer14 = setInterval(() => {
        this.elapsedTime14 += 1000;
        this.quantity1[3] = this.elapsedTime14;
        localStorage.setItem("quantity1", JSON.stringify(this.quantity1));

        this.totalHours1 = 0;

        for (let index = 0; index < this.quantity1.length; index++) {
          this.totalHours1 += this.quantity1[index];
        }

        this.totalHours1 = parseFloat((this.totalHours1 / 1000 / 3600).toFixed(2));

        this.totalCost1 = parseFloat((this.totalHours1 * this.selectedCoefficient).toFixed(2));

      }, 1000);
    },
    // funzioni stop
    stop1() {
      clearInterval(this.timer1);
    },
    stop12() {
      clearInterval(this.timer12);
    },
    stop13() {
      clearInterval(this.timer13);
    },
    stop14() {
      clearInterval(this.timer14);
    },

    // funzioni reset
    reset1() {
      this.elapsedTime11 = 0;
      this.quantity1[0] = this.elapsedTime11;
      this.elapsedTime12 = 0;
      this.quantity1[1] = this.elapsedTime12;
      this.elapsedTime13 = 0;
      this.quantity1[2] = this.elapsedTime13;
      this.elapsedTime14 = 0;
      this.quantity1[3] = this.elapsedTime14;
      
      localStorage.setItem("quantity1", JSON.stringify(this.quantity1));
      this.totalHours1 = 0;
      this.totalCost1 = 0;

      this.selectedCoefficient = 50;
      localStorage.setItem("selectedCoefficient", (this.selectedCoefficient));

      

      this.show1 = 1;
      this.name1 = "";
      localStorage.setItem("name1", JSON.stringify(this.name1));

      this.show1S1 = 1;
      this.name1S1 = "";
      localStorage.setItem("name1S1", JSON.stringify(this.name1S1));

      this.show1S2 = 1;
      this.name1S2 = "";
      localStorage.setItem("name1S2", JSON.stringify(this.name1S2));

      this.show1S3 = 1;
      this.name1S3 = "";
      localStorage.setItem("name1S3", JSON.stringify(this.name1S3));

      this.show1S4 = 1;
      this.name1S4 = "";
      localStorage.setItem("name1S4", JSON.stringify(this.name1S4));
    },
    showName1() {
        this.show1 = 0;
        localStorage.setItem("name1", JSON.stringify(this.name1));
    },
    // funzioni mostra nome operatori
    showName1S1() {
        this.show1S1 = 0;
        localStorage.setItem("name1S1", JSON.stringify(this.name1S1));
    },
    showName1S2() {
        this.show1S2 = 0;
        localStorage.setItem("name1S2", JSON.stringify(this.name1S2));
    },
    showName1S3() {
        this.show1S3 = 0;
        localStorage.setItem("name1S3", JSON.stringify(this.name1S3));
    },
    showName1S4() {
        this.show1S4 = 0;
        localStorage.setItem("name1S4", JSON.stringify(this.name1S4));
    },


    ///////////////////////////////////////////////
    ///////////////////////////////////////////////
    // LAVORO 2

    // coefficiente
    coefficient2 () {

      this.totalCost2 = parseFloat((this.totalHours2 * this.selectedCoefficient2).toFixed(2));

      localStorage.setItem("selectedCoefficient2", (this.selectedCoefficient2));

    },
    // funzioni start
    start2() {
      this.timer2 = setInterval(() => {
        this.elapsedTime_21 += 1000;
        this.quantity2[0] = this.elapsedTime_21;
        localStorage.setItem("quantity2", JSON.stringify(this.quantity2));

        this.totalHours2 = 0;

        for (let index = 0; index < this.quantity2.length; index++) {
          
          this.totalHours2 += this.quantity2[index];
        }

        this.totalHours2 = parseFloat((this.totalHours2 / 1000 / 3600).toFixed(2));

        this.totalCost2 = parseFloat((this.totalHours2 * this.selectedCoefficient2).toFixed(2));
      }, 1000);
    },
    start22() {
      this.timer22 = setInterval(() => {
        this.elapsedTime_22 += 1000;
        this.quantity2[1] = this.elapsedTime_22;
        localStorage.setItem("quantity2", JSON.stringify(this.quantity2));

        this.totalHours2 = 0;

        for (let index = 0; index < this.quantity2.length; index++) {
          this.totalHours2 += this.quantity2[index];
          
        }

        this.totalHours2 = parseFloat((this.totalHours2 / 1000 / 3600).toFixed(2));

        this.totalCost2 = parseFloat((this.totalHours2 * this.selectedCoefficient2).toFixed(2));

      }, 1000);
    },
    start23() {
      this.timer23 = setInterval(() => {
        this.elapsedTime_23 += 1000;
        this.quantity2[2] = this.elapsedTime_23;
        localStorage.setItem("quantity2", JSON.stringify(this.quantity2));

        this.totalHours2 = 0;

        for (let index = 0; index < this.quantity2.length; index++) {
          this.totalHours2 += this.quantity2[index];
        }

        this.totalHours2 = parseFloat((this.totalHours2 / 1000 / 3600).toFixed(2));

        this.totalCost2 = parseFloat((this.totalHours2 * this.selectedCoefficient2).toFixed(2));

      }, 1000);
    },
    start24() {
      this.timer24 = setInterval(() => {
        this.elapsedTime_24 += 1000;
        this.quantity2[3] = this.elapsedTime_24;
        localStorage.setItem("quantity2", JSON.stringify(this.quantity2));

        this.totalHours2 = 0;

        for (let index = 0; index < this.quantity2.length; index++) {
          this.totalHours2 += this.quantity2[index];
        }

        this.totalHours2 = parseFloat((this.totalHours2 / 1000 / 3600).toFixed(2));

        this.totalCost2 = parseFloat((this.totalHours2 * this.selectedCoefficient2).toFixed(2));

      }, 1000);
    },
    // funzioni stop
    stop2() {
      clearInterval(this.timer2);
    },
    stop22() {
      clearInterval(this.timer22);
    },
    stop23() {
      clearInterval(this.timer23);
    },
    stop24() {
      clearInterval(this.timer24);
    },

    // funzioni reset
    reset2() {
      this.elapsedTime_21 = 0;
      this.quantity2[0] = this.elapsedTime_21;
      this.elapsedTime_22 = 0;
      this.quantity2[1] = this.elapsedTime_22;
      this.elapsedTime_23 = 0;
      this.quantity2[2] = this.elapsedTime_23;
      this.elapsedTime_24 = 0;
      this.quantity2[3] = this.elapsedTime_24;
      
      localStorage.setItem("quantity2", JSON.stringify(this.quantity2));
      this.totalHours2 = 0;
      this.totalCost2 = 0;

      this.selectedCoefficient2 = 50;
      localStorage.setItem("selectedCoefficient2", (this.selectedCoefficient2));

      

      this.show2 = 1;
      this.name2 = "";
      localStorage.setItem("name2", JSON.stringify(this.name2));

      this.show2S1 = 1;
      this.name2S1 = "";
      localStorage.setItem("name2S1", JSON.stringify(this.name2S1));

      this.show2S2 = 1;
      this.name2S2 = "";
      localStorage.setItem("name2S2", JSON.stringify(this.name2S2));

      this.show2S3 = 1;
      this.name2S3 = "";
      localStorage.setItem("name2S3", JSON.stringify(this.name2S3));

      this.show2S4 = 1;
      this.name2S4 = "";
      localStorage.setItem("name2S4", JSON.stringify(this.name2S4));
    },
    showName2() {
        this.show2 = 0;
        localStorage.setItem("name2", JSON.stringify(this.name2));
    },
    // funzioni mostra nome operatori
    showName2S1() {
        this.show2S1 = 0;
        localStorage.setItem("name2S1", JSON.stringify(this.name2S1));
    },
    showName2S2() {
        this.show2S2 = 0;
        localStorage.setItem("name2S2", JSON.stringify(this.name2S2));
    },
    showName2S3() {
        this.show2S3 = 0;
        localStorage.setItem("name2S3", JSON.stringify(this.name2S3));
    },
    showName2S4() {
        this.show2S4 = 0;
        localStorage.setItem("name2S4", JSON.stringify(this.name2S4));
    },

    ///////////////////////////////////////////////
    ///////////////////////////////////////////////
    // LAVORO 3

    // coefficiente
    coefficient3 () {

      this.totalCost3 = parseFloat((this.totalHours3 * this.selectedCoefficient3).toFixed(2));

      localStorage.setItem("selectedCoefficient3", (this.selectedCoefficient3));

    },
    // funzioni start
    start3() {
      this.timer3 = setInterval(() => {
        this.elapsedTime_31 += 1000;
        this.quantity3[0] = this.elapsedTime_31;
        localStorage.setItem("quantity3", JSON.stringify(this.quantity3));

        this.totalHours3 = 0;

        for (let index = 0; index < this.quantity3.length; index++) {
          
          this.totalHours3 += this.quantity3[index];
        }

        this.totalHours3 = parseFloat((this.totalHours3 / 1000 / 3600).toFixed(2));

        this.totalCost3 = parseFloat((this.totalHours3 * this.selectedCoefficient3).toFixed(2));
      }, 1000);
    },
    start32() {
      this.timer32 = setInterval(() => {
        this.elapsedTime_32 += 1000;
        this.quantity3[1] = this.elapsedTime_32;
        localStorage.setItem("quantity3", JSON.stringify(this.quantity3));

        this.totalHours3 = 0;

        for (let index = 0; index < this.quantity3.length; index++) {
          this.totalHours3 += this.quantity3[index];
          
        }

        this.totalHours3 = parseFloat((this.totalHours3 / 1000 / 3600).toFixed(2));

        this.totalCost3 = parseFloat((this.totalHours3 * this.selectedCoefficient3).toFixed(2));

      }, 1000);
    },
    start33() {
      this.timer33 = setInterval(() => {
        this.elapsedTime_33 += 1000;
        this.quantity3[2] = this.elapsedTime_33;
        localStorage.setItem("quantity3", JSON.stringify(this.quantity3));

        this.totalHours3 = 0;

        for (let index = 0; index < this.quantity3.length; index++) {
          this.totalHours3 += this.quantity3[index];
        }

        this.totalHours3 = parseFloat((this.totalHours3 / 1000 / 3600).toFixed(2));

        this.totalCost3 = parseFloat((this.totalHours3 * this.selectedCoefficient3).toFixed(2));

      }, 1000);
    },
    start34() {
      this.timer34 = setInterval(() => {
        this.elapsedTime_34 += 1000;
        this.quantity3[3] = this.elapsedTime_34;
        localStorage.setItem("quantity3", JSON.stringify(this.quantity3));

        this.totalHours3 = 0;

        for (let index = 0; index < this.quantity3.length; index++) {
          this.totalHours3 += this.quantity3[index];
        }

        this.totalHours3 = parseFloat((this.totalHours3 / 1000 / 3600).toFixed(2));

        this.totalCost3 = parseFloat((this.totalHours3 * this.selectedCoefficient3).toFixed(2));

      }, 1000);
    },
    // funzioni stop
    stop3() {
      clearInterval(this.timer3);
    },
    stop32() {
      clearInterval(this.timer32);
    },
    stop33() {
      clearInterval(this.timer33);
    },
    stop34() {
      clearInterval(this.timer34);
    },

    // funzioni reset
    reset3() {
      this.elapsedTime_31 = 0;
      this.quantity3[0] = this.elapsedTime_31;
      this.elapsedTime_32 = 0;
      this.quantity3[1] = this.elapsedTime_32;
      this.elapsedTime_33 = 0;
      this.quantity3[2] = this.elapsedTime_33;
      this.elapsedTime_34 = 0;
      this.quantity3[3] = this.elapsedTime_34;
      
      localStorage.setItem("quantity3", JSON.stringify(this.quantity3));
      this.totalHours3 = 0;
      this.totalCost3 = 0;

      this.selectedCoefficient3 = 50;
      localStorage.setItem("selectedCoefficient3", (this.selectedCoefficient3));

      

      this.show3 = 1;
      this.name3 = "";
      localStorage.setItem("name3", JSON.stringify(this.name3));

      this.show3S1 = 1;
      this.name3S1 = "";
      localStorage.setItem("name3S1", JSON.stringify(this.name3S1));

      this.show3S2 = 1;
      this.name3S2 = "";
      localStorage.setItem("name3S2", JSON.stringify(this.name3S2));

      this.show3S3 = 1;
      this.name3S3 = "";
      localStorage.setItem("name3S3", JSON.stringify(this.name3S3));

      this.show3S4 = 1;
      this.name3S4 = "";
      localStorage.setItem("name3S4", JSON.stringify(this.name3S4));
    },
    showName3() {
        this.show3 = 0;
        localStorage.setItem("name3", JSON.stringify(this.name3));
    },
    // funzioni mostra nome operatori
    showName3S1() {
        this.show3S1 = 0;
        localStorage.setItem("name3S1", JSON.stringify(this.name3S1));
    },
    showName3S2() {
        this.show3S2 = 0;
        localStorage.setItem("name3S2", JSON.stringify(this.name3S2));
    },
    showName3S3() {
        this.show3S3 = 0;
        localStorage.setItem("name3S3", JSON.stringify(this.name3S3));
    },
    showName3S4() {
        this.show3S4 = 0;
        localStorage.setItem("name3S4", JSON.stringify(this.name3S4));
    },

    ///////////////////////////////////////////////
    ///////////////////////////////////////////////
    // LAVORO 4

    // coefficiente
    coefficient4 () {

      this.totalCost4 = parseFloat((this.totalHours4 * this.selectedCoefficient4).toFixed(2));

      localStorage.setItem("selectedCoefficient4", (this.selectedCoefficient4));

    },
    // funzioni start
    start4() {
      this.timer4 = setInterval(() => {
        this.elapsedTime_41 += 1000;
        this.quantity4[0] = this.elapsedTime_41;
        localStorage.setItem("quantity4", JSON.stringify(this.quantity4));

        this.totalHours4 = 0;

        for (let index = 0; index < this.quantity4.length; index++) {
          
          this.totalHours4 += this.quantity4[index];
        }

        this.totalHours4 = parseFloat((this.totalHours4 / 1000 / 3600).toFixed(2));

        this.totalCost4 = parseFloat((this.totalHours4 * this.selectedCoefficient4).toFixed(2));
      }, 1000);
    },
    start42() {
      this.timer42 = setInterval(() => {
        this.elapsedTime_42 += 1000;
        this.quantity4[1] = this.elapsedTime_42;
        localStorage.setItem("quantity4", JSON.stringify(this.quantity4));

        this.totalHours4 = 0;

        for (let index = 0; index < this.quantity4.length; index++) {
          this.totalHours4 += this.quantity4[index];
          
        }

        this.totalHours4 = parseFloat((this.totalHours4 / 1000 / 3600).toFixed(2));

        this.totalCost4 = parseFloat((this.totalHours4 * this.selectedCoefficient4).toFixed(2));

      }, 1000);
    },
    start43() {
      this.timer43 = setInterval(() => {
        this.elapsedTime_43 += 1000;
        this.quantity4[2] = this.elapsedTime_43;
        localStorage.setItem("quantity4", JSON.stringify(this.quantity4));

        this.totalHours4 = 0;

        for (let index = 0; index < this.quantity4.length; index++) {
          this.totalHours4 += this.quantity4[index];
        }

        this.totalHours4 = parseFloat((this.totalHours4 / 1000 / 3600).toFixed(2));

        this.totalCost4 = parseFloat((this.totalHours4 * this.selectedCoefficient4).toFixed(2));

      }, 1000);
    },
    start44() {
      this.timer44 = setInterval(() => {
        this.elapsedTime_44 += 1000;
        this.quantity4[3] = this.elapsedTime_44;
        localStorage.setItem("quantity4", JSON.stringify(this.quantity4));

        this.totalHours4 = 0;

        for (let index = 0; index < this.quantity4.length; index++) {
          this.totalHours4 += this.quantity4[index];
        }

        this.totalHours4 = parseFloat((this.totalHours4 / 1000 / 3600).toFixed(2));

        this.totalCost4 = parseFloat((this.totalHours4 * this.selectedCoefficient4).toFixed(2));

      }, 1000);
    },
    // funzioni stop
    stop4() {
      clearInterval(this.timer4);
    },
    stop42() {
      clearInterval(this.timer42);
    },
    stop43() {
      clearInterval(this.timer43);
    },
    stop44() {
      clearInterval(this.timer44);
    },

    // funzioni reset
    reset4() {
      this.elapsedTime_41 = 0;
      this.quantity4[0] = this.elapsedTime_41;
      this.elapsedTime_42 = 0;
      this.quantity4[1] = this.elapsedTime_42;
      this.elapsedTime_43 = 0;
      this.quantity4[2] = this.elapsedTime_43;
      this.elapsedTime_44 = 0;
      this.quantity4[3] = this.elapsedTime_44;
      
      localStorage.setItem("quantity4", JSON.stringify(this.quantity4));
      this.totalHours4 = 0;
      this.totalCost4 = 0;

      this.selectedCoefficient4 = 50;
      localStorage.setItem("selectedCoefficient4", (this.selectedCoefficient4));

      

      this.show4 = 1;
      this.name4 = "";
      localStorage.setItem("name4", JSON.stringify(this.name4));

      this.show4S1 = 1;
      this.name4S1 = "";
      localStorage.setItem("name4S1", JSON.stringify(this.name4S1));

      this.show4S2 = 1;
      this.name4S2 = "";
      localStorage.setItem("name4S2", JSON.stringify(this.name4S2));

      this.show4S3 = 1;
      this.name4S3 = "";
      localStorage.setItem("name4S3", JSON.stringify(this.name4S3));

      this.show4S4 = 1;
      this.name4S4 = "";
      localStorage.setItem("name4S4", JSON.stringify(this.name4S4));
    },
    showName4() {
        this.show4 = 0;
        localStorage.setItem("name4", JSON.stringify(this.name4));
    },
    // funzioni mostra nome operatori
    showName4S1() {
        this.show4S1 = 0;
        localStorage.setItem("name4S1", JSON.stringify(this.name4S1));
    },
    showName4S2() {
        this.show4S2 = 0;
        localStorage.setItem("name4S2", JSON.stringify(this.name4S2));
    },
    showName4S3() {
        this.show4S3 = 0;
        localStorage.setItem("name4S3", JSON.stringify(this.name4S3));
    },
    showName4S4() {
        this.show4S4 = 0;
        localStorage.setItem("name4S4", JSON.stringify(this.name4S4));
    },
    
  }
});
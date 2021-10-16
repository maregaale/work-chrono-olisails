new Vue ({
  el: "#app",
  data: {
      elapsedTime1: 0,
      elapsedTime2: 0,
      elapsedTime3: 0,
      elapsedTime4: 0,
      timer: undefined,
      timer2: undefined,
      timer3: undefined,
      timer4: undefined,
      show: 1,
      name: '',
      showS1: 1,
      nameS1: '',
      showS2: 1,
      nameS2: '',
      showS3: 1,
      nameS3: '',
      showS4: 1,
      nameS4: '',
      quantity: [],
      totalHours: 0,
  },
  computed: {
    formattedElapsedTime1() {
      let date = new Date(null);
      date.setSeconds(this.elapsedTime1 / 1000);
      let utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    formattedElapsedTime2() {
      let date = new Date(null);
      date.setSeconds(this.elapsedTime2 / 1000);
      let utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    formattedElapsedTime3() {
      let date = new Date(null);
      date.setSeconds(this.elapsedTime3 / 1000);
      let utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
    formattedElapsedTime4() {
      let date = new Date(null);
      date.setSeconds(this.elapsedTime4 / 1000);
      let utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
  },
  mounted() {
    this.quantity = JSON.parse(localStorage.getItem("quantity")) || []
    this.name = JSON.parse(localStorage.getItem("name")) || []
    this.nameS1 = JSON.parse(localStorage.getItem("nameS1")) || []
    this.nameS2 = JSON.parse(localStorage.getItem("nameS2")) || []
    this.nameS3 = JSON.parse(localStorage.getItem("nameS3")) || []
    this.nameS4 = JSON.parse(localStorage.getItem("nameS4")) || []

    this.elapsedTime1 = this.quantity[0];

    this.elapsedTime2 = this.quantity[1];

    this.elapsedTime3 = this.quantity[2];

    this.elapsedTime4 = this.quantity[3];

    for (let index = 0; index < this.quantity.length; index++) {
      
      this.totalHours += this.quantity[index];
      
    }

    this.totalHours = parseFloat((this.totalHours / 1000 / 3600).toFixed(2));

    if (this.name != '') {
      this.show = 0;
    }

    if (this.nameS1 != '') {
      this.showS1 = 0;
    }

    if (this.nameS2 != '') {
      this.showS2 = 0;
    }

    if (this.nameS3 != '') {
      this.showS3 = 0;
    }

    if (this.nameS4 != '') {
      this.showS4 = 0;
    }
  },
  methods: {
    // funzioni start
    start() {
      this.timer = setInterval(() => {
        this.elapsedTime1 += 1000;
        this.quantity[0] = this.elapsedTime1;
        localStorage.setItem("quantity", JSON.stringify(this.quantity));

        this.totalHours = 0;

        for (let index = 0; index < this.quantity.length; index++) {
          
          this.totalHours += this.quantity[index];
        }

        this.totalHours = parseFloat((this.totalHours / 1000 / 3600).toFixed(2));
      }, 1000);
    },
    start2() {
      this.timer2 = setInterval(() => {
        this.elapsedTime2 += 1000;
        this.quantity[1] = this.elapsedTime2;
        localStorage.setItem("quantity", JSON.stringify(this.quantity));

        this.totalHours = 0;

        for (let index = 0; index < this.quantity.length; index++) {
          this.totalHours += this.quantity[index];
          
        }

        this.totalHours = parseFloat((this.totalHours / 1000 / 3600).toFixed(2));
      }, 1000);
    },
    start3() {
      this.timer3 = setInterval(() => {
        this.elapsedTime3 += 1000;
        this.quantity[2] = this.elapsedTime3;
        localStorage.setItem("quantity", JSON.stringify(this.quantity));

        this.totalHours = 0;

        for (let index = 0; index < this.quantity.length; index++) {
          this.totalHours += this.quantity[index];
        }

        this.totalHours = parseFloat((this.totalHours / 1000 / 3600).toFixed(2));
      }, 1000);
    },
    start4() {
      this.timer4 = setInterval(() => {
        this.elapsedTime4 += 1000;
        this.quantity[3] = this.elapsedTime4;
        localStorage.setItem("quantity", JSON.stringify(this.quantity));

        this.totalHours = 0;

        for (let index = 0; index < this.quantity.length; index++) {
          this.totalHours += this.quantity[index];
        }

        this.totalHours = parseFloat((this.totalHours / 1000 / 3600).toFixed(2));
      }, 1000);
    },
    // funzioni stop
    stop() {
      clearInterval(this.timer);
    },
    stop2() {
      clearInterval(this.timer2);
    },
    stop3() {
      clearInterval(this.timer3);
    },
    stop4() {
      clearInterval(this.timer4);
    },
    // funzioni reset
    reset() {
      this.elapsedTime1 = 0;
      this.quantity[0] = this.elapsedTime1;
      this.elapsedTime2 = 0;
      this.quantity[1] = this.elapsedTime2;
      this.elapsedTime3 = 0;
      this.quantity[2] = this.elapsedTime3;
      this.elapsedTime4 = 0;
      this.quantity[3] = this.elapsedTime4;
      
      localStorage.setItem("quantity", JSON.stringify(this.quantity));
      this.totalHours = 0;

      this.show = 1;
      this.name = "";
      localStorage.setItem("name", JSON.stringify(this.name));

      this.showS1 = 1;
      this.nameS1 = "";
      localStorage.setItem("nameS1", JSON.stringify(this.nameS1));

      this.showS2 = 1;
      this.nameS2 = "";
      localStorage.setItem("nameS2", JSON.stringify(this.nameS2));

      this.showS3 = 1;
      this.nameS3 = "";
      localStorage.setItem("nameS3", JSON.stringify(this.nameS3));

      this.showS4 = 1;
      this.nameS4 = "";
      localStorage.setItem("nameS4", JSON.stringify(this.nameS4));
    },
    showName() {
        this.show = 0;
        localStorage.setItem("name", JSON.stringify(this.name));
    },
    // funzioni mostra nome operatori
    showNameS1() {
        this.showS1 = 0;
        localStorage.setItem("nameS1", JSON.stringify(this.nameS1));
    },
    showNameS2() {
        this.showS2 = 0;
        localStorage.setItem("nameS2", JSON.stringify(this.nameS2));
    },
    showNameS3() {
        this.showS3 = 0;
        localStorage.setItem("nameS3", JSON.stringify(this.nameS3));
    },
    showNameS4() {
        this.showS4 = 0;
        localStorage.setItem("nameS4", JSON.stringify(this.nameS4));
    }
  }
});
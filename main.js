var app = new Vue({
  el: "#app",
  data: {
    welcome_message: "",
    games: [
      { title: "Halo" },
      { title: "Rainbow Six" },
      { title: "Fifa" },
      { title: "Farming simulator" }
    ]
  },
  methods: {
    addGame: function(event) {
      this.games.push({ title: this.gameInput });
    }
  }
});

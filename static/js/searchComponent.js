function searchComponent() {
  return {
    open: false,
    searchQuery: "",
    results: [],
    fuse: null,

    init() {
      fetch("/index.json")
        .then((res) => res.json())
        .then((data) => {
          this.fuse = new Fuse(data, {
            keys: ["title", "summary", "content"],
            includeScore: true,
            threshold: 0.3,
          });
        });
    },

    search() {
      if (this.searchQuery.trim() === "" || !this.fuse) {
        this.results = [];
        return;
      }
      this.results = this.fuse.search(this.searchQuery);
    },
  };
}

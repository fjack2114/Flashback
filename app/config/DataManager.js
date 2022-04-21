export default class DataManager {
  static myInstance = null;
  userID = "";

  memories = [
    {
      userid: "user1",
      photoID: 1,
      title: "Across the Ditch",
      category: "Getaway",
      location: "New Zealand",
      image: require("../assets/3.jpg"),
      date: "14/1/19",
    },
    {
      userid: "user1",
      photoID: 2,
      title: "Eating at Sydney Eye Tower",
      category: "Eating",
      location: "Sydney",
      image: require("../assets/Eating.jpeg"),
      date: "4/3/2022",
    },
    {
      userid: "user1",
      photoID: 3,
      title: "Christmas",
      category: "Family",
      location: "Glenbrook",
      image: require("../assets/Xmas.jpeg"),
      date: "25/12/22",
    },
    {
      userid: "user1",
      photoID: 4,
      title: "Chilling at Home",
      category: "Home",
      location: "West Ryde",
      image: require("../assets/home.jpeg"),
      date: "3/9/21",
    },
  ];

  static getInstance() {
    if (DataManager.myInstance == null) {
      DataManager.myInstance = new DataManager();
    }
    return this.myInstance;
  }

  getUserID() {
    return this.userID;
  }

  setUserID(id) {
    this.userID = id;
  }

  getMemories(id) {
    return this.memories.filter((memory) => memory.userid === id);
  }

  addMemory(memory) {
    this.memories.push(memory);
  }
}

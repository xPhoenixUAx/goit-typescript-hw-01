type AllUser = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: string | number | Date;
    updateAt: string | number | Date;
  };
};

const page1: AllUser = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: AllUser = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

export {};

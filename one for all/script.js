const business = {
  businessName: "Nightingale Decor",
  location: {
    city: "Lahore",
    country: "Pakistan",
  },
  specialty: "Desi Weddings",
  founded: 2025,
};

// Your code here:
const {
  businessName,
  location: { city },
  specialty,
} = business;
console.log(
  `My business name is ${businessName} and my speciality is ${specialty} though we only operate in ${city}`,
);

const artists = [
  "Chase Atlantic",
  "The Weeknd",
  "Arctic Monkeys",
  "Neighborhood",
  "Drake",
];

// Your code here:
const [favorite, secondfavorite, ...others] = artists;
console.log(
  `my first favorite is ${favorite} and then second favorite would be ${secondfavorite} then rest ${others}`,
);
const user = {
  username: "Hamza-Sama",
  stack: "MERN",
  isLockingIn: true,
};

// Your code here:
const displayProfile = ({ username, stack }) => {
  console.log(username, stack);
};
displayProfile(user);
//  Boss level:
const project = { title: "Portfolio", status: "In Progress", commits: 10 };
const checkProject = ({ title, status, commits }) => {
  console.log(
    `The ${title} project is ${status}. You have ${commits} commits ${commits >= 10 ? "Good Job!" : "Keep going!"}`,
  );
};
checkProject(project);
// Next task:
const myWork = [
  { id: 1, type: "Mayon", status: "Completed" },
  { id: 2, type: "Mehndi", status: "Pending" },
  { id: 3, type: "Reception", status: "Completed" },
];
let projectTitles = myWork.map(({ type }) => {
  return `Project Type: ${type}`;
});
console.log(projectTitles);
// to be continued
// 3/12/2026
const bookings = [
  { id: 1, client: "Sarah", status: "Confirmed" },
  { id: 2, client: "Zain", status: "Pending" },
  { id: 3, client: "Ali", status: "Confirmed" },
];

const confirmedBookings = bookings.filter((el) => {
  if(el.status === "Confirmed"){
    return el.client
  }
  return
});
console.log(confirmedBookings);

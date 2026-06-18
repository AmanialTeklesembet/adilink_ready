const dialog = document.querySelector("[data-auth-dialog]");
const form = document.querySelector("[data-auth-form]");
const message = document.querySelector("[data-form-message]");
const tabs = document.querySelectorAll("[data-auth-tab]");
const views = document.querySelectorAll("[data-auth-view]");
const profileLink = document.querySelector("[data-profile-link]");
const logoutButton = document.querySelector("[data-logout]");
const createProfileButton = document.querySelector("[data-profile-panel] [data-auth-open]");

const translations = {
  en: {
    heroTitle: "ዓዲ ናዓመን",
    heroText: "Connecting people from Adi Naamen worldwide."
  },
  ti: {
    heroTitle: "ዓዲ ናዓመን",
    heroText: "ንሰባት ዓዲ ናዓመን ኣብ መላእ ዓለም የተኣሳስር።"
  }
};

let activeMode = "login";
let activeLanguage = localStorage.getItem("adilinkLanguage") || "en";

function getUsers() {
  return JSON.parse(localStorage.getItem("adilinkUsers") || "[]");
}

function saveUsers(users) {
  localStorage.setItem("adilinkUsers", JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("adilinkCurrentUser") || "null");
}

function saveCurrentUser(user) {
  localStorage.setItem("adilinkCurrentUser", JSON.stringify(user));
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "AL";
}

function setAuthMode(mode) {
  activeMode = mode;
  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.authTab === mode));
  views.forEach((view) => {
    view.hidden = view.dataset.authView !== mode;
  });
  message.textContent = "";
}

function openAuth(mode = "login") {
  setAuthMode(mode);
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeAuth() {
  dialog.close();
  form.reset();
  message.textContent = "";
}

function updateProfile() {
  const user = getCurrentUser();
  const isLoggedIn = Boolean(user);
  const name = isLoggedIn ? user.name : "Guest visitor";
  const email = isLoggedIn ? user.email : "Join AdiLink to create your profile.";
  const location = isLoggedIn ? user.location || [user.city, user.country].filter(Boolean).join(", ") || "Not added yet" : "Worldwide";
  const status = isLoggedIn ? user.status || "Email confirmation sent" : "Visitor";
  const language = activeLanguage === "ti" ? "ትግርኛ" : "English / ትግርኛ";

  document.querySelector("[data-panel-name]").textContent = name;
  document.querySelector("[data-panel-email]").textContent = email;
  document.querySelector("[data-panel-location]").textContent = location;
  document.querySelector("[data-panel-status]").textContent = status;
  document.querySelector("[data-panel-language]").textContent = language;
  document.querySelector("[data-panel-initials]").textContent = initials(name);

  profileLink.hidden = !isLoggedIn;
  logoutButton.hidden = !isLoggedIn;
  createProfileButton.hidden = isLoggedIn;

  if (isLoggedIn) {
    document.querySelector("[data-user-initials]").textContent = initials(name);
    document.querySelector("[data-user-name]").textContent = name.split(" ")[0];
  }
}

function applyLanguage() {
  const copy = translations[activeLanguage];
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = copy[node.dataset.i18n];
  });
  localStorage.setItem("adilinkLanguage", activeLanguage);
  updateProfile();
}

function registerUser(formData) {
  const firstName = formData.get("firstName")?.trim();
  const lastName = formData.get("lastName")?.trim();
  const email = formData.get("registerEmail")?.trim().toLowerCase();
  const password = formData.get("registerPassword")?.trim();
  const location = formData.get("location")?.trim();
  const country = formData.get("country")?.trim();
  const city = formData.get("city")?.trim();
  const connection = formData.get("connection")?.trim();

  if (!firstName || !email || !password) {
    message.textContent = "Please add first name, email and password.";
    return;
  }

  const users = getUsers();
  if (users.some((user) => user.email === email)) {
    message.textContent = "This email is already registered. Try login.";
    return;
  }

  const user = {
    name: `${firstName} ${lastName || ""}`.trim(),
    email,
    password,
    location: location || [city, country].filter(Boolean).join(", "),
    country,
    city,
    connection,
    status: "Email confirmation sent",
    membership: "Member",
    createdAt: new Date().toISOString()
  };

  users.push(user);
  saveUsers(users);
  saveCurrentUser(user);
  closeAuth();
  updateProfile();
  scrollToProfile();
}

function loginUser(formData) {
  const email = formData.get("loginEmail")?.trim().toLowerCase();
  const password = formData.get("loginPassword")?.trim();
  const user = getUsers().find((item) => item.email === email && item.password === password);

  if (!user) {
    message.textContent = "Could not find that user. You can register or use demo member.";
    return;
  }

  saveCurrentUser(user);
  closeAuth();
  updateProfile();
  scrollToProfile();
}

function scrollToProfile() {
  document.querySelector("#profile").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll("[data-auth-open]").forEach((button) => {
  button.addEventListener("click", () => openAuth(button.dataset.authOpen));
});

document.querySelector("[data-auth-close]").addEventListener("click", closeAuth);

tabs.forEach((tab) => {
  tab.addEventListener("click", () => setAuthMode(tab.dataset.authTab));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  if (activeMode === "register") {
    registerUser(formData);
  } else {
    loginUser(formData);
  }
});

document.querySelector("[data-demo-login]").addEventListener("click", () => {
  const demoUser = {
    name: "AdiLink Member",
    email: "member@adilink.local",
    password: "demo",
    location: "Oslo, Norway",
    country: "Norway",
    city: "Oslo",
    connection: "Adi Naamen community",
    status: "VIP demo member",
    membership: "VIP",
    createdAt: new Date().toISOString()
  };
  const users = getUsers();
  if (!users.some((user) => user.email === demoUser.email)) {
    users.push(demoUser);
    saveUsers(users);
  }
  saveCurrentUser(demoUser);
  closeAuth();
  updateProfile();
  scrollToProfile();
});

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("adilinkCurrentUser");
  updateProfile();
});

profileLink.addEventListener("click", scrollToProfile);

document.querySelector("[data-language-toggle]").addEventListener("click", () => {
  activeLanguage = activeLanguage === "en" ? "ti" : "en";
  applyLanguage();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").catch(() => {});
}

applyLanguage();
updateProfile();

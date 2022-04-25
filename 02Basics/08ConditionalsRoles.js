var user = "admin";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "suadmin":
        console.log("You get access to consume client");
        break;
    default:
        console.log("Trial user");
        break;
}
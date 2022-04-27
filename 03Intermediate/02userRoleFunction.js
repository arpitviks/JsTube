function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break;
        case "subadmin":
            return `${name} is subadmin with CR access`
            break;
        case "testPrep":
            return `${name} is testprep with Read access`
            break;
        default:
            return `${name} is a trial user`
            break;
    }
};

console.log(getUserRole("Hitesh", "testPrep"));
var val = getUserRole("Arpit", "admin")
console.log(val);
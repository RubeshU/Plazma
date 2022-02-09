export const BloodList = [
    {
        path:"",
        type: "O+",
        giveTo: ["O+","A+","AB+"],
        receiveFrom: ["O+","O-"],
    },
    {
        path:"ON",
        type: "O-",
        giveTo: ["A+","AB+"],
        receiveFrom: ["A+","A-","O+","O-"],
    },
    {
        path:"AP",
        type: "A+",
        giveTo: ["O+","A+","AB+"],
        receiveFrom: ["O+","O-"],
    },
    {
        path:"AN",
        type: "A-",
        giveTo: ["A+","AB+"],
        receiveFrom: ["A+","A-","O+","O-"],
    },
    {
        path:"BP",
        type: "B+",
        giveTo: ["O+","A+","AB+"],
        receiveFrom: ["O+","O-"],
    },
    {
        path:"BN",
        type: "B-",
        giveTo: ["A+","AB+"],
        receiveFrom: ["A+","A-","O+","O-"],
    },
    {
        path:"ABP",
        type: "AB+",
        giveTo: ["O+","A+","AB+"],
        receiveFrom: ["O+","O-"],
    },
    {
        path:"ABN",
        type: "AB-",
        giveTo: ["A+","AB+"],
        receiveFrom: ["A+","A-","O+","O-"],
    },
];
export const BloodList = [
    {
        path:"",
        type: "O+",
        giveTo: ["O+","A+","B+","AB+"],
        receiveFrom: ["O+","O-"],
    },
    {
        path:"ON",
        type: "O-",
        giveTo: ["ALL"],
        receiveFrom: ["O-"],
    },
    {
        path:"AP",
        type: "A+",
        giveTo: ["A+","AB+"],
        receiveFrom: ["A+","A-","O+","O-"],
    },
    {
        path:"AN",
        type: "A-",
        giveTo: ["A+","A-","AB+","AB-"],
        receiveFrom: ["A-","O-"],
    },
    {
        path:"BP",
        type: "B+",
        giveTo: ["B+","AB+"],
        receiveFrom: ["B+","B-","O+","O-"],
    },
    {
        path:"BN",
        type: "B-",
        giveTo: ["B+","B-","AB+","AB-"],
        receiveFrom: ["B-","O-"],
    },
    {
        path:"ABP",
        type: "AB+",
        giveTo: ["AB+"],
        receiveFrom: ["ALL"],
    },
    {
        path:"ABN",
        type: "AB-",
        giveTo: ["AB+","AB-"],
        receiveFrom: ["AB-","A-","B-","O-"],
    },
];

export const receptorInfo = [
    {
        id: "1",
        name: "Rubesh U",
        bloodType: "O+",
        status: "URGENT",
        city: "Chennai",
        age: "20",
        hospital: "######hospital",
        description: "KJHWLKdjlqwjdlaskl;askd;sakdlskdljadl;ksa;ldkas;dls’dla’;d’as;dmadlkelknfdk,mfkmdlkmfldkmfkdsmfklsmfklmsdkfmdlkmflskdmfdslkfdskfksdjfkjfkdsjfjfiwrejflwejfkdnfkdnknfdfndknfkdnfkdfnkdnfkdnfdknfdsknflkdjfkljfff",
        units: "3",
    },
    {
        id: "2",
        name: "Sudarsan MS",
        bloodType: "O-",
        status: "REGISTERED",
        city: "Chennai",
        age: "20",
        hospital: "######hospital",
        description: "KJHWLKdjlqwjdlaskl;askd;sakdlskdljadl;ksa;ldkas;dls’dla’;d’as;dmadlkelknfdk,mfkmdlkmfldkmfkdsmfklsmfklmsdkfmdlkmflskdmfdslkfdskfksdjfkjfkdsjfjfiwrejflwejfkdnfkdnknfdfndknfkdnfkdfnkdnfkdnfdknfdsknflkdjfkljfff",
        units: "2",
    },
    {
        id: "3",
        name: "Rubesh U",
        bloodType: "O-",
        status: "FULFILLED",
        city: "Chennai",
        age: "20",
        hospital: "######hospital",
        description: "KJHWLKdjlqwjdlaskl;askd;sakdlskdljadl;ksa;ldkas;dls’dla’;d’as;dmadlkelknfdk,mfkmdlkmfldkmfkdsmfklsmfklmsdkfmdlkmflskdmfdslkfdskfksdjfkjfkdsjfjfiwrejflwejfkdnfkdnknfdfndknfkdnfkdfnkdnfkdnfdknfdsknflkdjfkljfff",
        units: "4",
    },
];
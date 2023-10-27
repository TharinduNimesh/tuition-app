const cards = [
  {
    title: "INDIVIDUAL",
    price: {
      monthly: "5000",
      annually: "4500",
    },
    features: [
      {
        description: "Up to 250 Students",
        status: true,
      },
      {
        description: "Up to 2 Assistants",
        status: true,
      },
      {
        description: "Up to 5 Classes",
        status: true,
      },
      {
        description: "LMS Access (limited)",
        status: true,
      },
      {
        description: "Communication Hub",
        status: false,
      },
      {
        description: "Personal Website",
        status: false,
      },
    ],
    content: "Designed for a single teacher or tutor.",
  },
  {
    title: "INSTITUTION",
    price: {
      monthly: "16000",
      annually: "14000",
    },
    features: [
      {
        description: "Up to 3000 Students",
        status: true,
      },
      {
        description: "Up to 30 Teachers",
        status: true,
      },
      {
        description: "Up to 50 Classes",
        status: true,
      },
      {
        description: "LMS Access (limited)",
        status: true,
      },
      {
        description: "Communication Hub",
        status: true,
      },
      {
        description: "Personal Website",
        status: false,
      },
    ],
    content: "Suitable for a single education center or branch.",
  },
  {
    title: "ORGANIZATION",
    price: {
      monthly: "35000",
      annually: "31000",
    },
    features: [
      {
        description: "Unlimited Students",
        status: true,
      },
      {
        description: "Unlimited Teachers",
        status: true,
      },
      {
        description: "Unlimited Classes",
        status: true,
      },
      {
        description: "Up to 3 Branches",
        status: true,
      },
      {
        description: "LMS Access (full)",
        status: true,
      },
      {
        description: "Communication Hub",
        status: true,
      },
      {
        description: "Personal Website",
        status: true,
      },
    ],
    content: "Ideal for education center with multiple branches.",
  },
];

export default cards;

export const navItems = [
  {
    title: true,
    name: "Person List"
  },
  {
    name: "FAMOUS",
    url: "/person",
    icon: "icon-user",
    children: [
      {
        name: "International",
        icon: "icon-globe",
        children: [
          {
            name: "Tom Cruise",
            url: "/person/tom-cruise",
            icon: "icon-people"
          },
          {
            name: "Taylor Swift",
            url: "/person/taylor-swift",
            icon: "icon-people"
          },
          {
            name: 'Arnold S',
            url: '/person/arnold',
            icon: 'icon-people'
          }
        ]
      },
      {
        name: "Indonesia",
        icon: "icon-map",
        children: [
          {
            name: "Iwan Fals",
            url: "/person/iwan-fals",
            icon: "icon-people"
          },
          {
            name: "Slank",
            url: "/person/slank",
            icon: "icon-people"
          },
          {
            name: "Ahmad Dhani",
            url: "/person/ahmad-dhani",
            icon: "icon-people"
          }
        ]
      }
    ]
  }
];

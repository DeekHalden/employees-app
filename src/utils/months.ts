export const monthNames: string[] = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const getMonthName = (month: string | Date) => {
  return monthNames[new Date(month).getMonth()]
}
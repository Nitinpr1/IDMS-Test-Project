export const navigationBar = [
    { name: "Lead & NPD", bgColor: "bg-blue-500", color: "text-blue-500", width: "13px", icon: "/Media/business_leads.svg" },
    { name: "Sales", bgColor: "bg-cyan-500", color: "text-cyan-500", width: "17px", icon: "/Media/sales.svg" },
    { name: "PPIC - Planning", bgColor: "bg-blue-500", color: "text-blue-500", width: "17px", icon: "/Media/planning.svg" },
    { name: "Purchase", bgColor: "bg-pink-500", color: "text-pink-500", width: "17px", icon: "/Media/purchase.svg" },
    { name: "Stores", bgColor: "bg-cyan-500", color: "text-cyan-500", width: "17px", icon: "/Media/store.svg" },
    { name: "Production", bgColor: "bg-blue-500", color: "text-blue-500", width: "17px", icon: "/Media/production.svg" },
    { name: "Maintenance", bgColor: "bg-red-500", color: "text-red-500", width: "17px", icon: "/Media/maintenance.svg" },
    { name: "Quality", bgColor: "bg-green-500", color: "text-green-500", width: "17px", icon: "/Media/quality.svg" },
    { name: "Logistics", bgColor: "bg-red-500", color: "text-red-500", width: "17px", icon: "/Media/dispatch.svg" },
    { name: "HRM", bgColor: "bg-cyan-500", color: "text-cyan-500", width: "17px", icon: "/Media/hr.svg" },
    { name: "Accounts", bgColor: "bg-purple-500", color: "text-purple-500", width: "17px", icon: "/Media/accounts.svg" },
    { name: "Finance", bgColor: "bg-blue-500", color: "text-blue-500", width: "17px", icon: "/Media/finance.svg" },
    { name: "Settings", bgColor: "bg-red-500", color: "text-red-500", width: "17px", icon: "/Media/settings.svg" },
    { name: "Support", bgColor: "bg-cyan-500", color: "text-cyan-500", width: "17px", icon: "/Media/support.svg" },
    // { name: "Powered by IDMS", bgColor: "bg-pink-500", color: "text-pink-500", width: "17px", icon: "/Media/idms-logo.svg" },
]

export const sales1 = [
    { name: "YTD Net Sale [D]*", value: "133.40 Lakh", color: "text-green-700" },
    { name: "MTD Net Sale [D]*", value: "0.00 Lakh", color: "text-green-700" },
    { name: "YTD Tax Invoice [D]*", value: "133.25 Lakh", color: "text-orange-500" },
    { name: "MTD Tax Invoice [D]*", value: "0.00 Lakh", color: "text-green-700" },
    { name: "YTD Service Invoice [D]*", value: "0.15 Lakh", color: "text-green-700" },
    { name: "MTD Service Invoice [D]*", value: "0.00 Lakh", color: "text-green-700" },    
];

export const chart1 = {
  labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
  datasets: [
    {
      label: 'Monthly Domestic SO [in Lakh]',
      data: [138.25, 7.29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#007bbb',
    },
  ],
};

export const chart2 = {
  labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
  datasets: [
    {
      label: 'Monthly Domestic SO [in Lakh]',
      data: [127.14, 6.11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#007bbb',
    },
  ],
};


export const options = {
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 20,
      },
    },
  },
};

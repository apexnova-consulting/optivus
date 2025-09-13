// Mock data for the dashboard
export const adoptionData = {
  currentRate: 68,
  previousRate: 45,
  activeUsers: 342,
  totalUsers: 500,
  timeToAdoption: 14, // days
  roiImpact: 125000, // dollars
  
  // Adoption over time data (last 12 weeks)
  adoptionOverTime: Array.from({ length: 12 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (11 - i) * 7)
    return {
      date: date.toISOString().split("T")[0],
      rate: Math.min(Math.round(10 + (i * 6) + (Math.random() * 5)), 100),
    }
  }),

  // ROI projection data (next 6 months)
  roiProjection: Array.from({ length: 6 }, (_, i) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const date = new Date()
    date.setMonth(date.getMonth() + i)
    const month = monthNames[date.getMonth()]
    return {
      month,
      actual: i < 2 ? Math.round(50000 + (i * 75000) + (Math.random() * 10000)) : null,
      projected: Math.round(75000 + (i * 75000)),
    }
  }),

  // Daily activity data for heatmap (last 365 days)
  dailyActivity: Array.from({ length: 365 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (364 - i))
    return {
      date: date.toISOString().split("T")[0],
      value: Math.floor(Math.random() * 50),
    }
  }),

  // Department adoption rates
  departmentAdoption: [
    { name: "Sales", rate: 82 },
    { name: "Marketing", rate: 75 },
    { name: "Engineering", rate: 90 },
    { name: "Customer Support", rate: 65 },
    { name: "Operations", rate: 55 },
    { name: "Finance", rate: 45 },
    { name: "HR", rate: 70 },
  ],

  // Recent activities
  recentActivities: [
    {
      id: 1,
      user: "Alex Thompson",
      action: "Completed onboarding",
      department: "Sales",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Maria Garcia",
      action: "First successful use",
      department: "Marketing",
      time: "4 hours ago",
    },
    {
      id: 3,
      user: "James Wilson",
      action: "Reached power user status",
      department: "Engineering",
      time: "1 day ago",
    },
    {
      id: 4,
      user: "Sarah Chen",
      action: "Started training",
      department: "Operations",
      time: "1 day ago",
    },
    {
      id: 5,
      user: "David Kim",
      action: "Completed certification",
      department: "Customer Support",
      time: "2 days ago",
    },
  ],

  // Feature usage data
  featureUsage: [
    { name: "Dashboard", usageRate: 95 },
    { name: "ROI Calculator", usageRate: 78 },
    { name: "Reports", usageRate: 65 },
    { name: "Nudge Creation", usageRate: 45 },
    { name: "Analytics", usageRate: 82 },
  ],

  // User segments
  userSegments: [
    { name: "Power Users", count: 75, percentage: 15 },
    { name: "Regular Users", count: 200, percentage: 40 },
    { name: "Occasional Users", count: 150, percentage: 30 },
    { name: "Inactive Users", count: 75, percentage: 15 },
  ],
}

// Mock data for nudges
export const nudgeData = {
  activeNudges: 5,
  totalNudges: 12,
  averageEngagement: 42,
  
  nudges: [
    {
      id: 1,
      title: "Complete Your Profile",
      type: "email",
      status: "active",
      engagement: 45,
      sentCount: 250,
      clickRate: 32,
      lastSent: "2025-09-12",
      audience: "New Users",
      message: "Your profile is 60% complete. Take 2 minutes to add your role and preferences to get personalized recommendations.",
    },
    {
      id: 2,
      title: "Try New Analytics Feature",
      type: "in-app",
      status: "active",
      engagement: 38,
      sentCount: 500,
      clickRate: 28,
      lastSent: "2025-09-11",
      audience: "Regular Users",
      message: "We've just launched powerful new analytics features. Click here to explore them.",
    },
    {
      id: 3,
      title: "Share Success Story",
      type: "slack",
      status: "scheduled",
      engagement: 0,
      sentCount: 0,
      clickRate: 0,
      lastSent: null,
      audience: "Power Users",
      message: "You've achieved great results! Share your success story with your team.",
    },
    {
      id: 4,
      title: "Weekly Team Update",
      type: "teams",
      status: "active",
      engagement: 52,
      sentCount: 100,
      clickRate: 45,
      lastSent: "2025-09-10",
      audience: "Team Leaders",
      message: "Check out your team's adoption progress this week. Your team is leading in engagement!",
    },
    {
      id: 5,
      title: "ROI Milestone Alert",
      type: "email",
      status: "active",
      engagement: 65,
      sentCount: 50,
      clickRate: 58,
      lastSent: "2025-09-09",
      audience: "Executives",
      message: "Your department has reached 150% ROI on technology investments. View the full report.",
    },
  ],

  // Nudge templates
  templates: [
    {
      id: 1,
      name: "Welcome Series",
      type: "email",
      description: "Onboarding sequence for new users",
    },
    {
      id: 2,
      name: "Feature Announcement",
      type: "in-app",
      description: "Announce new features to relevant users",
    },
    {
      id: 3,
      name: "Engagement Boost",
      type: "slack",
      description: "Re-engage inactive users",
    },
    {
      id: 4,
      name: "Success Celebration",
      type: "teams",
      description: "Celebrate user and team achievements",
    },
  ],
}

// Mock data for ROI calculator
export const roiCalculatorDefaults = {
  employeeCount: 500,
  averageSalary: 75000,
  softwareCost: 100000,
  productivityGain: 15, // percentage
  adoptionRate: 70, // percentage
  implementationCost: 50000,
  trainingCost: 25000,
}

// Mock data for reports
export const reportTemplates = [
  {
    id: "executive-summary",
    name: "Executive Summary",
    description: "High-level overview of adoption and ROI metrics",
    sections: ["KPIs", "ROI Analysis", "Adoption Trends"],
  },
  {
    id: "adoption-detailed",
    name: "Detailed Adoption Report",
    description: "In-depth analysis of user adoption patterns",
    sections: ["User Segments", "Feature Usage", "Department Analysis"],
  },
  {
    id: "roi-analysis",
    name: "ROI Analysis Report",
    description: "Comprehensive analysis of financial impact",
    sections: ["Cost Analysis", "Benefits Analysis", "Projections"],
  },
  {
    id: "nudge-performance",
    name: "Nudge Performance Report",
    description: "Analysis of behavioral nudge effectiveness",
    sections: ["Engagement Metrics", "Click Rates", "Impact Analysis"],
  },
]
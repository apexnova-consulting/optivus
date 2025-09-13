"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  Brain,
  FileText,
  Home,
  LineChart,
  LogOut,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"

// Rest of the file content remains the same...
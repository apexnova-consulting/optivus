import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export type UserRole = 'admin' | 'manager' | 'employee'

export interface UserProfile {
  id: string
  email: string
  full_name: string
  role: UserRole
  org_id: string
  team_id?: string
  created_at: string
  updated_at: string
}

export async function signUp({
  email,
  password,
  fullName,
  orgName,
  role = 'admin',
}: {
  email: string
  password: string
  fullName: string
  orgName: string
  role?: UserRole
}) {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role,
      },
    },
  })

  if (authError) throw authError

  // Create organization
  const { data: orgData, error: orgError } = await supabase
    .from('organizations')
    .insert([
      {
        name: orgName,
        created_by: authData.user?.id,
      },
    ])
    .select()
    .single()

  if (orgError) throw orgError

  // Create user profile
  const { error: profileError } = await supabase.from('user_profiles').insert([
    {
      id: authData.user?.id,
      email,
      full_name: fullName,
      role,
      org_id: orgData.id,
    },
  ])

  if (profileError) throw profileError

  return { user: authData.user, organization: orgData }
}

export async function signIn({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) throw error

  return data
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export async function resetPassword(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  })
  if (error) throw error
}

export async function updatePassword(password: string) {
  const { error } = await supabase.auth.updateUser({
    password,
  })
  if (error) throw error
}

export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data
}

export async function updateUserProfile(
  userId: string,
  updates: Partial<UserProfile>
) {
  const { error } = await supabase
    .from('user_profiles')
    .update(updates)
    .eq('id', userId)

  if (error) throw error
}

export async function getOrganizationUsers(orgId: string) {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('org_id', orgId)

  if (error) throw error
  return data
}

export async function inviteUser({
  email,
  role,
  orgId,
  teamId,
}: {
  email: string
  role: UserRole
  orgId: string
  teamId?: string
}) {
  // In a real implementation, this would send an email invitation
  // For now, we'll just create the user profile
  const { error } = await supabase.from('user_profiles').insert([
    {
      email,
      role,
      org_id: orgId,
      team_id: teamId,
      status: 'invited',
    },
  ])

  if (error) throw error
}
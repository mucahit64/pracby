/**
 * Composable for RBAC permission/role checks on the client.
 *
 * Reads from the same global Nuxt state keys populated by useUserSession,
 * so no extra API call is needed — just call useRBAC() anywhere in the app.
 *
 * Usage:
 *   const { hasPermission, hasRole } = useRBAC()
 *   if (hasPermission('manage_exams')) { ... }
 */
export function useRBAC() {
  // Share the same useState keys as useUserSession — Nuxt deduplicates automatically
  const role = useState<string>('pbUserRole', () => '')
  const permissions = useState<string[]>('pbUserPermissions', () => [])

  function hasPermission(permission: string): boolean {
    return permissions.value.includes(permission)
  }

  function hasRole(roleName: string): boolean {
    return role.value === roleName
  }

  return { hasPermission, hasRole }
}

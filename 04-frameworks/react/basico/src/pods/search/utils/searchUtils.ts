import { MemberAPI } from '@/pods/search/api/searchAPI.model'
import { Member } from '@/pods/search/Search.model'

export const mapToMembers = (members: MemberAPI[]): Member[] => {
  return members.map((member: MemberAPI) => ({
    id: member.id,
    login: member.login ?? member.id,
    name: member.name ?? member.login,
    avatarUrl: member.avatar_url ?? member.image,
  }))
}

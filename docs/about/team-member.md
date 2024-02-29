<script setup>
// https://vitepress.dev/reference/default-theme-team-page
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/Anxiu0101.png',
    name: 'Anxiu0101',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Anxiu0101' },
      { icon: 'twitter', link: 'https://twitter.com/Anxiu0101' }
    ]
  },
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />
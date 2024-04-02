---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

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
  {
    avatar: 'https://www.github.com/Anxiu0101.png',
    name: 'Anxiu0101',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/Anxiu0101' },
      { icon: 'twitter', link: 'https://twitter.com/Anxiu0101' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of CampusHub-Online is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
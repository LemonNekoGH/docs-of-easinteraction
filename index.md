---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Easinteraction"
  text: "Improve DX of contracts developers"
  tagline: Easinteraction is a tool that help users to generate code for easier contract interaction
  actions:
    - theme: brand
      text: Get started
      link: /installation
    - theme: alt
      text: View on GitHub
      link: https://github.com/LemonNekoGH/easinteraction-for-cadence

features:
  - title: Code generation
    details: Provide a cli to read your smart contract and generate golang API.
    icon: 🖨
  - title: Multiple files support
    details: It can read the flow.json in your smart contract project, and generate code of all contracts.
    icon: 📑
  - title: Based on official Cadence parser
    details: It will use official parser to parse your contract. So it will update sync with Cadence version.
    icon: ✅
---

<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme';
import steam from '/public/steam.svg?raw';

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/17664845',
    name: 'LemonNeko',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/LemonNekoGH' },
      { icon: 'twitter', link: 'https://twitter.com/lemon_neko_cn' },
      { icon: { svg: steam }, link: 'https://steamcommunity.com/id/lemonneko_cn/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/30291104',
    name: 'LiliumNeko',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/LiliumNeko' },
      { icon: 'twitter', link: 'https://twitter.com/lilium_neko' }
    ]
  },
]
</script>
<div class="member-title">Members</div>

<VPTeamMembers size="small" :members="members" />

<style lang="less">
.member-title {
  text-align: center; 
  margin-top: 2rem;
  font-size: 1.5rem;
  line-height: 4rem;
  color: var(--vp-c-text-2);
  font-family: var(--vp-font-family-base);
  font-weight: 500;
}
</style>

